'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _babelPluginJsxToSchema = require('babel-plugin-jsx-to-schema');

var _babelPluginJsxToSchema2 = _interopRequireDefault(_babelPluginJsxToSchema);

var _babelPresetStage = require('babel-preset-stage-0');

var _babelPresetStage2 = _interopRequireDefault(_babelPresetStage);

var _util = require('../util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by beizhu on 2019/8/11.
 */
var react2schema = function react2schema(code) {
  var ast = _babelCore2.default.transform(code, {
    presets: [_babelPresetStage2.default],
    plugins: [_babelPluginJsxToSchema2.default],
  });

  return (0, _util.toJson)(ast.code);
};

exports.default = react2schema;
