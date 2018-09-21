parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Z2v7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="keyword",t="keyword",s="keyword",n="meta.separator",o="comment",c="keyword",d="string",p="variable.source",r="delimiter.html",a="attribute.name.html",i="string.html";function m(e){return"tag"}var l=exports.conf={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},k=exports.language={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white",e,t,t]],[/^\s*(=+|\-+)\s*$/,s],[/^\s*((\*[ ]?)+)\s*$/,n],[/^\s*>+/,o],[/^\s*([\*\-+:]|\d+\.)\s/,c],[/^(\t|[ ]{4})[^ ].*$/,d],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:d,next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+)\s*$/,{token:d,next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:d,next:"@codeblock"}],{include:"@linecontent"}],codeblock:[[/^\s*~~~\s*$/,{token:d,next:"@pop"}],[/^\s*```\s*$/,{token:d,next:"@pop"}],[/.*$/,p]],codeblockgh:[[/```\s*$/,{token:p,next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,p]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{[^}]+\}/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,m("$1")],[/<(\w+)/,{cases:{"@empty":{token:m("$1"),next:"@tag.$1"},"@default":{token:m("$1"),next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:m("$1")}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,[a,r,i,{token:i,switchTo:"@tag.$S2.$4"},i]],[/(type)(\s*=\s*)(')([^']+)(')/,[a,r,i,{token:i,switchTo:"@tag.$S2.$4"},i]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,[a,r,i]],[/\w+/,a],[/\/>/,m("$S2"),"@pop"],[/>/,{cases:{"$S2==style":{token:m("$S2"),switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:m("$S2"),switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:m("$S2"),switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:m("$S2"),next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}};
},{}]},{},["Z2v7"], null)
//# sourceMappingURL=CodingWithTom/markdown.405a5d59.map