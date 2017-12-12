'use strict';

let _ = {};

require('./src/lib/base/typeof')(_);

require('./src/lib/object-about/compare-object')(_);
require('./src/lib/object-about/deep-clone')(_);
require('./src/lib/object-about/extend')(_);
require('./src/lib/object-about/merge')(_);

require('./src/lib/array-about/array-equals')(_);

require('./src/lib/number-about/number-format')(_);

require('./src/lib/get-about/deep-get')(_);

// Export it
module.exports = _;