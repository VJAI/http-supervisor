/**
 * Array polyfills.
 */
Array.prototype.groupBy = function (key) {
  return this.reduce(function (rv, x) {
    const groupName = x[key];
    let hasGroup, newValue, groupKey;

    if (typeof groupName !== 'object') {
      groupKey = groupName;
      hasGroup = rv.has(groupName);
    } else {
      groupKey = [...rv.keys()].find(k => JSON.stringify(k) === JSON.stringify(groupName));
      hasGroup = !!groupKey;
      groupKey = groupKey || groupName;
    }

    if (hasGroup) {
      newValue = [...rv.get(groupKey), x];
    } else {
      newValue = [x];
    }

    rv.set(groupKey, newValue);
    return rv;
  }, new Map());
};
