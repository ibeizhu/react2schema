/**
 * Created by beizhu on 2019/8/11.
 */
'use strict';

import jsxToSchemaPlugin from 'babel-plugin-jsx-to-schema';
import stage0 from 'babel-preset-stage-0';
import babel from 'babel-standalone';
import { toJson } from '../util';

const react2schema = jsxCode => {
  const ast = babel.transform(jsxCode, {
    presets: [stage0],
    plugins: [jsxToSchemaPlugin],
  });
  return toJson(ast.code);
};

export default react2schema;
