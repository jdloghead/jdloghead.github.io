(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[87],{1466:function(e,n,t){const r=t(402),a=t(1494),i="'none'",o={accelerometer:i,"ambient-light-sensor":i,battery:i,camera:i,"display-capture":i,"document-domain":i,"encrypted-media":i,fullscreen:i,geolocation:i,gyroscope:i,magnetometer:i,microphone:i,midi:i,payment:i,"picture-in-picture":i,"publickey-credentials-get":i,"speaker-selection":i,usb:i,vibrate:i,vr:i,"screen-wake-lock":i,"web-share":i,"interest-cohort":i};e.exports=class{constructor(){this.id=r(),this.isRemote=!0,this.ready=!1,this.queuedMessages=[],this.iframe=document.createElement("iframe"),this.iframe.className="tw-custom-extension-frame",this.iframe.dataset.id=this.id,this.iframe.style.display="none",this.iframe.setAttribute("aria-hidden","true"),this.iframe.sandbox="allow-scripts",this.iframe.allow=Object.entries(o).map((e=>{let[n,t]=e;return"".concat(n," ").concat(t)})).join("; "),document.body.appendChild(this.iframe),window.addEventListener("message",this._onWindowMessage.bind(this));const e=new Blob(["<!DOCTYPE html><body><script>window.__WRAPPED_IFRAME_ID__=".concat(JSON.stringify(this.id),";").concat(a,"<\/script></body>")],{type:"text/html; charset=utf-8"});this.iframe.src=URL.createObjectURL(e)}_onWindowMessage(e){if(e.data&&e.data.vmIframeId===this.id){if(e.data.ready){this.ready=!0;for(const{data:e,transfer:n}of this.queuedMessages)this.postMessage(e,n);this.queuedMessages.length=0}e.data.message&&this.onmessage({data:e.data.message})}}onmessage(){}postMessage(e,n){this.ready?n?this.iframe.contentWindow.postMessage(e,"*",n):this.iframe.contentWindow.postMessage(e,"*"):this.queuedMessages.push({data:e,transfer:n})}}},1494:function(e,n){e.exports='!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n,t){const r=t(10);r.enable(),e.exports=r("vm")},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n){e.exports={isWorker:!0,centralDispatchService:self}},function(e,n){e.exports={ANGLE:"angle",BOOLEAN:"Boolean",COLOR:"color",NUMBER:"number",STRING:"string",MATRIX:"matrix",NOTE:"note",IMAGE:"image",COSTUME:"costume",SOUND:"sound"}},function(e,n){e.exports={BOOLEAN:"Boolean",BUTTON:"button",LABEL:"label",COMMAND:"command",CONDITIONAL:"conditional",EVENT:"event",HAT:"hat",LOOP:"loop",REPORTER:"reporter",XML:"xml"}},function(e,n){var t="long",r="short",a="narrow",i="numeric",o="2-digit";e.exports={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:i,day:i,year:o},medium:{month:r,day:i,year:i},long:{month:t,day:i,year:i},full:{month:t,day:i,year:i,weekday:t},default:{month:r,day:i,year:i}},time:{short:{hour:i,minute:i},medium:{hour:i,minute:i,second:i},long:{hour:i,minute:i,second:i,timeZoneName:r},full:{hour:i,minute:i,second:i,timeZoneName:r},default:{hour:i,minute:i,second:i}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var n={},t=e.match(/\\b[A-Z]{3}\\b/i),r=e.replace(/[^¤]/g,"").length;if(!r&&t&&(r=1),r?(n.style="currency",n.currencyDisplay=1===r?"symbol":2===r?"code":"name",n.currency=t?t[0].toUpperCase():"USD"):e.indexOf("%")>=0&&(n.style="percent"),!/[@#0]/.test(e))return n.style?n:void 0;if(n.useGrouping=e.indexOf(",")>=0,/E\\+?[@#0]+/i.test(e)||e.indexOf("@")>=0){var a=e.replace(/E\\+?[@#0]+|[^@#0]/gi,"");n.minimumSignificantDigits=Math.min(Math.max(a.replace(/[^@0]/g,"").length,1),21),n.maximumSignificantDigits=Math.min(Math.max(a.length,1),21)}else{for(var i=e.replace(/[^#0.]/g,"").split("."),o=i[0],s=o.length-1;"0"===o[s];)--s;n.minimumIntegerDigits=Math.min(Math.max(o.length-1-s,1),21);var c=i[1]||"";for(s=0;"0"===c[s];)++s;for(n.minimumFractionDigits=Math.min(Math.max(s,0),20);"#"===c[s];)++s;n.maximumFractionDigits=Math.min(Math.max(s,0),20)}return n}},parseDatePattern:function(e){if(e){for(var n={},s=0;s<e.length;){for(var c=e[s],l=1;e[++s]===c;)++l;switch(c){case"G":n.era=5===l?a:4===l?t:r;break;case"y":case"Y":n.year=2===l?o:i;break;case"M":case"L":l=Math.min(Math.max(l-1,0),4),n.month=[i,o,r,t,a][l];break;case"E":case"e":case"c":n.weekday=5===l?a:4===l?t:r;break;case"d":case"D":n.day=2===l?o:i;break;case"h":case"K":n.hour12=!0,n.hour=2===l?o:i;break;case"H":case"k":n.hour12=!1,n.hour=2===l?o:i;break;case"m":n.minute=2===l?o:i;break;case"s":case"S":n.second=2===l?o:i;break;case"z":case"Z":case"v":case"V":n.timeZoneName=1===l?r:t}}return Object.keys(n).length?n:void 0}}}},function(e,n){e.exports=function(e,n){if("string"==typeof e&&n[e])return e;for(var t=[].concat(e||[]),r=0,a=t.length;r<a;++r)for(var i=t[r].split("-");i.length;){var o=i.join("-");if(n[o])return o;i.pop()}}},function(e,n,t){"use strict";var r="zero",a="one",i="two",o="few",s="many",c="other",l=[function(e){return 1===+e?a:c},function(e){var n=+e;return 0<=n&&n<=1?a:c},function(e){return 0===Math.floor(Math.abs(+e))||1===+e?a:c},function(e){var n=+e;return 0===n?r:1===n?a:2===n?i:3<=n%100&&n%100<=10?o:11<=n%100&&n%100<=99?s:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length;return 1===n&&0===t?a:c},function(e){var n=+e;return n%10==1&&n%100!=11?a:2<=n%10&&n%10<=4&&(n%100<12||14<n%100)?o:n%10==0||5<=n%10&&n%10<=9||11<=n%100&&n%100<=14?s:c},function(e){var n=+e;return n%10==1&&n%100!=11&&n%100!=71&&n%100!=91?a:n%10==2&&n%100!=12&&n%100!=72&&n%100!=92?i:(3<=n%10&&n%10<=4||n%10==9)&&(n%100<10||19<n%100)&&(n%100<70||79<n%100)&&(n%100<90||99<n%100)?o:0!==n&&n%1e6==0?s:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length,r=+(e+".").split(".")[1];return 0===t&&n%10==1&&n%100!=11||r%10==1&&r%100!=11?a:0===t&&2<=n%10&&n%10<=4&&(n%100<12||14<n%100)||2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?o:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length;return 1===n&&0===t?a:2<=n&&n<=4&&0===t?o:0!==t?s:c},function(e){var n=+e;return 0===n?r:1===n?a:2===n?i:3===n?o:6===n?s:c},function(e){var n=Math.floor(Math.abs(+e)),t=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 1===+e||0!==t&&(0===n||1===n)?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length,r=+(e+".").split(".")[1];return 0===t&&n%100==1||r%100==1?a:0===t&&n%100==2||r%100==2?i:0===t&&3<=n%100&&n%100<=4||3<=r%100&&r%100<=4?o:c},function(e){var n=Math.floor(Math.abs(+e));return 0===n||1===n?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length,r=+(e+".").split(".")[1];return 0===t&&(1===n||2===n||3===n)||0===t&&n%10!=4&&n%10!=6&&n%10!=9||0!==t&&r%10!=4&&r%10!=6&&r%10!=9?a:c},function(e){var n=+e;return 1===n?a:2===n?i:3<=n&&n<=6?o:7<=n&&n<=10?s:c},function(e){var n=+e;return 1===n||11===n?a:2===n||12===n?i:3<=n&&n<=10||13<=n&&n<=19?o:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length;return 0===t&&n%10==1?a:0===t&&n%10==2?i:0!==t||n%100!=0&&n%100!=20&&n%100!=40&&n%100!=60&&n%100!=80?0!==t?s:c:o},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length,r=+e;return 1===n&&0===t?a:2===n&&0===t?i:0===t&&(r<0||10<r)&&r%10==0?s:c},function(e){var n=Math.floor(Math.abs(+e)),t=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 0===t&&n%10==1&&n%100!=11||0!==t?a:c},function(e){var n=+e;return 1===n?a:2===n?i:c},function(e){var n=+e;return 0===n?r:1===n?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=+e;return 0===t?r:0!==n&&1!==n||0===t?c:a},function(e){var n=+(e+".").split(".")[1],t=+e;return t%10==1&&(t%100<11||19<t%100)?a:2<=t%10&&t%10<=9&&(t%100<11||19<t%100)?o:0!==n?s:c},function(e){var n=(e+".").split(".")[1].length,t=+(e+".").split(".")[1],i=+e;return i%10==0||11<=i%100&&i%100<=19||2===n&&11<=t%100&&t%100<=19?r:i%10==1&&i%100!=11||2===n&&t%10==1&&t%100!=11||2!==n&&t%10==1?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length,r=+(e+".").split(".")[1];return 0===t&&n%10==1&&n%100!=11||r%10==1&&r%100!=11?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length,r=+e;return 1===n&&0===t?a:0!==t||0===r||1!==r&&1<=r%100&&r%100<=19?o:c},function(e){var n=+e;return 1===n?a:0===n||2<=n%100&&n%100<=10?o:11<=n%100&&n%100<=19?s:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length;return 1===n&&0===t?a:0===t&&2<=n%10&&n%10<=4&&(n%100<12||14<n%100)?o:0===t&&1!==n&&0<=n%10&&n%10<=1||0===t&&5<=n%10&&n%10<=9||0===t&&12<=n%100&&n%100<=14?s:c},function(e){var n=Math.floor(Math.abs(+e));return 0<=n&&n<=1?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length;return 0===t&&n%10==1&&n%100!=11?a:0===t&&2<=n%10&&n%10<=4&&(n%100<12||14<n%100)?o:0===t&&n%10==0||0===t&&5<=n%10&&n%10<=9||0===t&&11<=n%100&&n%100<=14?s:c},function(e){var n=+e;return 0===Math.floor(Math.abs(+e))||1===n?a:2<=n&&n<=10?o:c},function(e){var n=Math.floor(Math.abs(+e)),t=+(e+".").split(".")[1],r=+e;return 0===r||1===r||0===n&&1===t?a:c},function(e){var n=Math.floor(Math.abs(+e)),t=(e+".").split(".")[1].length;return 0===t&&n%100==1?a:0===t&&n%100==2?i:0===t&&3<=n%100&&n%100<=4||0!==t?o:c},function(e){var n=+e;return 0<=n&&n<=1||11<=n&&n<=99?a:c},function(e){var n=+e;return 1===n||5===n||7===n||8===n||9===n||10===n?a:2===n||3===n?i:4===n?o:6===n?s:c},function(e){var n=Math.floor(Math.abs(+e));return n%10==1||n%10==2||n%10==5||n%10==7||n%10==8||n%100==20||n%100==50||n%100==70||n%100==80?a:n%10==3||n%10==4||n%1e3==100||n%1e3==200||n%1e3==300||n%1e3==400||n%1e3==500||n%1e3==600||n%1e3==700||n%1e3==800||n%1e3==900?o:0===n||n%10==6||n%100==40||n%100==60||n%100==90?s:c},function(e){var n=+e;return n%10!=2&&n%10!=3||n%100==12||n%100==13?c:o},function(e){var n=+e;return 1===n||3===n?a:2===n?i:4===n?o:c},function(e){var n=+e;return 0===n||7===n||8===n||9===n?r:1===n?a:2===n?i:3===n||4===n?o:5===n||6===n?s:c},function(e){var n=+e;return n%10==1&&n%100!=11?a:n%10==2&&n%100!=12?i:n%10==3&&n%100!=13?o:c},function(e){var n=+e;return 1===n||11===n?a:2===n||12===n?i:3===n||13===n?o:c},function(e){var n=+e;return 1===n?a:2===n||3===n?i:4===n?o:6===n?s:c},function(e){var n=+e;return 1===n||5===n?a:c},function(e){var n=+e;return 11===n||8===n||80===n||800===n?s:c},function(e){var n=Math.floor(Math.abs(+e));return 1===n?a:0===n||2<=n%100&&n%100<=20||n%100==40||n%100==60||n%100==80?s:c},function(e){var n=+e;return n%10==6||n%10==9||n%10==0&&0!==n?s:c},function(e){var n=Math.floor(Math.abs(+e));return n%10==1&&n%100!=11?a:n%10==2&&n%100!=12?i:n%10!=7&&n%10!=8||n%100==17||n%100==18?c:s},function(e){var n=+e;return 1===n?a:2===n||3===n?i:4===n?o:c},function(e){var n=+e;return 1<=n&&n<=4?a:c},function(e){var n=+e;return 1===n||5===n||7<=n&&n<=9?a:2===n||3===n?i:4===n?o:6===n?s:c},function(e){var n=+e;return 1===n?a:n%10==4&&n%100!=14?s:c},function(e){var n=+e;return n%10!=1&&n%10!=2||n%100==11||n%100==12?c:a},function(e){var n=+e;return n%10==6||n%10==9||10===n?o:c},function(e){var n=+e;return n%10==3&&n%100!=13?o:c}];e.exports={af:{cardinal:l[0]},ak:{cardinal:l[1]},am:{cardinal:l[2]},ar:{cardinal:l[3]},ars:{cardinal:l[3]},as:{cardinal:l[2],ordinal:l[34]},asa:{cardinal:l[0]},ast:{cardinal:l[4]},az:{cardinal:l[0],ordinal:l[35]},be:{cardinal:l[5],ordinal:l[36]},bem:{cardinal:l[0]},bez:{cardinal:l[0]},bg:{cardinal:l[0]},bh:{cardinal:l[1]},bn:{cardinal:l[2],ordinal:l[34]},br:{cardinal:l[6]},brx:{cardinal:l[0]},bs:{cardinal:l[7]},ca:{cardinal:l[4],ordinal:l[37]},ce:{cardinal:l[0]},cgg:{cardinal:l[0]},chr:{cardinal:l[0]},ckb:{cardinal:l[0]},cs:{cardinal:l[8]},cy:{cardinal:l[9],ordinal:l[38]},da:{cardinal:l[10]},de:{cardinal:l[4]},dsb:{cardinal:l[11]},dv:{cardinal:l[0]},ee:{cardinal:l[0]},el:{cardinal:l[0]},en:{cardinal:l[4],ordinal:l[39]},eo:{cardinal:l[0]},es:{cardinal:l[0]},et:{cardinal:l[4]},eu:{cardinal:l[0]},fa:{cardinal:l[2]},ff:{cardinal:l[12]},fi:{cardinal:l[4]},fil:{cardinal:l[13],ordinal:l[0]},fo:{cardinal:l[0]},fr:{cardinal:l[12],ordinal:l[0]},fur:{cardinal:l[0]},fy:{cardinal:l[4]},ga:{cardinal:l[14],ordinal:l[0]},gd:{cardinal:l[15],ordinal:l[40]},gl:{cardinal:l[4]},gsw:{cardinal:l[0]},gu:{cardinal:l[2],ordinal:l[41]},guw:{cardinal:l[1]},gv:{cardinal:l[16]},ha:{cardinal:l[0]},haw:{cardinal:l[0]},he:{cardinal:l[17]},hi:{cardinal:l[2],ordinal:l[41]},hr:{cardinal:l[7]},hsb:{cardinal:l[11]},hu:{cardinal:l[0],ordinal:l[42]},hy:{cardinal:l[12],ordinal:l[0]},ia:{cardinal:l[4]},io:{cardinal:l[4]},is:{cardinal:l[18]},it:{cardinal:l[4],ordinal:l[43]},iu:{cardinal:l[19]},iw:{cardinal:l[17]},jgo:{cardinal:l[0]},ji:{cardinal:l[4]},jmc:{cardinal:l[0]},ka:{cardinal:l[0],ordinal:l[44]},kab:{cardinal:l[12]},kaj:{cardinal:l[0]},kcg:{cardinal:l[0]},kk:{cardinal:l[0],ordinal:l[45]},kkj:{cardinal:l[0]},kl:{cardinal:l[0]},kn:{cardinal:l[2]},ks:{cardinal:l[0]},ksb:{cardinal:l[0]},ksh:{cardinal:l[20]},ku:{cardinal:l[0]},kw:{cardinal:l[19]},ky:{cardinal:l[0]},lag:{cardinal:l[21]},lb:{cardinal:l[0]},lg:{cardinal:l[0]},ln:{cardinal:l[1]},lt:{cardinal:l[22]},lv:{cardinal:l[23]},mas:{cardinal:l[0]},mg:{cardinal:l[1]},mgo:{cardinal:l[0]},mk:{cardinal:l[24],ordinal:l[46]},ml:{cardinal:l[0]},mn:{cardinal:l[0]},mo:{cardinal:l[25],ordinal:l[0]},mr:{cardinal:l[2],ordinal:l[47]},mt:{cardinal:l[26]},nah:{cardinal:l[0]},naq:{cardinal:l[19]},nb:{cardinal:l[0]},nd:{cardinal:l[0]},ne:{cardinal:l[0],ordinal:l[48]},nl:{cardinal:l[4]},nn:{cardinal:l[0]},nnh:{cardinal:l[0]},no:{cardinal:l[0]},nr:{cardinal:l[0]},nso:{cardinal:l[1]},ny:{cardinal:l[0]},nyn:{cardinal:l[0]},om:{cardinal:l[0]},or:{cardinal:l[0],ordinal:l[49]},os:{cardinal:l[0]},pa:{cardinal:l[1]},pap:{cardinal:l[0]},pl:{cardinal:l[27]},prg:{cardinal:l[23]},ps:{cardinal:l[0]},pt:{cardinal:l[28]},"pt-PT":{cardinal:l[4]},rm:{cardinal:l[0]},ro:{cardinal:l[25],ordinal:l[0]},rof:{cardinal:l[0]},ru:{cardinal:l[29]},rwk:{cardinal:l[0]},saq:{cardinal:l[0]},sc:{cardinal:l[4],ordinal:l[43]},scn:{cardinal:l[4],ordinal:l[43]},sd:{cardinal:l[0]},sdh:{cardinal:l[0]},se:{cardinal:l[19]},seh:{cardinal:l[0]},sh:{cardinal:l[7]},shi:{cardinal:l[30]},si:{cardinal:l[31]},sk:{cardinal:l[8]},sl:{cardinal:l[32]},sma:{cardinal:l[19]},smi:{cardinal:l[19]},smj:{cardinal:l[19]},smn:{cardinal:l[19]},sms:{cardinal:l[19]},sn:{cardinal:l[0]},so:{cardinal:l[0]},sq:{cardinal:l[0],ordinal:l[50]},sr:{cardinal:l[7]},ss:{cardinal:l[0]},ssy:{cardinal:l[0]},st:{cardinal:l[0]},sv:{cardinal:l[4],ordinal:l[51]},sw:{cardinal:l[4]},syr:{cardinal:l[0]},ta:{cardinal:l[0]},te:{cardinal:l[0]},teo:{cardinal:l[0]},ti:{cardinal:l[1]},tig:{cardinal:l[0]},tk:{cardinal:l[0],ordinal:l[52]},tl:{cardinal:l[13],ordinal:l[0]},tn:{cardinal:l[0]},tr:{cardinal:l[0]},ts:{cardinal:l[0]},tzm:{cardinal:l[33]},ug:{cardinal:l[0]},uk:{cardinal:l[29],ordinal:l[53]},ur:{cardinal:l[4]},uz:{cardinal:l[0]},ve:{cardinal:l[0]},vo:{cardinal:l[0]},vun:{cardinal:l[0]},wa:{cardinal:l[1]},wae:{cardinal:l[0]},xh:{cardinal:l[0]},xog:{cardinal:l[0]},yi:{cardinal:l[4]},zu:{cardinal:l[2]},lo:{ordinal:l[0]},ms:{ordinal:l[0]},vi:{ordinal:l[0]}}},function(e,n,t){(function(e){const n=t(2),r=t(9);e.$=r,e.jQuery=r;const a=window.__WRAPPED_IFRAME_ID__;n.isWorker=!1,n.centralDispatchService={postMessage(e,n){const t={vmIframeId:a,message:e};n?window.parent.postMessage(t,"*",n):window.parent.postMessage(t,"*")}},t(11),window.parent.postMessage({vmIframeId:a,ready:!0},"*")}).call(this,t(1))},function(e,n,t){(function(n){const r=t(0),a=()=>{throw new Error("Not implemented")};a.getScript=(e,n)=>{const t=document.createElement("script");t.src=e,n&&(t.onload=()=>n()),document.body.appendChild(t)};let i=0;a.ajax=async(e,t)=>{let o={};e&&t?(o=t,o.url=e):e&&(o=e);const s=(e=>{const n=new URLSearchParams;if(e)for(const t of Object.keys(e))n.set(t,e[t]);return n})(o.data),c=()=>{const e=s.toString();let n=o.url;return e&&(n+="?".concat(e)),n.startsWith("http://")&&(n=n.replace("http://","https://")),n},l=e=>{o.success&&o.success(e)};try{if("jsonp"===o.dataType){const e="_jsonp_callback".concat(i++);n[e]=t=>{delete n[e],l(t)};const t=o.jsonp||"callback";return s.set(t,e),void a.getScript(c())}if("script"===o.dataType)return void a.getScript(c(),l);const e=await fetch(c(),{headers:o.headers});l(await e.json())}catch(e){u=e,r.error(u),o.error&&o.error(u)}var u},e.exports=a}).call(this,t(1))},function(e,n){const t="undefined"==typeof document,r=t?"[0m":"",a=t?"[90m":"",i=`${t?"[34m":""}debug${r}`,o=`${t?"[36m":""}info${r}`,s=`${t?"[33m":""}warn${r}`,c=`${t?"[31m":""}error${r}`,l=(e="")=>{const n=n=>l(e?`${e} ${n}`:n),t=e?[`${a}${e}${r}`]:[];return n.debug=n.log=console.debug.bind(console,...t,i),n.info=console.log.bind(console,...t,o),n.warn=n.warning=console.warn.bind(console,...t,s),n.error=console.error.bind(console,...t,c),n};l.enable=l.disable=()=>{},e.exports=l},function(e,n,t){(function(e){const n=t(12),r=t(16),a=t(18),i=t(0),{isWorker:o}=t(2),s=t(20)(null);e.Scratch=e.Scratch||{},Object.assign(e.Scratch,n,{canFetch:()=>Promise.resolve(!0),fetch:function(e){function n(n,t){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(((e,n)=>fetch(e,n))),canOpenWindow:()=>Promise.resolve(!1),openWindow:()=>Promise.reject(new Error("Scratch.openWindow not supported in sandboxed extensions")),canRedirect:()=>Promise.resolve(!1),redirect:()=>Promise.reject(new Error("Scratch.redirect not supported in sandboxed extensions")),canRecordAudio:()=>Promise.resolve(!1),canRecordVideo:()=>Promise.resolve(!1),canReadClipboard:()=>Promise.resolve(!1),canNotify:()=>Promise.resolve(!1),canGeolocate:()=>Promise.resolve(!1),canEmbed:()=>Promise.resolve(!1),translate:s});const c=new class{constructor(){this.nextExtensionId=0,this.initialRegistrations=[],this.firstRegistrationPromise=new Promise((e=>{this.firstRegistrationCallback=e})),a.waitForConnection.then((()=>{a.call("extensions","allocateWorker").then((async e=>{const[n,t]=e;this.workerId=n;try{await(e=>{if(!o)return new Promise(((n,t)=>{const r=document.createElement("script");r.onload=()=>n(),r.onerror=()=>{t(new Error("Error in sandboxed script: ".concat(e,". Check the console for more information.")))},r.src=e,document.body.appendChild(r)}));importScripts(e)})(t),await this.firstRegistrationPromise;const e=this.initialRegistrations;this.initialRegistrations=null,Promise.all(e).then((()=>a.call("extensions","onWorkerInit",n)))}catch(e){i.error(e),a.call("extensions","onWorkerInit",n,"".concat(e))}}))})),this.extensions=[]}register(e){const n=this.nextExtensionId++;this.extensions.push(e);const t="extension.".concat(this.workerId,".").concat(n),r=a.setService(t,e).then((()=>a.call("extensions","registerExtensionService",t)));return this.initialRegistrations&&(this.firstRegistrationCallback(),this.initialRegistrations.push(r)),r}};e.Scratch.extensions={register:c.register.bind(c)},e.ScratchExtensions=r(e.Scratch)}).call(this,t(1))},function(e,n,t){const r={ArgumentType:t(3),BlockType:t(4),TargetType:t(13),Cast:t(14)};e.exports=r},function(e,n){e.exports={SPRITE:"sprite",STAGE:"stage"}},function(e,n,t){const r=t(15),a=e=>{if("string"!=typeof e)return!1;for(let n=0;n<e.length;n++){const t=e.charCodeAt(n);if(48===t||9===t)return!1}return!0};class i{static toNumber(e){if("number"==typeof e)return Number.isNaN(e)?0:e;const n=Number(e);return Number.isNaN(n)?0:n}static toBoolean(e){return"boolean"==typeof e?e:"string"==typeof e?""!==e&&"0"!==e&&"false"!==e.toLowerCase():Boolean(e)}static toString(e){return String(e)}static toRgbColorList(e){const n=i.toRgbColorObject(e);return[n.r,n.g,n.b]}static toRgbColorObject(e){let n;return"string"==typeof e&&"#"===e.substring(0,1)?(n=r.hexToRgb(e),n||(n={r:0,g:0,b:0,a:255})):n=r.decimalToRgb(i.toNumber(e)),n}static isWhiteSpace(e){return null===e||"string"==typeof e&&0===e.trim().length}static compare(e,n){let t=Number(e),r=Number(n);if(0===t&&a(e)?t=NaN:0===r&&a(n)&&(r=NaN),isNaN(t)||isNaN(r)){const t=String(e).toLowerCase(),r=String(n).toLowerCase();return t<r?-1:t>r?1:0}return t===1/0&&r===1/0||t===-1/0&&r===-1/0?0:t-r}static isInt(e){return"number"==typeof e?!!isNaN(e)||e===Math.floor(e):"boolean"==typeof e||"string"==typeof e&&e.indexOf(".")<0}static get LIST_INVALID(){return"INVALID"}static get LIST_ALL(){return"ALL"}static toListIndex(e,n,t){if("number"!=typeof e){if("all"===e)return t?i.LIST_ALL:i.LIST_INVALID;if("last"===e)return n>0?n:i.LIST_INVALID;if("random"===e||"any"===e)return n>0?1+Math.floor(Math.random()*n):i.LIST_INVALID}return(e=Math.floor(i.toNumber(e)))<1||e>n?i.LIST_INVALID:e}}e.exports=i},function(e,n){class t{static get RGB_BLACK(){return{r:0,g:0,b:0}}static get RGB_WHITE(){return{r:255,g:255,b:255}}static decimalToHex(e){e<0&&(e+=16777216);let n=Number(e).toString(16);return n="#".concat("000000".substr(0,6-n.length)).concat(n),n}static decimalToRgb(e){const n=e>>24&255;return{r:e>>16&255,g:e>>8&255,b:255&e,a:n>0?n:255}}static hexToRgb(e){e.startsWith("#")&&(e=e.substring(1));const n=parseInt(e,16);if(isNaN(n))return null;if(6===e.length)return{r:n>>16&255,g:n>>8&255,b:255&n};if(3===e.length){const e=n>>8&15,t=n>>4&15,r=15&n;return{r:e<<4|e,g:t<<4|t,b:r<<4|r}}return null}static rgbToHex(e){return t.decimalToHex(t.rgbToDecimal(e))}static rgbToDecimal(e){return(e.r<<16)+(e.g<<8)+e.b}static hexToDecimal(e){return t.rgbToDecimal(t.hexToRgb(e))}static hsvToRgb(e){let n=e.h%360;n<0&&(n+=360);const t=Math.max(0,Math.min(e.s,1)),r=Math.max(0,Math.min(e.v,1)),a=Math.floor(n/60),i=n/60-a,o=r*(1-t),s=r*(1-t*i),c=r*(1-t*(1-i));let l,u,d;switch(a){default:case 0:l=r,u=c,d=o;break;case 1:l=s,u=r,d=o;break;case 2:l=o,u=r,d=c;break;case 3:l=o,u=s,d=r;break;case 4:l=c,u=o,d=r;break;case 5:l=r,u=o,d=s}return{r:Math.floor(255*l),g:Math.floor(255*u),b:Math.floor(255*d)}}static rgbToHsv(e){const n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(Math.min(n,t),r),i=Math.max(Math.max(n,t),r);let o=0,s=0;if(a!==i){o=60*((n===a?3:t===a?5:1)-(n===a?t-r:t===a?r-n:n-t)/(i-a))%360,s=(i-a)/i}return{h:o,s:s,v:i}}static mixRgb(e,n,t){if(t<=0)return e;if(t>=1)return n;const r=1-t;return{r:r*e.r+t*n.r,g:r*e.g+t*n.g,b:r*e.b+t*n.b}}}e.exports=t},function(e,n,t){const r=t(3),a=t(4),{argumentIndexToId:i,generateExtensionId:o}=t(17),s=e=>{if(""===e||" "===e||"w"===e)return{type:a.COMMAND,async:"w"===e};if("r"===e||"R"===e)return{type:a.REPORTER,async:"R"===e};if("b"===e)return{type:a.BOOLEAN,async:!1};if("h"===e)return{type:a.HAT,async:!1};throw new Error("Unknown ScratchX block type: ".concat(e))},c=(e,n)=>{const t={},a="string"==typeof(i=n)||"number"==typeof i||"boolean"==typeof i;var i;if(a&&"b"!==e&&(t.defaultValue=n),"s"===e)t.type=r.STRING,a||(t.defaultValue="");else if("n"===e)t.type=r.NUMBER,a||(t.defaultValue=0);else if("m"===e[0]){t.type=r.STRING;const n=e.split(/\\.|:/)[1];t.menu=n}else{if("b"!==e)throw new Error("Unknown ScratchX argument type: ".concat(e));t.type=r.BOOLEAN}return t},l=(e,n,t)=>r=>{const a=[];for(let e=0;e<n;e++)a.push(r[i(e)]);return t?new Promise((n=>{e(...a,n)})):e(...a)},u=new Map;e.exports=e=>({register:(n,t,r)=>{const a=((e,n,t)=>{const r={id:o(e),name:n.displayName||e,blocks:[],color1:"#4a4a5e",color2:"#31323f",color3:"#191a21"},a={getInfo:()=>r,_getStatus:t._getStatus};n.url&&(r.docsURI=n.url);for(const e of n.blocks){if(1===e.length){r.blocks.push("---");continue}const n=e[0],o=e[1],u=e[2],d=e.slice(3);let f="";const h=[],p=o.split(/%([\\w.:]+)/g);for(let e=0;e<p.length;e++){const n=p[e];if(e%2==1){c(n);const t=Math.floor(e/2).toString(),r=d[t],a=i(t);h[a]=c(n,r),f+="[".concat(a,"]")}else f+=n}const m=s(n),g={opcode:u,blockType:m.type,text:f,arguments:h};r.blocks.push(g);const b=t[u],v=h.length;a[u]=l(b,v,m.async)}const u=n.menus;if(u){const e={};for(const n of Object.keys(u)||{}){const t={items:u[n]};e[n]=t}r.menus=e}return a})(n,t,r);u.set(n,a),e.extensions.register(a)},getStatus:e=>{const n=u.get(e);return n?n._getStatus():{status:0,msg:"does not exist"}}})},function(e,n){e.exports={generateExtensionId:e=>{const n=e.replace(/[^a-z0-9]/gi,"").toLowerCase();return"sbx".concat(n)},argumentIndexToId:e=>e.toString()}},function(e,n,t){const r=t(19),a=t(0),{centralDispatchService:i}=t(2);e.exports=new class extends r{constructor(){super(),this._connectionPromise=new Promise((e=>{this._onConnect=e})),this.services={},this._onMessage=this._onMessage.bind(this,i),"undefined"!=typeof self&&(self.onmessage=this._onMessage)}get waitForConnection(){return this._connectionPromise}setService(e,n){return Object.prototype.hasOwnProperty.call(this.services,e)&&a.warn("Worker dispatch replacing existing service provider for ".concat(e)),this.services[e]=n,this.waitForConnection.then((()=>this._remoteCall(i,"dispatch","setService",e)))}_getServiceProvider(e){const n=this.services[e];return{provider:n||i,isRemote:!n}}_onDispatchMessage(e,n){let t;switch(n.method){case"handshake":t=this._onConnect();break;case"terminate":setTimeout((()=>self.close()),0),t=Promise.resolve();break;default:a.error("Worker dispatch received message for unknown method: ".concat(n.method))}return t}}},function(e,n,t){const r=t(0);e.exports=class{constructor(){this.callbacks=[],this.nextResponseId=0}call(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return this.transferCall(e,n,null,...r)}transferCall(e,n,t){try{const{provider:o,isRemote:s}=this._getServiceProvider(e);if(o){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];if(s)return this._remoteTransferCall(o,e,n,t,...a);const c=o[n].apply(o,a);return Promise.resolve(c)}return Promise.reject(new Error("Service not found: ".concat(e)))}catch(e){return Promise.reject(e)}}_isRemoteService(e){return this._getServiceProvider(e).isRemote}_remoteCall(e,n,t){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return this._remoteTransferCall(e,n,t,null,...a)}_remoteTransferCall(e,n,t,r){for(var a=arguments.length,i=new Array(a>4?a-4:0),o=4;o<a;o++)i[o-4]=arguments[o];return new Promise(((a,o)=>{const s=this._storeCallbacks(a,o);i.length>0&&"function"==typeof i[i.length-1].func&&(i.pop(),i.pop()),r?e.postMessage({service:n,method:t,responseId:s,args:i},r):e.postMessage({service:n,method:t,responseId:s,args:i})}))}_storeCallbacks(e,n){const t=this.nextResponseId++;return this.callbacks[t]=[e,n],t}_deliverResponse(e,n){try{const[t,r]=this.callbacks[e];delete this.callbacks[e],n.error?r(n.error):t(n.result)}catch(e){r.error("Dispatch callback failed: ".concat(e))}}_onMessage(e,n){const t=n.data;let a;t.args=t.args||[],t.service?a="dispatch"===t.service?this._onDispatchMessage(e,t):this.call(t.service,t.method,...t.args):void 0===t.responseId?r.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(n))):this._deliverResponse(t.responseId,t),a&&(void 0===t.responseId?r.error("Dispatch message missing required response ID: ".concat(JSON.stringify(n))):a.then((n=>e.postMessage({responseId:t.responseId,result:n})),(n=>e.postMessage({responseId:t.responseId,error:"".concat(n)}))))}_getServiceProvider(e){throw new Error("Could not get provider for ".concat(e,": _getServiceProvider not implemented"))}_onDispatchMessage(e,n){throw new Error("Unimplemented dispatch message handler cannot handle ".concat(n.method," method"))}}},function(e,n,t){const r=t(21);e.exports=e=>{const n=r.namespace(),t=(e,t)=>{if(e&&"object"==typeof e);else{if("string"!=typeof e)throw new Error("unsupported data type in translate()");e={default:e}}return n(e,t)},a=e=>"_".concat(e),i=()=>e?e.getLocale():"undefined"!=typeof navigator?navigator.language:"en";let o={};return t.setup=e=>{e&&(o=e),n.setup({locale:i(),missingTranslation:"ignore",generateId:a,translations:o})},Object.defineProperty(t,"language",{configurable:!0,enumerable:!0,get:()=>i()}),t.setup({}),e&&e.on("LOCALE_CHANGED",(()=>{t.setup(null)})),t}},function(e,n,t){"use strict";var r=t(22),a=t(23),i=t(7),o=t(6),s=t(5);function c(e,n){return Object.keys(n).forEach((function(t){e[t]=n[t]})),e}e.exports=function e(){var n=c({},s),t="en",l={},u=function(e){return e},d=null,f="warning",h={};function p(e,n,i){var o="string"==typeof e?e:e.default,s=b(o,"object"==typeof e&&e.id||u(o),i||t);return(s.format||(s.format=a(r(s.message),i||t,h)))(n)}p.rich=function(e,n,i){var o="string"==typeof e?e:e.default,s=b(o,"object"==typeof e&&e.id||u(o),i||t);return(s.toParts||(s.toParts=a.toParts(r(s.message,{tagsType:m}),i||t,h)))(n)};var m="<>";function g(e,n){var t=e[2];return function(e,n){var r="object"==typeof t?function(e,n){return Object.keys(e).reduce((function(t,r){return t[r]=e[r](n),t}),{})}(t,n):t;return"function"==typeof e?e(r):e}}function b(e,n,t){var r=o(t,l)||"en",a=l[r]||(l[r]={}),i=a[n];if("string"==typeof i&&(i=a[n]={message:i}),!i){var s=\'Translation for "\'+n+\'" in "\'+r+\'" is missing\';if("warning"===f)"undefined"!=typeof console&&console.warn(s);else if("ignore"!==f)throw new Error(s);var c="function"==typeof d?d(e,n,r)||e:d||e;i=a[n]={message:c}}return i}function v(e,n,r,a,s){"object"==typeof r&&"object"!=typeof a&&(s=a,a=r,r=0);var c=o(s||t,i),l=c&&i[c][e]||x;return a["="+ +n]||a[l(n-r)]||a.other}function x(){return"other"}return h[m]=g,p.setup=function(e){return(e=e||{}).locale&&(t=e.locale),"translations"in e&&(l=e.translations||{}),e.generateId&&(u=e.generateId),"missingReplacement"in e&&(d=e.missingReplacement),e.missingTranslation&&(f=e.missingTranslation),e.formats&&(e.formats.number&&c(n.number,e.formats.number),e.formats.date&&c(n.date,e.formats.date),e.formats.time&&c(n.time,e.formats.time)),e.types&&((h=e.types)[m]=g),{locale:t,translations:l,generateId:u,missingReplacement:d,missingTranslation:f,formats:n,types:h}},p.number=function(e,r,a){var i=r&&n.number[r]||n.parseNumberPattern(r)||n.number.default;return new Intl.NumberFormat(a||t,i).format(e)},p.date=function(e,r,a){var i=r&&n.date[r]||n.parseDatePattern(r)||n.date.default;return new Intl.DateTimeFormat(a||t,i).format(e)},p.time=function(e,r,a){var i=r&&n.time[r]||n.parseDatePattern(r)||n.time.default;return new Intl.DateTimeFormat(a||t,i).format(e)},p.select=function(e,n){return n[e]||n.other},p.custom=function(e,n,t,r){return e[1]in h?h[e[1]](e,n)(t,r):t},p.plural=v.bind(null,"cardinal"),p.selectordinal=v.bind(null,"ordinal"),p.namespace=e,p}()},function(e,n,t){"use strict";var r="{",a="}",i=",",o="#",s="<",c=">",l="</",u="/>",d="\'",f="offset:",h=["number","date","time","ordinal","duration","spellout"],p=["plural","select","selectordinal"];function m(e,n){var t=e.pattern,r=t.length,i=[],o=e.index,s=g(e,n);for(s&&i.push(s),s&&e.tokens&&e.tokens.push(["text",t.slice(o,e.index)]);e.index<r;){if(t[e.index]===a){if(!n)throw S(e);break}if(n&&e.tagsType&&t.slice(e.index,e.index+l.length)===l)break;i.push(x(e)),o=e.index,(s=g(e,n))&&i.push(s),s&&e.tokens&&e.tokens.push(["text",t.slice(o,e.index)])}return i}function g(e,n){for(var t=e.pattern,i=t.length,c="plural"===n||"selectordinal"===n,l=!!e.tagsType,u="{style}"===n,f="";e.index<i;){var h=t[e.index];if(h===r||h===a||c&&h===o||l&&h===s||u&&b(h.charCodeAt(0)))break;if(h===d)if((h=t[++e.index])===d)f+=h,++e.index;else if(h===r||h===a||c&&h===o||l&&h===s||u)for(f+=h;++e.index<i;)if((h=t[e.index])===d&&t[e.index+1]===d)f+=d,++e.index;else{if(h===d){++e.index;break}f+=h}else f+=d;else f+=h,++e.index}return f}function b(e){return e>=9&&e<=13||32===e||133===e||160===e||6158===e||e>=8192&&e<=8205||8232===e||8233===e||8239===e||8287===e||8288===e||12288===e||65279===e}function v(e){for(var n=e.pattern,t=n.length,r=e.index;e.index<t&&b(n.charCodeAt(e.index));)++e.index;r<e.index&&e.tokens&&e.tokens.push(["space",e.pattern.slice(r,e.index)])}function x(e){var n=e.pattern;if(n[e.index]===o)return e.tokens&&e.tokens.push(["syntax",o]),++e.index,[o];var t=function(e){var n=e.tagsType;if(!n||e.pattern[e.index]!==s)return;if(e.pattern.slice(e.index,e.index+l.length)===l)throw S(e,null,"closing tag without matching opening tag");e.tokens&&e.tokens.push(["syntax",s]);++e.index;var t=y(e,!0);if(!t)throw S(e,"placeholder id");e.tokens&&e.tokens.push(["id",t]);if(v(e),e.pattern.slice(e.index,e.index+u.length)===u)return e.tokens&&e.tokens.push(["syntax",u]),e.index+=u.length,[t,n];if(e.pattern[e.index]!==c)throw S(e,c);e.tokens&&e.tokens.push(["syntax",c]);++e.index;var r=m(e,n),a=e.index;if(e.pattern.slice(e.index,e.index+l.length)!==l)throw S(e,l+t+c);e.tokens&&e.tokens.push(["syntax",l]);e.index+=l.length;var i=y(e,!0);i&&e.tokens&&e.tokens.push(["id",i]);if(t!==i)throw e.index=a,S(e,l+t+c,l+i+c);if(v(e),e.pattern[e.index]!==c)throw S(e,c);e.tokens&&e.tokens.push(["syntax",c]);return++e.index,[t,n,{children:r}]}(e);if(t)return t;if(n[e.index]!==r)throw S(e,r);e.tokens&&e.tokens.push(["syntax",r]),++e.index,v(e);var d=y(e);if(!d)throw S(e,"placeholder id");e.tokens&&e.tokens.push(["id",d]),v(e);var p=n[e.index];if(p===a)return e.tokens&&e.tokens.push(["syntax",a]),++e.index,[d];if(p!==i)throw S(e,i+" or "+a);e.tokens&&e.tokens.push(["syntax",i]),++e.index,v(e);var g,b=y(e);if(!b)throw S(e,"placeholder type");if(e.tokens&&e.tokens.push(["type",b]),v(e),(p=n[e.index])===a){if(e.tokens&&e.tokens.push(["syntax",a]),"plural"===b||"selectordinal"===b||"select"===b)throw S(e,b+" sub-messages");return++e.index,[d,b]}if(p!==i)throw S(e,i+" or "+a);if(e.tokens&&e.tokens.push(["syntax",i]),++e.index,v(e),"plural"===b||"selectordinal"===b){var x=function(e){var n=e.pattern,t=n.length,r=0;if(n.slice(e.index,e.index+f.length)===f){e.tokens&&e.tokens.push(["offset","offset"],["syntax",":"]),e.index+=f.length,v(e);for(var a=e.index;e.index<t&&w(n.charCodeAt(e.index));)++e.index;if(a===e.index)throw S(e,"offset number");e.tokens&&e.tokens.push(["number",n.slice(a,e.index)]),r=+n.slice(a,e.index)}return r}(e);v(e),g=[d,b,x,M(e,b)]}else if("select"===b)g=[d,b,M(e,b)];else if(h.indexOf(b)>=0)g=[d,b,k(e)];else{var I=e.index,T=k(e);v(e),n[e.index]===r&&(e.index=I,T=M(e,b)),g=[d,b,T]}if(v(e),n[e.index]!==a)throw S(e,a);return e.tokens&&e.tokens.push(["syntax",a]),++e.index,g}function y(e,n){for(var t=e.pattern,l=t.length,u="";e.index<l;){var f=t[e.index];if(f===r||f===a||f===i||f===o||f===d||b(f.charCodeAt(0))||n&&(f===s||f===c||"/"===f))break;u+=f,++e.index}return u}function k(e){var n=e.index,t=g(e,"{style}");if(!t)throw S(e,"placeholder style name");return e.tokens&&e.tokens.push(["style",e.pattern.slice(n,e.index)]),t}function w(e){return e>=48&&e<=57}function M(e,n){for(var t=e.pattern,r=t.length,i={};e.index<r&&t[e.index]!==a;){var o=y(e);if(!o)throw S(e,"sub-message selector");e.tokens&&e.tokens.push(["selector",o]),v(e),i[o]=I(e,n),v(e)}if(!i.other&&p.indexOf(n)>=0)throw S(e,null,null,\'"other" sub-message must be specified in \'+n);return i}function I(e,n){if(e.pattern[e.index]!==r)throw S(e,r+" to start sub-message");e.tokens&&e.tokens.push(["syntax",r]),++e.index;var t=m(e,n);if(e.pattern[e.index]!==a)throw S(e,a+" to end sub-message");return e.tokens&&e.tokens.push(["syntax",a]),++e.index,t}function S(e,n,t,r){var a=e.pattern,i=a.slice(0,e.index).split(/\\r?\\n/),o=e.index,s=i.length,c=i.slice(-1)[0].length;return t=t||(e.index>=a.length?"end of message pattern":y(e)||a[e.index]),r||(r=function(e,n){return e?"Expected "+e+" but found "+n:"Unexpected "+n+" found"}(n,t)),new T(r+=" in "+a.replace(/\\r?\\n/g,"\\n"),n,t,o,s,c)}function T(e,n,t,r,a,i){Error.call(this,e),this.name="SyntaxError",this.message=e,this.expected=n,this.found=t,this.offset=r,this.line=a,this.column=i}n=e.exports=function(e,n){return m({pattern:String(e),index:0,tagsType:n&&n.tagsType||null,tokens:n&&n.tokens||null},"")},T.prototype=Object.create(Error.prototype),n.SyntaxError=T},function(e,n,t){"use strict";var r=t(5),a=t(6),i=t(7);function o(e,n,t,r,a){var i=e.map((function(e){return function(e,n,t,r,a){if("string"==typeof e){var i=e;return function(){return i}}var c,l=e[0],u=e[1];if(n&&"#"===e[0]){l=n[0];var d=n[2],h=(r.number||f.number)([l,"number"],t);return function(e){return h(s(l,e)-d,e)}}"plural"===u||"selectordinal"===u?(c={},Object.keys(e[3]).forEach((function(n){c[n]=o(e[3][n],e,t,r,a)})),e=[e[0],e[1],e[2],c]):e[2]&&"object"==typeof e[2]&&(c={},Object.keys(e[2]).forEach((function(n){c[n]=o(e[2][n],e,t,r,a)})),e=[e[0],e[1],c]);var p=u&&(r[u]||f[u]);if(p){var m=p(e,t);return function(e){return m(s(l,e),e)}}return a?function(e){return String(s(l,e))}:function(e){return s(l,e)}}(e,n,t,r,a)}));return a?1===i.length?i[0]:function(e){for(var n="",t=0;t<i.length;++t)n+=i[t](e);return n}:function(e){return i.reduce((function(n,t){return n.concat(t(e))}),[])}}function s(e,n){if(n&&e in n)return n[e];for(var t=e.split("."),r=n,a=0,i=t.length;r&&a<i;++a)r=r[t[a]];return r}function c(e,n){var t=e[2],a=r.number[t]||r.parseNumberPattern(t)||r.number.default;return new Intl.NumberFormat(n,a).format}function l(e,n){var t=e[1],a=e[2],i=r[t][a]||r.parseDatePattern(a)||r[t].default;return new Intl.DateTimeFormat(n,i).format}function u(e,n){var t,r="selectordinal"===e[1]?"ordinal":"cardinal",o=e[2],s=e[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(n).length>0)t=new Intl.PluralRules(n,{type:r});else{var c=a(n,i),l=c&&i[c][r]||d;t={select:l}}return function(e,n){return(s["="+ +e]||s[t.select(e-o)]||s.other)(n)}}function d(){return"other"}(n=e.exports=function(e,n,t){return o(e,null,n||"en",t||{},!0)}).toParts=function(e,n,t){return o(e,null,n||"en",t||{},!1)};var f={number:c,ordinal:c,spellout:c,duration:function(e,n){var t=e[2],a=r.duration[t]||r.duration.default,i=new Intl.NumberFormat(n,a.seconds).format,o=new Intl.NumberFormat(n,a.minutes).format,s=new Intl.NumberFormat(n,a.hours).format,c=/^fi$|^fi-|^da/.test(String(n))?".":":";return function(e,n){if(e=+e,!isFinite(e))return i(e);var t=~~(e/60/60),r=~~(e/60%60),a=(t?s(Math.abs(t))+c:"")+o(Math.abs(r))+c+i(Math.abs(e%60));return e<0?s(-1).replace(s(1),a):a}},date:l,time:l,plural:u,selectordinal:u,select:function(e,n){var t=e[2];return function(e,n){return(t[e]||t.other)(n)}}};n.types=f}]);'}}]);