'use strict';

let _ = {};

require('./lib/base/typeof')(_);
require('./lib/object-about/compare-object')(_);
require('./lib/object-about/deep-clone')(_);
require('./lib/number-about/number-format')(_);
require('./lib/get-about/deep-get')(_);

// Export it
module.exports = _;