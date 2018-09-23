// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules\\monaco-editor\\esm\\vs\\basic-languages\\markdown\\markdown.js":[function(require,module,exports) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var TOKEN_HEADER_LEAD = 'keyword';
var TOKEN_HEADER = 'keyword';
var TOKEN_EXT_HEADER = 'keyword';
var TOKEN_SEPARATOR = 'meta.separator';
var TOKEN_QUOTE = 'comment';
var TOKEN_LIST = 'keyword';
var TOKEN_BLOCK = 'string';
var TOKEN_BLOCK_CODE = 'variable.source';
var DELIM_ASSIGN = 'delimiter.html';
var ATTRIB_NAME = 'attribute.name.html';
var ATTRIB_VALUE = 'string.html';
function getTag(name) {
    return 'tag';
}
var conf = exports.conf = {
    comments: {
        blockComment: ['<!--', '-->']
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')']],
    autoClosingPairs: [{ open: '{', close: '}' }, { open: '[', close: ']' }, { open: '(', close: ')' }, { open: '<', close: '>', notIn: ['string'] }],
    surroundingPairs: [{ open: '(', close: ')' }, { open: '[', close: ']' }, { open: '`', close: '`' }],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
        }
    }
};
var language = exports.language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'],
    tokenizer: {
        root: [
        // headers (with #)
        [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', TOKEN_HEADER_LEAD, TOKEN_HEADER, TOKEN_HEADER]],
        // headers (with =)
        [/^\s*(=+|\-+)\s*$/, TOKEN_EXT_HEADER],
        // headers (with ***)
        [/^\s*((\*[ ]?)+)\s*$/, TOKEN_SEPARATOR],
        // quote
        [/^\s*>+/, TOKEN_QUOTE],
        // list (starting with * or number)
        [/^\s*([\*\-+:]|\d+\.)\s/, TOKEN_LIST],
        // code block (4 spaces indent)
        [/^(\t|[ ]{4})[^ ].*$/, TOKEN_BLOCK],
        // code block (3 tilde)
        [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: TOKEN_BLOCK, next: '@codeblock' }],
        // github style code blocks (with backticks and language)
        [/^\s*```\s*((?:\w|[\/\-#])+)\s*$/, { token: TOKEN_BLOCK, next: '@codeblockgh', nextEmbedded: '$1' }],
        // github style code blocks (with backticks but no language)
        [/^\s*```\s*$/, { token: TOKEN_BLOCK, next: '@codeblock' }],
        // markup within lines
        { include: '@linecontent' }],
        codeblock: [[/^\s*~~~\s*$/, { token: TOKEN_BLOCK, next: '@pop' }], [/^\s*```\s*$/, { token: TOKEN_BLOCK, next: '@pop' }], [/.*$/, TOKEN_BLOCK_CODE]],
        // github style code blocks
        codeblockgh: [[/```\s*$/, { token: TOKEN_BLOCK_CODE, next: '@pop', nextEmbedded: '@pop' }], [/[^`]+/, TOKEN_BLOCK_CODE]],
        linecontent: [
        // escapes
        [/&\w+;/, 'string.escape'], [/@escapes/, 'escape'],
        // various markup
        [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'], [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'], [/\b_[^_]+_\b/, 'emphasis'], [/\*([^\\*]|@escapes)+\*/, 'emphasis'], [/`([^\\`]|@escapes)+`/, 'variable'],
        // links
        [/\{[^}]+\}/, 'string.target'], [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']], [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
        // or html
        { include: 'html' }],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
        // html tags
        [/<(\w+)\/>/, getTag('$1')], [/<(\w+)/, {
            cases: {
                '@empty': { token: getTag('$1'), next: '@tag.$1' },
                '@default': { token: getTag('$1'), next: '@tag.$1' }
            }
        }], [/<\/(\w+)\s*>/, { token: getTag('$1') }], [/<!--/, 'comment', '@comment']],
        comment: [[/[^<\-]+/, 'comment.content'], [/-->/, 'comment', '@pop'], [/<!--/, 'comment.content.invalid'], [/[<\-]/, 'comment.content']],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [[/[ \t\r\n]+/, 'white'], [/(type)(\s*=\s*)(")([^"]+)(")/, [ATTRIB_NAME, DELIM_ASSIGN, ATTRIB_VALUE, { token: ATTRIB_VALUE, switchTo: '@tag.$S2.$4' }, ATTRIB_VALUE]], [/(type)(\s*=\s*)(')([^']+)(')/, [ATTRIB_NAME, DELIM_ASSIGN, ATTRIB_VALUE, { token: ATTRIB_VALUE, switchTo: '@tag.$S2.$4' }, ATTRIB_VALUE]], [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, [ATTRIB_NAME, DELIM_ASSIGN, ATTRIB_VALUE]], [/\w+/, ATTRIB_NAME], [/\/>/, getTag('$S2'), '@pop'], [/>/, {
            cases: {
                '$S2==style': { token: getTag('$S2'), switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },
                '$S2==script': {
                    cases: {
                        '$S3': { token: getTag('$S2'), switchTo: 'embeddedScript', nextEmbedded: '$S3' },
                        '@default': { token: getTag('$S2'), switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' }
                    }
                },
                '@default': { token: getTag('$S2'), next: '@pop' }
            }
        }]],
        embeddedStyle: [[/[^<]+/, ''], [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }], [/</, '']],
        embeddedScript: [[/[^<]+/, ''], [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }], [/</, '']]
    }
};
},{}],"..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '27879' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","node_modules\\monaco-editor\\esm\\vs\\basic-languages\\markdown\\markdown.js"], null)
//# sourceMappingURL=/markdown.2077c4f0.map