/**
 * Created by beizhu on 2019/8/11.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var jsxToSchemaPlugin = require('babel-plugin-jsx-to-schema');
var stage0 = require('babel-preset-stage-0');
var babel = require('babel-standalone');

function toJson(code) {
  try {
    var input = '[' + code + ']';
    var str = JSON.stringify(eval(input));
    return str.slice(1, str.length - 1);
  } catch (e) {
    console.error(e);
    return code;
  }
}

var react2schema = function react2schema(jsxCode) {
  var ast = babel.transform(jsxCode, {
    presets: [stage0],
    plugins: [jsxToSchemaPlugin],
  });
  return toJson(ast.code);
};

exports.default = react2schema;
