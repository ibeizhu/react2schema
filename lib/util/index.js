'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toJson = toJson;
/**
 * Created by beizhu on 2019/8/11.
 */

function toJson(code) {
  try {
    var input = '[' + code + ']';
    JSON.stringify(eval(input)).slice(1, -1);
  } catch (e) {
    console.error(e);
    return code;
  }
}
