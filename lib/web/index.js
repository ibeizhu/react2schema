/**
 * Created by beizhu on 2019/8/11.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _babelPluginJsxToSchema = require('babel-plugin-jsx-to-schema');

var _babelPluginJsxToSchema2 = _interopRequireDefault(_babelPluginJsxToSchema);

var _babelPresetStage = require('babel-preset-stage-0');

var _babelPresetStage2 = _interopRequireDefault(_babelPresetStage);

var _babelStandalone = require('babel-standalone');

var _babelStandalone2 = _interopRequireDefault(_babelStandalone);

var _util = require('../util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var react2schema = function react2schema(jsxCode) {
  var ast = _babelStandalone2.default.transform(jsxCode, {
    presets: [_babelPresetStage2.default],
    plugins: [_babelPluginJsxToSchema2.default],
  });
  return (0, _util.toJson)(ast.code);
};

exports.default = react2schema;
