/**
 * Array polyfills.
 */
Array.prototype.groupBy = function (key) {
  return this.reduce(function (rv, x) {
    rv.set(x[key], [...(rv.has(x[key]) ? rv.get(x[key]) : []), x]);
    return rv;
  }, new Map());
};
