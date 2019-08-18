/**
 * Created by beizhu on 2019/8/11.
 */

export function toJson(code) {
  try {
    let input = '[' + code + ']';
    JSON.stringify(eval(input)).slice(1, -1);
  } catch (e) {
    console.error(e);
    return code;
  }
}
