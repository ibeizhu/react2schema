/**
 * Created by beizhu on 2019/8/11.
 */
'use strict';

const jsxToSchemaPlugin = require('babel-plugin-jsx-to-schema');
const stage0 = require('babel-preset-stage-0');
const babel = require('babel-standalone');

function toJson(code) {
  try {
    let input = '[' + code + ']';
    let str = JSON.stringify(eval(input));
    return str.slice(1, str.length - 1);
  } catch (e) {
    console.error(e);
    return code;
  }
}

const react2schema = jsxCode => {
  const ast = babel.transform(jsxCode, {
    presets: [stage0],
    plugins: [jsxToSchemaPlugin],
  });
  return toJson(ast.code);
};

export default react2schema;
