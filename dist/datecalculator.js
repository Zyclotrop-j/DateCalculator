!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("date-fns"),require("luxon")):"function"==typeof define&&define.amd?define(["date-fns","luxon"],n):"object"==typeof exports?exports.datecalculator=n(require("date-fns"),require("luxon")):e.datecalculator=n(e.datefns,e.luxon)}(this,function(e,n){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.luxonCalculator=n.datefnsCalculator=n.simpleCalculator=void 0;var r,i=t(1),u=(r=i)&&r.__esModule?r:{default:r},o=t(2),a=t(3),s=t(5);var c={log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),info:console.info.bind(console),debug:console.debug.bind(console)};n.simpleCalculator=(0,u.default)((0,o.simple)(u.default,{console:c})),n.datefnsCalculator=(0,u.default)((0,a.datefns)(u.default,{console:c})),n.luxonCalculator=(0,u.default)((0,s.luxon)(u.default,{console:c}));n.default=(0,u.default)((0,o.simple)(u.default,{console:c}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.NATIVEDATE="NATIVEDATE",i=n.DATEXPRESION="DATEXPRESION",u=n.DURATIONEXPRESSION="DURATIONEXPRESSION",o=n.DURATIONOBJECT="DURATIONOBJECT",a=function(e){return function(){throw new Error(e)}},s=function(e){var n={},t=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},s=Object.assign({makeDuration:a('"makeDuration" option missing'),makeDate:a('"makeDate" option missing'),plus:a('"plus" option missing'),minus:a('"minus" option missing'),multiply:a('"multiply" option missing'),divide:a('"divide" option missing')},e,{interpolation:function(e){return n[e]}}),c=function(){function e(n,t,r,i){this.message=n,this.expected=t,this.found=r,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}return function(e,n){function t(){this.constructor=e}t.prototype=n.prototype,e.prototype=new t}(e,Error),e.buildMessage=function(e,n){var t={literal:function(e){return'"'+i(e.text)+'"'},class:function(e){var n,t="";for(n=0;n<e.parts.length;n++)t+=e.parts[n]instanceof Array?u(e.parts[n][0])+"-"+u(e.parts[n][1]):u(e.parts[n]);return"["+(e.inverted?"^":"")+t+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function u(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}return"Expected "+function(e){var n,r,i,u=new Array(e.length);for(n=0;n<e.length;n++)u[n]=(i=e[n],t[i.type](i));if(u.sort(),u.length>0){for(n=1,r=1;n<u.length;n++)u[n-1]!==u[n]&&(u[r]=u[n],r++);u.length=r}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}(e)+" but "+function(e){return e?'"'+i(e)+'"':"end of input"}(n)+" found."},{SyntaxError:e,parse:function(n,t){t=void 0!==t?t:{};var a,s={},c={Expression:0},l=0,f=["+",D("+",!1),"-",D("-",!1),function(e,n){return n.reduce(function(e,n){return"+"===n[1]?t.plus(e,n[3]):"-"===n[1]?t.minus(e,n[3]):void 0},e)},"*",D("*",!1),"/",D("/",!1),function(e,n){return n.reduce(function(e,n){return"*"===n[1]?t.multiply(e,n[3]):"/"===n[1]?t.divide(e,n[3]):void 0},e)},"(",D("(",!1),")",D(")",!1),function(e){return e},O("duration"),"P",D("P",!1),"T",D("T",!1),function(e,n,t,r,i,u,o){return{hours:i,minutes:u,seconds:o}},"",function(e,n,t,r){return{}},function(e,n,r,i,u){return t.makeDuration(Object.assign({},u,{years:e,months:n,weeks:r,days:i}),{type:o})},/^[0-9,.]/,g([["0","9"],",","."],!1,!1),"H",D("H",!1),function(){return parseFloat(h())},function(){return 0},"M",D("M",!1),"S",D("S",!1),"Y",D("Y",!1),"W",D("W",!1),"D",D("D",!1),O("optionalplusminus"),O("now"),"now",D("now",!0),"today",D("today",!0),"now()",D("now()",!0),"today()",D("today()",!0),function(){return t.makeDate(new Date,{type:r})},O("interpoltion"),"%",D("%",!1),/^[^%]/,g(["%"],!0,!1),function(e){return t.interpolation(e.join(""))},O("dateExpression"),"{",D("{",!1),/^[^}]/,g(["}"],!0,!1),"}",D("}",!1),function(e){return t.makeDate(e.join(""),{type:i})},O("durationExpression"),"[",D("[",!1),/^[^\]]/,g(["]"],!0,!1),"]",D("]",!1),function(e){return t.makeDuration(e.join(""),{type:u})},O("dateyear"),"19",D("19",!1),/^[7-9]/,g([["7","9"]],!1,!1),/^[0-9]/,g([["0","9"]],!1,!1),/^[2-9]/,g([["2","9"]],!1,!1),function(){return t.makeDate(new Date(parseInt(h(),10)),{type:r})},O("datemonth"),function(e,n){return t.makeDate(new Date(parseInt(e.join(""),10),parseInt(n.join(""),10)-1),{type:r})},O("completedate"),function(e,n,i){return t.makeDate(new Date(parseInt(e.join(""),10),parseInt(n.join(""),10)-1,parseInt(i.join(""),10)),{type:r})},O("datetime"),":",D(":",!1),function(){return t.makeDate(new Date(h()),{type:r})},O("datetimesec"),O("date"),".",D(".",!1),function(e,n,i,u,o,a,s,c){return t.makeDate(new Date(parseInt(e.join(""),10),parseInt(n.join(""),10)-1,parseInt(i.join(""),10),parseInt(u.join(""),10),parseInt(o.join(""),10),parseInt(a.join(""),10),parseInt(s.join(""),10)),{type:r})},O("month"),"12",D("12",!1),"11",D("11",!1),"10",D("10",!1),"0",D("0",!1),/^[1-9]/,g([["1","9"]],!1,!1),O("day"),"31",D("31",!1),"30",D("30",!1),"2",D("2",!1),"1",D("1",!1),O("hour"),/^[0-3]/,g([["0","3"]],!1,!1),O("minute"),/^[0-5]/,g([["0","5"]],!1,!1),O("second"),O("millisecond"),O("tiezone"),"Z",D("Z",!1),O("plusorminus"),O("quarter"),"quarter",D("quarter",!0),"s",D("s",!1),function(){return t.makeDuration({quarters:parseFloat(h(),10)},{type:o})},O("shortquarter"),O("weekday"),"weekday",D("weekday",!0),function(){return t.makeDuration({weekdays:parseFloat(h(),10)},{type:o})},O("shortweekday"),"wd",D("wd",!1),O("year"),"year",D("year",!0),function(){return t.makeDuration({years:parseFloat(h(),10)},{type:o})},O("shortyear"),"a",D("a",!1),O("ms"),"ms",D("ms",!1),function(){return t.makeDuration({milliseconds:parseFloat(h(),10)},{type:o})},"millisecond",D("millisecond",!0),"month",D("month",!0),function(){return t.makeDuration({months:parseFloat(h(),10)},{type:o})},O("Shortmonth"),"m",D("m",!1),"minute",D("minute",!0),function(){return t.makeDuration({minutes:parseFloat(h(),10)},{type:o})},O("shortminutes"),"min",D("min",!0),O("shorterminutes"),"mm",D("mm",!1),"hour",D("hour",!0),function(){return t.makeDuration({hours:parseFloat(h(),10)},{type:o})},O("shorthour"),"h",D("h",!1),"day",D("day",!0),function(){return t.makeDuration({days:parseFloat(h(),10)},{type:o})},O("shortday"),"d",D("d",!1),O("week"),"week",D("week",!0),function(){return t.makeDuration({weeks:parseFloat(h(),10)},{type:o})},O("fortnight"),"fortnight",D("fortnight",!0),function(){return t.makeDuration({weeks:2*parseFloat(h(),10)},{type:o})},O("Shortfortnight"),"fn",D("fn",!1),O("shortweek"),"w",D("w",!1),"second",D("second",!0),function(){return t.makeDuration({seconds:parseFloat(h(),10)},{type:o})},O("s"),O("u"),"u",D("u",!1),function(){return{unitless:parseFloat(h(),10)}},O("number"),O("integer"),function(){return{unitless:parseInt(h(),10)}},O("int"),O("float"),O("dot"),O("minus"),"−",D("−",!1),O("whitespace"),/^[ \t\n\r]/,g([" ","\t","\n","\r"],!1,!1)],d=[T(";!"),T('%;"/§#$%;^/P#2 ""6 7!.) &2"""6"7#/5$;^/,$;"/#$+$)($\'#(#\'#("\'#&\'#0Z*%;^/P#2 ""6 7!.) &2"""6"7#/5$;^/,$;"/#$+$)($\'#(#\'#("\'#&\'#&/)$8":$""! )("\'#&\'#'),T("%;#/§#$%;^/P#2%\"\"6%7&.) &2'\"\"6'7(/5$;^/,$;#/#$+$)($'#(#'#(\"'#&'#0Z*%;^/P#2%\"\"6%7&.) &2'\"\"6'7(/5$;^/,$;#/#$+$)($'#(#'#(\"'#&'#&/)$8\":)\"\"! )(\"'#&'#"),T('%2*""6*7+/R#;^/I$;!/@$;^/7$2,""6,7-/($8%:.%!")(%\'#($\'#(#\'#("\'#&\'#.# &;$'),T(";0.ï &;/.é &;[.ã &;..Ý &;%.× &;7.Ñ &;6.Ë &;5.Å &;4.¿ &;3.¹ &;2.³ &;D.­ &;E.§ &;F.¡ &;G. &;R. &;H. &;J. &;K. &;L.} &;I.w &;M.q &;S.k &;N.e &;O._ &;P.Y &;Q.S &;C.M &;B.G &;U.A &;V.; &;@.5 &;A./ &;T.) &;W.# &;Y"),T("<%;-/³#20\"\"6071/¤$;)/$;*/$;+/$;,/$%22\"\"6273/I#;&/@$;'/7$;(/.$8$:4$'('&%\"! )($'#(#'#(\"'#&'#.2 &% 5/* 8!:6!$%$#\")/,$8':7'%$#\"! )(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7/"),T('%%;-/N#$48""5!790)*48""5!79&/2$2:""6:7;/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('%%;-/N#$48""5!790)*48""5!79&/2$2>""6>7?/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('%%;-/N#$48""5!790)*48""5!79&/2$2@""6@7A/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('%%;-/N#$48""5!790)*48""5!79&/2$2B""6B7C/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('%%;-/N#$48""5!790)*48""5!79&/2$2>""6>7?/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('%%;-/N#$48""5!790)*48""5!79&/2$2D""6D7E/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('%%;-/N#$48""5!790)*48""5!79&/2$2F""6F7G/#$+#)(#\'#("\'#&\'#/& 8!:<! ).. &% 5/& 8!:=! )'),T('<2 ""6 7!./ &2"""6"7#.# & 5=." 7H'),T('<%3J""5#7K.A &3L""5%7M.5 &3N""5%7O.) &3P""5\'7Q/& 8!:R! )=." 7I'),T('<%2T""6T7U/Y#$4V""5!7W/,#0)*4V""5!7W&&&#/7$2T""6T7U/($8#:X#!!)(#\'#("\'#&\'#=." 7S'),T('<%2Z""6Z7[/Y#$4\\""5!7]/,#0)*4\\""5!7]&&&#/7$2^""6^7_/($8#:`#!!)(#\'#("\'#&\'#=." 7Y'),T('<%2b""6b7c/Y#$4d""5!7e/,#0)*4d""5!7e&&&#/7$2f""6f7g/($8#:h#!!)(#\'#("\'#&\'#=." 7a'),T('<%%2j""6j7k/A#4l""5!7m/2$4n""5!7o/#$+#)(#\'#("\'#&\'#.` &%4p""5!7q/P#4n""5!7o/A$4n""5!7o/2$4n""5!7o/#$+$)($\'#(#\'#("\'#&\'#/& 8!:r! )=." 7i'),T('<%;Z/A#2"""6"7#/2$;8/)$8#:t#"" )(#\'#("\'#&\'#=." 7s'),T('<%;Z/Z#2"""6"7#/K$;8/B$2"""6"7#/3$;9/*$8%:v%#$" )(%\'#($\'#(#\'#("\'#&\'#=." 7u'),T('<%%;Z/#2"""6"7#/}$;8/t$2"""6"7#/e$;9/\\$22""6273/M$;:/D$2x""6x7y/5$;;/,$;>/#$+*)(*\'#()\'#((\'#(\'\'#(&\'#(%\'#($\'#(#\'#("\'#&\'#. &%;Z/#2"""6"7#/t$;8/k$2"""6"7#/\\$;9/S$22""6273/D$;:/;$2x""6x7y/,$;;/#$+))()\'#((\'#(\'\'#(&\'#(%\'#($\'#(#\'#("\'#&\'#/& 8!:z! )=." 7w'),T('<%%;Z/¤#2"""6"7#/$;8/$2"""6"7#/}$;9/t$22""6273/e$;:/\\$2x""6x7y/M$;;/D$2x""6x7y/5$;</,$;>/#$+,)(,\'#(+\'#(*\'#()\'#((\'#(\'\'#(&\'#(%\'#($\'#(#\'#("\'#&\'#.¥ &%;Z/#2"""6"7#/$;8/$2"""6"7#/t$;9/k$22""6273/\\$;:/S$2x""6x7y/D$;;/;$2x""6x7y/,$;</#$++)(+\'#(*\'#()\'#((\'#(\'\'#(&\'#(%\'#($\'#(#\'#("\'#&\'#/& 8!:z! )=." 7{'),T('<%;Z/È#2"""6"7#/¹$;8/°$2"""6"7#/¡$;9/$22""6273/$;:/$2x""6x7y/q$;;/h$2x""6x7y/Y$;</P$2}""6}7~/A$;=/8$;>//$8.:.(-+)\'%#! )(.\'#(-\'#(,\'#(+\'#(*\'#()\'#((\'#(\'\'#(&\'#(%\'#($\'#(#\'#("\'#&\'#=." 7|'),T('<2""67.f &2""67.Z &2""67.N &%2""67/2#4""5!7/#$+")("\'#&\'#.) &4""5!7=." 7'),T('<2""67.¤ &2""67. &%2""67/2#4n""5!7o/#$+")("\'#&\'#.s &%2""67/2#4n""5!7o/#$+")("\'#&\'#.N &%2""67/2#4""5!7/#$+")("\'#&\'#.) &4""5!7=." 7'),T('<%2""67/2#4""5!7/#$+")("\'#&\'#.s &%2""67/2#4n""5!7o/#$+")("\'#&\'#.N &%2""67/2#4n""5!7o/#$+")("\'#&\'#.) &4n""5!7o=." 7'),T('<%4""5!7/2#4n""5!7o/#$+")("\'#&\'#.) &4n""5!7o=." 7'),T('<%4""5!7/2#4n""5!7o/#$+")("\'#&\'#.) &4n""5!7o=." 7'),T('<%4n""5!7o/A#4n""5!7o/2$4n""5!7o/#$+#)(#\'#("\'#&\'#.N &%4n""5!7o/2#4n""5!7o/#$+")("\'#&\'#.) &4n""5!7o=." 7'),T('<2""67.x &%;?/n#4n""5!7o/_$4n""5!7o/P$2x""6x7y/A$4n""5!7o/2$4n""5!7o/#$+&)(&\'#(%\'#($\'#(#\'#("\'#&\'#=." 7'),T('<2 ""6 7!.) &2"""6"7#=." 7'),T('<%;X/S#;^/J$3¡""5\'7¢/;$2£""6£7¤." &"/\'$8$:¥$ )($\'#(#\'#("\'#&\'#=." 7 '),T('<%;X/S#;^/J$3¡""5\'7¢/;$2£""6£7¤." &"/\'$8$:¥$ )($\'#(#\'#("\'#&\'#=." 7¦'),T('<%;X/S#;^/J$3¨""5\'7©/;$2£""6£7¤." &"/\'$8$:ª$ )($\'#(#\'#("\'#&\'#=." 7§'),T('<%;X/S#;^/J$2¬""6¬7­/;$2£""6£7¤." &"/\'$8$:ª$ )($\'#(#\'#("\'#&\'#=." 7«'),T('<%;X/S#;^/J$3¯""5$7°/;$2£""6£7¤." &"/\'$8$:±$ )($\'#(#\'#("\'#&\'#=." 7®'),T('<%;X/S#;^/J$2³""6³7´/;$2£""6£7¤." &"/\'$8$:±$ )($\'#(#\'#("\'#&\'#=." 7²'),T('<%;X/S#;^/J$2¶""6¶7·/;$2£""6£7¤." &"/\'$8$:¸$ )($\'#(#\'#("\'#&\'#=." 7µ'),T('<%;X/S#;^/J$3¹""5+7º/;$2£""6£7¤." &"/\'$8$:¸$ )($\'#(#\'#("\'#&\'#=." 7'),T('<%;X/S#;^/J$3»""5%7¼/;$2£""6£7¤." &"/\'$8$:½$ )($\'#(#\'#("\'#&\'#=." 7'),T('<%;X/S#;^/J$2¿""6¿7À/;$2£""6£7¤." &"/\'$8$:½$ )($\'#(#\'#("\'#&\'#=." 7¾'),T('<%;X/S#;^/J$3Á""5&7Â/;$2£""6£7¤." &"/\'$8$:Ã$ )($\'#(#\'#("\'#&\'#=." 7'),T('<%;X/S#;^/J$3Å""5#7Æ/;$2£""6£7¤." &"/\'$8$:Ã$ )($\'#(#\'#("\'#&\'#=." 7Ä'),T('<%;X/S#;^/J$2È""6È7É/;$2£""6£7¤." &"/\'$8$:Ã$ )($\'#(#\'#("\'#&\'#=." 7Ç'),T('<%;X/S#;^/J$3Ê""5$7Ë/;$2£""6£7¤." &"/\'$8$:Ì$ )($\'#(#\'#("\'#&\'#=." 7'),T('<%;X/S#;^/J$2Î""6Î7Ï/;$2£""6£7¤." &"/\'$8$:Ì$ )($\'#(#\'#("\'#&\'#=." 7Í'),T('<%;X/S#;^/J$3Ð""5#7Ñ/;$2£""6£7¤." &"/\'$8$:Ò$ )($\'#(#\'#("\'#&\'#=." 7'),T('<%;X/S#;^/J$2Ô""6Ô7Õ/;$2£""6£7¤." &"/\'$8$:Ò$ )($\'#(#\'#("\'#&\'#=." 7Ó'),T('<%;X/S#;^/J$3×""5$7Ø/;$2£""6£7¤." &"/\'$8$:Ù$ )($\'#(#\'#("\'#&\'#=." 7Ö'),T('<%;X/S#;^/J$3Û""5)7Ü/;$2£""6£7¤." &"/\'$8$:Ý$ )($\'#(#\'#("\'#&\'#=." 7Ú'),T('<%;X/S#;^/J$2ß""6ß7à/;$2£""6£7¤." &"/\'$8$:Ý$ )($\'#(#\'#("\'#&\'#=." 7Þ'),T('<%;X/S#;^/J$2â""6â7ã/;$2£""6£7¤." &"/\'$8$:Ù$ )($\'#(#\'#("\'#&\'#=." 7á'),T('<%;X/S#;^/J$3ä""5&7å/;$2£""6£7¤." &"/\'$8$:æ$ )($\'#(#\'#("\'#&\'#=." 7'),T('<%;X/S#;^/J$2£""6£7¤/;$2£""6£7¤." &"/\'$8$:æ$ )($\'#(#\'#("\'#&\'#=." 7ç'),T('<%;X/S#;^/J$2é""6é7ê/;$2£""6£7¤." &"/\'$8$:ë$ )($\'#(#\'#("\'#&\'#=." 7è'),T('<;[.# &;Y=." 7ì'),T('<%;^/I#$4n""5!7o/,#0)*4n""5!7o&&&#/\'$8":î" )("\'#&\'#=." 7í'),T('<$4n""5!7o/,#0)*4n""5!7o&&&#=." 7ï'),T('<%;^/t#$4n""5!7o/,#0)*4n""5!7o&&&#/R$;\\/I$$4n""5!7o/,#0)*4n""5!7o&&&#/\'$8$:ë$ )($\'#(#\'#("\'#&\'#=." 7ð'),T('<2}""6}7~=." 7ñ'),T('<2ó""6ó7ô.) &2"""6"7#=." 7ò'),T('<$4ö""5!7÷0)*4ö""5!7÷&=." 7õ')],$=0,p=0,m=[{line:1,column:1}],v=0,b=[],y=0;if("startRule"in t){if(!(t.startRule in c))throw new Error("Can't start parsing from rule \""+t.startRule+'".');l=c[t.startRule]}function h(){return n.substring(p,$)}function D(e,n){return{type:"literal",text:e,ignoreCase:n}}function g(e,n,t){return{type:"class",parts:e,inverted:n,ignoreCase:t}}function O(e){return{type:"other",description:e}}function I(e){var t,r=m[e];if(r)return r;for(t=e-1;!m[t];)t--;for(r={line:(r=m[t]).line,column:r.column};t<e;)10===n.charCodeAt(t)?(r.line++,r.column=1):r.column++,t++;return m[e]=r,r}function w(e,n){var t=I(e),r=I(n);return{start:{offset:e,line:t.line,column:t.column},end:{offset:n,line:r.line,column:r.column}}}function S(e){$<v||($>v&&(v=$,b=[]),b.push(e))}function j(n,t,r){return new e(e.buildMessage(n,t),n,t,r)}function T(e){var n,t=new Array(e.length);for(n=0;n<e.length;n++)t[n]=e.charCodeAt(n)-32;return t}if((a=function e(t){for(var r,i,u=d[t],o=0,a=[],c=u.length,l=[],m=[];;){for(;o<c;)switch(u[o]){case 0:m.push(f[u[o+1]]),o+=2;break;case 1:m.push(void 0),o++;break;case 2:m.push(null),o++;break;case 3:m.push(s),o++;break;case 4:m.push([]),o++;break;case 5:m.push($),o++;break;case 6:m.pop(),o++;break;case 7:$=m.pop(),o++;break;case 8:m.length-=u[o+1],o+=2;break;case 9:m.splice(-2,1),o++;break;case 10:m[m.length-2].push(m.pop()),o++;break;case 11:m.push(m.splice(m.length-u[o+1],u[o+1])),o+=2;break;case 12:m.push(n.substring(m.pop(),$)),o++;break;case 13:l.push(c),a.push(o+3+u[o+1]+u[o+2]),m[m.length-1]?(c=o+3+u[o+1],o+=3):(c=o+3+u[o+1]+u[o+2],o+=3+u[o+1]);break;case 14:l.push(c),a.push(o+3+u[o+1]+u[o+2]),m[m.length-1]===s?(c=o+3+u[o+1],o+=3):(c=o+3+u[o+1]+u[o+2],o+=3+u[o+1]);break;case 15:l.push(c),a.push(o+3+u[o+1]+u[o+2]),m[m.length-1]!==s?(c=o+3+u[o+1],o+=3):(c=o+3+u[o+1]+u[o+2],o+=3+u[o+1]);break;case 16:m[m.length-1]!==s?(l.push(c),a.push(o),c=o+2+u[o+1],o+=2):o+=2+u[o+1];break;case 17:l.push(c),a.push(o+3+u[o+1]+u[o+2]),n.length>$?(c=o+3+u[o+1],o+=3):(c=o+3+u[o+1]+u[o+2],o+=3+u[o+1]);break;case 18:l.push(c),a.push(o+4+u[o+2]+u[o+3]),n.substr($,f[u[o+1]].length)===f[u[o+1]]?(c=o+4+u[o+2],o+=4):(c=o+4+u[o+2]+u[o+3],o+=4+u[o+2]);break;case 19:l.push(c),a.push(o+4+u[o+2]+u[o+3]),n.substr($,f[u[o+1]].length).toLowerCase()===f[u[o+1]]?(c=o+4+u[o+2],o+=4):(c=o+4+u[o+2]+u[o+3],o+=4+u[o+2]);break;case 20:l.push(c),a.push(o+4+u[o+2]+u[o+3]),f[u[o+1]].test(n.charAt($))?(c=o+4+u[o+2],o+=4):(c=o+4+u[o+2]+u[o+3],o+=4+u[o+2]);break;case 21:m.push(n.substr($,u[o+1])),$+=u[o+1],o+=2;break;case 22:m.push(f[u[o+1]]),$+=f[u[o+1]].length,o+=2;break;case 23:m.push(s),0===y&&S(f[u[o+1]]),o+=2;break;case 24:p=m[m.length-1-u[o+1]],o+=2;break;case 25:p=$,o++;break;case 26:for(r=u.slice(o+4,o+4+u[o+3]),i=0;i<u[o+3];i++)r[i]=m[m.length-1-r[i]];m.splice(m.length-u[o+2],u[o+2],f[u[o+1]].apply(null,r)),o+=4+u[o+3];break;case 27:m.push(e(u[o+1])),o+=2;break;case 28:y++,o++;break;case 29:y--,o++;break;default:throw new Error("Invalid opcode: "+u[o]+".")}if(!(l.length>0))break;c=l.pop(),o=a.pop()}return m[0]}(l))!==s&&$===n.length)return a;throw a!==s&&$<n.length&&S({type:"end"}),j(b,v<n.length?n.charAt(v):null,v<n.length?w(v,v+1):w(v,v))}}}();function l(e){for(var r=arguments.length,i=Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];var o=""+i.map(function(e){var r=t();return n[r]=e,r}).map(function(n,t){return e[t]+"%"+n+"%"}).join("")+e[e.length-1];return c.parse(o,s)}return l.NATIVEDATE=r,l.DATEXPRESION=i,l.DURATIONEXPRESSION=u,l.DURATIONOBJECT=o,l._options=Object.freeze(s),Object.freeze(l)};s.NATIVEDATE=r,s.DATEXPRESION=i,s.DURATIONEXPRESSION=u,s.DURATIONOBJECT=o,n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){i=!0,u=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=n.simple=function(e){var n=e.NATIVEDATE,t=e.DATEXPRESION,u=e.DURATIONEXPRESSION,o=e.DURATIONOBJECT,a={configurable:!1,enumerable:!1,writable:!1,value:function(){return JSON.stringify(this)}};function s(e){var n=v.exec(e);if(n){var t="-"===n[1]?-1:1,r=function(e){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t};return Object.assign(Object.defineProperty({},"toString",a),{years:r(n[2]),months:r(n[3]),weeks:r(n[4]),days:r(n[5]),hours:r(n[6]),minutes:r(n[7]),seconds:r(n[8])})}try{return Object.assign(Object.defineProperty({},"toString",a),JSON.parse(e))}catch(n){throw new Error("Found invalid duration "+e)}}function c(e){return new Date(e)}function l(e){return e instanceof Date&&!isNaN(e.valueOf())}var f={date:function(){throw new Error("Cannot merge two dates")},unitless:function(e,n){return e+1*n},milliseconds:function(e,n){return e-1*-n},seconds:function(e,n){return e-1e3*-n},minutes:function(e,n){return e-1e3*-n*60},hours:function(e,n){return e-1e3*-n*60*60},days:function(e,n){return e-1e3*-n*60*60*24},weekdays:function(e,n){return e-1e3*-n*60*60*24},weeks:function(e,n){return e-1e3*-n*60*60*24*7},months:function(e,n){return e-1e3*-n*60*60*24*31},quarters:function(e,n){return e-1e3*-n*60*60*24*7*52/4},years:function(e,n){return e-1e3*-n*60*60*24*7*52}},d={date:function(e,n){return{milliseconds:e.getTime()-n.getTime()}},unitless:function(e,n){return e-1*n},milliseconds:function(e,n){return e-1*n},seconds:function(e,n){return e-1e3*n},minutes:function(e,n){return e-1e3*n*60},hours:function(e,n){return e-1e3*n*60*60},days:function(e,n){return e-1e3*n*60*60*24},weekdays:function(e,n){return e-1e3*n*60*60*24},weeks:function(e,n){return e-1e3*n*60*60*24*7},months:function(e,n){return e-1e3*n*60*60*24*31},quarters:function(e,n){return e-1e3*n*60*60*24*7*52/4},years:function(e,n){return e-1e3*n*60*60*24*7*52}};function $(e,n,t,u){return l(e)&&l(n)?u.date(e,n):l(e)?new Date(Object.entries(n).reduce(function(e,n){var t=r(n,2),i=t[0],o=t[1];return u[i](e,o)},e)):l(n)?new Date(Object.entries(e).reduce(function(e,n){var t=r(n,2),i=t[0],o=t[1];return u[i](e,o)},n)):Object.entries(e).reduce(function(e,u){var o=r(u,2),a=o[0],s=o[1];return Object.assign(e,i({},a,t(s,n[a]||0)))},n)}function p(e){var n=Object.keys(e);return 1===n.length&&"unitless"===n[0]}function m(e,n,t){return Object.entries(n).reduce(function(n,u){var o=r(u,2),a=o[0],s=o[1];return Object.assign(n,i({},a,t(s,e)))},Object.defineProperty({},"toString",a))}var v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,b=function(e){return e};return{makeDuration:function(e,n){var t,r=n.type;return(t={},i(t,u,s),i(t,o,function(e){return Object.defineProperty(Object.assign({},e),"toString",a)}),t)[r](e)},makeDate:function(e,r){var u,o=r.type;return(u={},i(u,t,c),i(u,n,b),u)[o](e)},plus:function(e,n){return $(e,n,function(e,n){return e+n},f)},minus:function(e,n){return $(e,n,function(e,n){return e-n},d)},multiply:function(e,n){return function(e,n){if(p(e)||p(n)){var t=function(e,n){return e*n};return p(e)?m(e.unitless,n,t):m(n.unitless,e,t)}throw new Error("Can't multiply unitfull vectors with each other!")}(e,n)},divide:function(e,n){return function(e,n){if(p(n))return m(n.unitless,e,function(e,n){return e/n});throw new Error("Can't divide unitfull vectors with each other!")}(e,n)}}};n.default=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.datefns=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){i=!0,u=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=t(4);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weekdays:864e5,weeks:6048e5,months:26784e5,quarters:78624e5,years:314496e5};Object.fromEntries=Object.fromEntries||function(e){return[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(e)).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return e[r]=u,e},{})};var s=Object.fromEntries(Object.entries({addMilliseconds:u.addMilliseconds,addSeconds:u.addSeconds,addMinutes:u.addMinutes,addHours:u.addHours,addWeekDays:u.addBusinessDays,addDays:u.addDays,addWeeks:u.addWeeks,addMonths:u.addMonths,addQuarters:u.addQuarters,addYears:u.addYears,subMilliseconds:u.subMilliseconds,subSeconds:u.subSeconds,subMinutes:u.subMinutes,subHours:u.subHours,subWeekDays:u.subBusinessDays,subDays:u.subDays,subWeeks:u.subWeeks,subMonths:u.subMonths,subQuarters:u.subQuarters,subYears:u.subYears,addUnitless:u.addMilliseconds,subUnitless:u.subMilliseconds}).map(function(e){var n=i(e,2),t=n[0],r=n[1];return[t.toLowerCase(),r]})),c=n.datefns=function(e,n){var t=e.NATIVEDATE,c=e.DATEXPRESION,l=e.DURATIONEXPRESSION,f=e.DURATIONOBJECT,d=n.console,$={configurable:!1,enumerable:!1,writable:!1,value:function(){return JSON.stringify(this)}},p={configurable:!1,enumerable:!1,writable:!1,value:!0},m=Symbol("isDuration"),v=function(){return Object.defineProperty(Object.defineProperty({},m,p),"toString",$)},b=function(e){return!0===e[m]};function y(e){var n=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/.exec(e);if(n){var t="-"===n[1]?-1:1,r=function(e){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t};return Object.assign(v(),{years:r(n[2]),months:r(n[3]),weeks:r(n[4]),days:r(n[5]),hours:r(n[6]),minutes:r(n[7]),seconds:r(n[8])})}try{return Object.assign(v(),JSON.parse(e))}catch(n){throw new Error("Found invalid duration "+e)}}var h=function(e){return(0,u.isValid)(e)?"DATE":b(e)?"DURATION":(0,u.isDate)((0,u.toDate)(e))&&!(0,u.isValid)(e)?"INVALID DATE":void 0===e?"undefined":r(e)},D=function(e){var n=Object.keys(e);return 1===n.length&&"unitless"===n[0]};return{makeDuration:function(e,n){var t,r=n.type;return(t={},o(t,l,y),o(t,f,function(e){return Object.assign(v(),e)}),t)[r](e)},makeDate:function(e,n){var r,i=n.type;return(r={},o(r,c,u.parseISO),o(r,t,function(e){return e}),r)[i](e)},plus:function(e,n){if(D(e)&&D(n))return{unitless:e.unitless+n.unitless};if(b(e)&&b(n))return Object.entries(e).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return Object.assign(e,o({},r,(e[r]||0)+u))},n);if((0,u.isValid)(e)&&(0,u.isValid)(n))throw new Error("Can't add dates to each other!");if((0,u.isValid)(e)&&b(n))return Object.entries(n).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return s["add"+r](e,u)},e);if((0,u.isValid)(n)&&b(e))return Object.entries(e).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return s["add"+r](e,u)},n);var t="Invalid arguments for 'plus', expected (date, duration), (duration, date), (duration, duration) but found ("+h(e)+", "+h(n)+")";throw d.error(t,e,n),new Error(t)},minus:function(e,n){if(D(e)&&D(n))return{unitless:e.unitless-n.unitless};if(b(e)&&b(n))return Object.entries(e).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return Object.assign(e,o({},r,(e[r]||0)-u))},n);if((0,u.isValid)(e)&&(0,u.isValid)(n))return d.warn("Substracting two dates from each other is potentially unsafe as a loss of information occurs!"),Object.assign(v(),{milliseconds:(0,u.differenceInMilliseconds)(e,n)});if((0,u.isValid)(e)&&b(n))return Object.entries(n).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return s["sub"+r](e,u)},e);if((0,u.isValid)(n)&&b(e))return Object.entries(e).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return s["sub"+r](e,u)},n);var t="Invalid arguments for 'minus', expected (date, duration), (duration, date), (duration, duration) but found ("+h(e)+", "+h(n)+")";throw d.error(t,e,n),new Error(t)},multiply:function(e,n){if(D(e)&&D(n))return{unitless:e.unitless*n.unitless};if(b(e)&&D(n))return Object.entries(e).reduce(function(e,t){var r=i(t,2),u=r[0],a=r[1];return Object.assign(e,o({},u,a*n.unitless))},v());if(b(n)&&D(e))return Object.entries(n).reduce(function(n,t){var r=i(t,2),u=r[0],a=r[1];return Object.assign(n,o({},u,a*e.unitless))},v());var t="Invalid arguments for multiply, expected (duration, unitless) or (unitless, duration) but found ("+h(e)+", "+h(n)+")";throw d.error(t,e,n),new Error(t)},divide:function(e,n){if(D(e)&&D(n))return{unitless:e.unitless/n.unitless};if(b(e)&&D(n))return Object.entries(e).reduce(function(e,t){var r=i(t,2),u=r[0],a=r[1];return Object.assign(e,o({},u,a/n.unitless))},v());if(b(n)&&D(e))return Object.entries(n).reduce(function(n,t){var r=i(t,2),u=r[0],a=r[1];return Object.assign(n,o({},u,a/e.unitless))},v());if(b(e)&&b(n)){d.warn("Dividing one duration by another is potentially unsafe! Assuming conversion table "+JSON.stringify(a,null,"  ")+"!");var t=Object.entries(n).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return e+a[r]*u},0);return{unitless:Object.entries(e).reduce(function(e,n){var t=i(n,2),r=t[0],u=t[1];return e+a[r]*u},0)/t}}var r="Invalid arguments for divide, expected (duration, unitless) or (unitless, duration) but found ("+h(e)+", "+h(n)+")";throw d.error(r,e,n),new Error(r)}}};n.default=c},function(n,t){n.exports=e},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.luxon=void 0;var r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){i=!0,u=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=t(6);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function(e){var n=Object.keys(e);return 1===n.length&&"unitless"===n[0]},s=n.luxon=function(e,n){var t=e.NATIVEDATE,s=e.DATEXPRESION,c=e.DURATIONEXPRESSION,l=e.DURATIONOBJECT,f=n.console;return{makeDuration:function(e,n){var t,r=n.type;return(t={},o(t,c,function(e){try{var n=JSON.parse(e);return Array.isArray(n)?u.Duration.fromObject(n[0],Object.assign({conversionAccuracy:"longterm"},n[1])):"string"==typeof n?u.Duration.fromISO(n,{conversionAccuracy:"longterm"}):"number"==typeof n?u.Duration.fromMillis(n,{conversionAccuracy:"longterm"}):u.Duration.fromObject(n,{conversionAccuracy:"longterm"})}catch(n){return u.Duration.fromISO(e,{conversionAccuracy:"longterm"})}}),o(t,l,function(e){return u.Duration.fromObject(e,{conversionAccuracy:"longterm"})}),t)[r](e)},makeDate:function(e,n){var r,i=n.type;return(r={},o(r,s,function(e){try{var n=JSON.parse(e);return Array.isArray(n)?u.DateTime.fromObject(n[0],n[1]):"string"==typeof n?u.DateTime.fromISO(n):"number"==typeof n?u.DateTime.fromMillis(n):u.DateTime.fromObject(n)}catch(n){return u.DateTime.fromISO(e)}}),o(r,t,u.DateTime.fromJSDate),r)[i](e)},plus:function(e,n){if(a(e)&&a(n))return{unitless:e.unitless+n.unitless};if(u.Interval.isInterval(e)&&u.Interval.isInterval(n))return e.union(n);if(u.Interval.isInterval(e)&&u.Duration.isDuration(n))return u.Interval.fromDateTimes(e.start.plus(n),e.end.plus(n));if(u.Interval.isInterval(n)&&u.Duration.isDuration(e))return u.Interval.fromDateTimes(n.start.plus(e),n.end.plus(e));if(u.Interval.isInterval(e)&&u.DateTime.isDateTime(n))return e.isAfter(n)?u.Interval.fromDateTimes(n,e.end):e.isBefore(n)?u.Interval.fromDateTimes(e.start,n):n;if(u.Interval.isInterval(n)&&u.DateTime.isDateTime(e))return e.plus(n.toDuration());if(u.Interval.isInterval(n)&&u.DateTime.isDateTime(e))return u.Interval.fromDateTimes(n.start.minus(e),n.end.minus(e));if(u.Duration.isDuration(e)&&u.Duration.isDuration(n))return e.plus(n);if(u.DateTime.isDateTime(e)&&u.DateTime.isDateTime(n))throw new Error("Can't add dates to each other!");if(u.DateTime.isDateTime(e)&&e.isValid&&u.Duration.isDuration(n))return e.plus(n);if(u.DateTime.isDateTime(n)&&n.isValid&&u.Duration.isDuration(e))return n.plus(e);var t="Invalid arguments for 'plus', expected (date, duration), (duration, date), (duration, duration) but found ("+(e.invalidExplanation?"Invalid date "+e.invalidExplanation:void 0===e?"undefined":i(e))+", "+(n.invalidExplanation?"Invalid date "+n.invalidExplanation:void 0===n?"undefined":i(n))+")";throw f.error(t,e,n),new Error(t)},minus:function(e,n){if(a(e)&&a(n))return{unitless:e.unitless-n.unitless};if(u.Interval.isInterval(e)&&u.Interval.isInterval(n)){var t=e.intersection(n);return t||u.Interval.fromDateTimes(e.isBefore(n)?e.end:n.end,e.isBefore(n)?n.start:e.start)}if(u.Interval.isInterval(e)&&u.Duration.isDuration(n))return u.Interval.fromDateTimes(e.start.minus(n),e.end.minus(n));if(u.Interval.isInterval(n)&&u.Duration.isDuration(e))return u.Interval.fromDateTimes(n.start.minus(e),n.end.minus(e));if(u.Duration.isDuration(e)&&u.Duration.isDuration(n))return e.minus(n);if(u.Interval.isInterval(e)&&u.DateTime.isDateTime(n))return e.isBefore(n)?u.Interval.fromDateTimes(e.end,n):e.isAfter(n)?e:u.Interval.fromDateTimes(e.start,n);if(u.Interval.isInterval(n)&&u.DateTime.isDateTime(e))return e.minus(n.toDuration());if(u.DateTime.isDateTime(e)&&e.isValid&&u.DateTime.isDateTime(n)&&n.isValid)return u.Interval.fromDateTimes(e,n);if(u.DateTime.isDateTime(e)&&e.isValid&&u.Duration.isDuration(n))return e.minus(n);if(u.DateTime.isDateTime(n)&&n.isValid&&u.Duration.isDuration(e))return n.minus(e);var r="Invalid arguments for 'minus', expected (date, duration), (duration, date), (duration, duration) but found ("+(e.invalidExplanation?"Invalid date "+e.invalidExplanation:void 0===e?"undefined":i(e))+", "+(n.invalidExplanation?"Invalid date "+n.invalidExplanation:void 0===n?"undefined":i(n))+")";throw f.error(r,e,n),new Error(r)},multiply:function(e,n){if(a(e)&&a(n))return{unitless:e.unitless*n.unitless};if(u.Duration.isDuration(e)&&a(n)){var t=Object.entries(e.toObject()).reduce(function(e,t){var i=r(t,2),u=i[0],a=i[1];return Object.assign(e,o({},u,a*n.unitless))},{});return e.set(t)}if(u.Duration.isDuration(n)&&a(e)){var s=Object.entries(n.toObject()).reduce(function(n,t){var i=r(t,2),u=i[0],a=i[1];return Object.assign(n,o({},u,a*e.unitless))},{});return n.set(s)}var c="Invalid arguments for multiply, expected (duration, unitless) or (unitless, duration) but found ("+(e.invalidExplanation?"Invalid date "+e.invalidExplanation:void 0===e?"undefined":i(e))+", "+(n.invalidExplanation?"Invalid date "+n.invalidExplanation:void 0===n?"undefined":i(n))+")";throw f.error(c,e,n),new Error(c)},divide:function(e,n){if(a(e)&&a(n))return{unitless:e.unitless/n.unitless};if(u.Duration.isDuration(e)&&a(n)){var t=Object.entries(e.toObject()).reduce(function(e,t){var i=r(t,2),u=i[0],a=i[1];return Object.assign(e,o({},u,a/n.unitless))},{});return e.set(t)}if(u.Duration.isDuration(n)&&a(e)){var s=Object.entries(n.toObject()).reduce(function(n,t){var i=r(t,2),u=i[0],a=i[1];return Object.assign(n,o({},u,a/e.unitless))},{});return n.set(s)}if(u.Duration.isDuration(e)&&u.Duration.isDuration(n))return f.warn("Dividing one duration by another is potentially unsafe!"),{unitless:e.valueOf()/n.valueOf()};var c="Invalid arguments for divide, expected (duration, unitless) or (unitless, duration) but found ("+(e.invalidExplanation?"Invalid date "+e.invalidExplanation:void 0===e?"undefined":i(e))+", "+(n.invalidExplanation?"Invalid date "+n.invalidExplanation:void 0===n?"undefined":i(n))+")";throw f.error(c,e,n),new Error(c)}}};n.default=s},function(e,t){e.exports=n}])});