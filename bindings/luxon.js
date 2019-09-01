import { DateTime, Interval, Duration } from "luxon";

const isUnitless = a => {
  const keys = Object.keys(a);
  return keys.length === 1 && keys[0] === "unitless";
};

export const luxon = (
  { NATIVEDATE, DATEXPRESION, DURATIONEXPRESSION, DURATIONOBJECT },
  { console }
) => {
  return {
    makeDuration: (duration, { type }) => {
      return {
        [DURATIONEXPRESSION]: a => {
          try {
            const maybedurationobject = JSON.parse(a);
            if (Array.isArray(maybedurationobject)) {
              return Duration.fromObject(
                maybedurationobject[0],
                Object.assign(
                  { conversionAccuracy: "longterm" },
                  maybedurationobject[1]
                )
              );
            } else if (typeof maybedurationobject === "string") {
              return Duration.fromISO(maybedurationobject, {
                conversionAccuracy: "longterm"
              });
            } else if (typeof maybedurationobject === "number") {
              return Duration.fromMillis(maybedurationobject, {
                conversionAccuracy: "longterm"
              });
            } else {
              return Duration.fromObject(maybedurationobject, {
                conversionAccuracy: "longterm"
              });
            }
          } catch (e) {
            return Duration.fromISO(a, { conversionAccuracy: "longterm" });
          }
        },
        [DURATIONOBJECT]: o =>
          Duration.fromObject(o, { conversionAccuracy: "longterm" })
      }[type](duration);
    },
    makeDate: (date, { type }) => {
      return {
        [DATEXPRESION]: a => {
          try {
            const maybedateobject = JSON.parse(a);
            if (Array.isArray(maybedateobject)) {
              return DateTime.fromObject(
                maybedateobject[0],
                maybedateobject[1]
              );
            } else if (typeof maybedateobject === "string") {
              return DateTime.fromISO(maybedateobject);
            } else if (typeof maybedateobject === "number") {
              return DateTime.fromMillis(maybedateobject);
            } else {
              return DateTime.fromObject(maybedateobject);
            }
          } catch (e) {
            return DateTime.fromISO(a);
          }
        },
        [NATIVEDATE]: DateTime.fromJSDate
      }[type](date);
    },
    plus: (a, b) => {
      if (isUnitless(a) && isUnitless(b)) {
        return { unitless: a.unitless + b.unitless };
      }
      if (Interval.isInterval(a) && Interval.isInterval(b)) {
        return a.union(b);
      }
      if (Interval.isInterval(a) && Duration.isDuration(b)) {
        return Interval.fromDateTimes(a.start.plus(b), a.end.plus(b));
      }
      if (Interval.isInterval(b) && Duration.isDuration(a)) {
        return Interval.fromDateTimes(b.start.plus(a), b.end.plus(a));
      }
      if (Interval.isInterval(a) && DateTime.isDateTime(b)) {
        if (a.isAfter(b)) {
          return Interval.fromDateTimes(b, a.end);
        }
        if (a.isBefore(b)) {
          return Interval.fromDateTimes(a.start, b);
        }
        return b;
      }
      if (Interval.isInterval(b) && DateTime.isDateTime(a)) {
        return a.plus(b.toDuration());
      }
      if (Interval.isInterval(b) && DateTime.isDateTime(a)) {
        return Interval.fromDateTimes(b.start.minus(a), b.end.minus(a));
      }
      if (Duration.isDuration(a) && Duration.isDuration(b)) {
        return a.plus(b);
      }
      if (DateTime.isDateTime(a) && DateTime.isDateTime(b)) {
        throw new Error("Can't add dates to each other!");
      }
      if (DateTime.isDateTime(a) && a.isValid && Duration.isDuration(b)) {
        // b is duratoin
        return a.plus(b);
      }
      if (DateTime.isDateTime(b) && b.isValid && Duration.isDuration(a)) {
        // a is duratoin
        return b.plus(a);
      }
      const e = `Invalid arguments for 'plus', expected (date, duration), (duration, date), (duration, duration) but found (${
        a.invalidExplanation ? `Invalid date ${a.invalidExplanation}` : typeof a
      }, ${
        b.invalidExplanation ? `Invalid date ${b.invalidExplanation}` : typeof b
      })`;
      console.error(e, a, b);
      throw new Error(e);
    },
    minus: (a, b) => {
      if (isUnitless(a) && isUnitless(b)) {
        return { unitless: a.unitless - b.unitless };
      }
      if (Interval.isInterval(a) && Interval.isInterval(b)) {
        const inter = a.intersection(b);
        if (inter) return inter;
        return Interval.fromDateTimes(
          a.isBefore(b) ? a.end : b.end,
          a.isBefore(b) ? b.start : a.start
        );
      }
      if (Interval.isInterval(a) && Duration.isDuration(b)) {
        return Interval.fromDateTimes(a.start.minus(b), a.end.minus(b));
      }
      if (Interval.isInterval(b) && Duration.isDuration(a)) {
        return Interval.fromDateTimes(b.start.minus(a), b.end.minus(a));
      }
      if (Duration.isDuration(a) && Duration.isDuration(b)) {
        return a.minus(b);
      }
      if (Interval.isInterval(a) && DateTime.isDateTime(b)) {
        if (a.isBefore(b)) {
          return Interval.fromDateTimes(a.end, b);
        }
        if (a.isAfter(b)) {
          return a;
        }
        return Interval.fromDateTimes(a.start, b);
      }
      if (Interval.isInterval(b) && DateTime.isDateTime(a)) {
        return a.minus(b.toDuration());
      }
      if (
        DateTime.isDateTime(a) &&
        a.isValid &&
        DateTime.isDateTime(b) &&
        b.isValid
      ) {
        return Interval.fromDateTimes(a, b);
      }
      if (DateTime.isDateTime(a) && a.isValid && Duration.isDuration(b)) {
        // b is duratoin
        return a.minus(b);
      }
      if (DateTime.isDateTime(b) && b.isValid && Duration.isDuration(a)) {
        // a is duratoin
        return b.minus(a);
      }
      const e = `Invalid arguments for 'minus', expected (date, duration), (duration, date), (duration, duration) but found (${
        a.invalidExplanation ? `Invalid date ${a.invalidExplanation}` : typeof a
      }, ${
        b.invalidExplanation ? `Invalid date ${b.invalidExplanation}` : typeof b
      })`;
      console.error(e, a, b);
      throw new Error(e);
    },
    multiply: (a, b) => {
      if (isUnitless(a) && isUnitless(b)) {
        return { unitless: a.unitless * b.unitless };
      }
      if (Duration.isDuration(a) && isUnitless(b)) {
        const tmp = Object.entries(a.toObject()).reduce(
          (p, [k, v]) =>
            Object.assign(p, {
              [k]: v * b.unitless
            }),
          {}
        );
        return a.set(tmp);
      }
      if (Duration.isDuration(b) && isUnitless(a)) {
        const tmp = Object.entries(b.toObject()).reduce(
          (p, [k, v]) =>
            Object.assign(p, {
              [k]: v * a.unitless
            }),
          {}
        );
        return b.set(tmp);
      }
      const e = `Invalid arguments for multiply, expected (duration, unitless) or (unitless, duration) but found (${
        a.invalidExplanation ? `Invalid date ${a.invalidExplanation}` : typeof a
      }, ${
        b.invalidExplanation ? `Invalid date ${b.invalidExplanation}` : typeof b
      })`;
      console.error(e, a, b);
      throw new Error(e);
    },
    divide: (a, b) => {
      if (isUnitless(a) && isUnitless(b)) {
        return { unitless: a.unitless / b.unitless };
      }
      if (Duration.isDuration(a) && isUnitless(b)) {
        const tmp = Object.entries(a.toObject()).reduce(
          (p, [k, v]) =>
            Object.assign(p, {
              [k]: v / b.unitless
            }),
          {}
        );
        return a.set(tmp);
      }
      if (Duration.isDuration(b) && isUnitless(a)) {
        const tmp = Object.entries(b.toObject()).reduce(
          (p, [k, v]) =>
            Object.assign(p, {
              [k]: v / a.unitless
            }),
          {}
        );
        return b.set(tmp);
      }
      if (Duration.isDuration(a) && Duration.isDuration(b)) {
        console.warn(`Dividing one duration by another is potentially unsafe!`);
        return { unitless: a.valueOf() / b.valueOf() };
      }
      const e = `Invalid arguments for divide, expected (duration, unitless) or (unitless, duration) but found (${
        a.invalidExplanation ? `Invalid date ${a.invalidExplanation}` : typeof a
      }, ${
        b.invalidExplanation ? `Invalid date ${b.invalidExplanation}` : typeof b
      })`;
      console.error(e, a, b);
      throw new Error(e);
    }
  };
};
export default luxon;