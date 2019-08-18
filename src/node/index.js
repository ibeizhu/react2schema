/**
 * Created by beizhu on 2019/8/11.
 */
import babel from 'babel-core';
import jsxToSchemaPlugin from 'babel-plugin-jsx-to-schema';
import stage0 from 'babel-preset-stage-0';
import { toJson } from '../util';

const react2schema = code => {
  const ast = babel.transform(code, {
    presets: [stage0],
    plugins: [jsxToSchemaPlugin],
  });

  return toJson(ast.code);
};

export default react2schema;
