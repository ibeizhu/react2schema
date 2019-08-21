'use strict';

/**
 * Created by beizhu on 2019/8/11.
 */

var jsxToSchemaPlugin = require('babel-plugin-jsx-to-schema');
var stage0 = require('babel-preset-stage-0');
var babel = require('babel-core');

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

var react2schema = function react2schema(code) {
  var ast = babel.transform(code, {
    presets: [stage0],
    plugins: [jsxToSchemaPlugin],
  });

  return toJson(ast.code);
};

module.exports = react2schema;
