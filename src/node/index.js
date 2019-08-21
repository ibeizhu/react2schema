/**
 * Created by beizhu on 2019/8/11.
 */

const jsxToSchemaPlugin = require('babel-plugin-jsx-to-schema');
const stage0 = require('babel-preset-stage-0');
const babel = require('babel-core');

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

const react2schema = code => {
  const ast = babel.transform(code, {
    presets: [stage0],
    plugins: [jsxToSchemaPlugin],
  });

  return toJson(ast.code);
};

module.exports = react2schema;
