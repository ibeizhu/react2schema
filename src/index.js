/**
 * Created by beizhu on 2019/8/11.
 */

if (global) {
  module.exports = require('./node');
} else {
  module.exports = require('./web');
}
