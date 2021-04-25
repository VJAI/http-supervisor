import { matchCriteria } from './util';

/**
 * Represents a collection of records that can be group-able, sortable and searchable.
 */
export default class Collection extends Array {

  /**
   * The name of the collection.
   * @type {*}
   * @private
   */
  _name = null;

  /**
   * Original items passed in ctor.
   * @type {Array}
   * @private
   */
  _originalItems = [];

  /**
   * Array of sub-groups.
   * @type {Array}
   * @private
   */
  _groups = [];

  /**
   * The group arguments.
   * @type {Array}
   * @private
   */
  _groupArgs = [];

  /**
   * The field by which the collection's items are grouped by.
   * @type {string}
   * @private
   */
  _groupedBy = null;

  /**
   * The field by which the collection's groups are grouped by.
   * @type {null}
   * @private
   */
  _childrenGroupedBy = null;

  /**
   * The sort arguments.
   * @type {Array}
   * @private
   */
  _sortArgs = [];

  /**
   * Search query;
   * @type {*}
   * @private
   */
  _query = null;

  /**
   * Returns the name of the collection.
   * @returns {*}
   */
  get name() {
    return this._name;
  }

  /**
   * Returns true if there are items.
   * @returns {boolean}
   */
  get hasItems() {
    return this.length > 0;
  }

  /**
   * Returns true if there are sub groups.
   * @returns {boolean}
   */
  get hasGroups() {
    return !!(this._groups && this._groups.length);
  }

  /**
   * Returns the items.
   * @returns {Array<*>}
   */
  get items() {
    return this.hasItems ? [...this] : null;
  }

  /**
   * Returns the sub-groups.
   * @returns {Array<Collection>}
   */
  get groups() {
    return this.hasGroups ? [...this._groups] : null;
  }

  /**
   * Returns the group arguments.
   * @returns {Array}
   */
  get groupArgs() {
    return this._groupArgs;
  }

  /**
   * Returns the field by which the collection's items are grouped by.
   * @returns {string}
   */
  get groupedBy() {
    return this._groupedBy;
  }

  /**
   * Returns the sort arguments.
   * @returns {Array}
   */
  get sortArgs() {
    return this._sortArgs;
  }

  /**
   * Returns the items count.
   * @returns {number}
   */
  get count() {
    return this.hasItems ? this.length : 0;
  }

  /**
   * Returns the first item from the collection.
   * @returns {*}
   */
  get first() {
    return this.hasItems ? this[0] : null;
  }

  /**
   * Returns the last item from the collection.
   * @returns {*}
   */
  get last() {
    return this.hasItems ? this[this.count - 1] : null;
  }

  /**
   * Constructor.
   */
  constructor(items, name, groupedBy) {
    super();
    this.push(...items);
    this._name = name || '-';
    this._originalItems = [...items];
    this._groupedBy = groupedBy;
  }

  [Symbol.iterator]() {
    return [...this];
  }

  /**
   * Groups the collection and sub-collections by the passed arguments.
   * @param args
   * @returns {Collection}
   */
  groupBy(...args) {
    if (!args.length) {
      return this;
    }

    this._groupArgs = args;
    this._groups = [];
    this._childrenGroupedBy = args.shift();
    const obj = this._customGroupBy(this._childrenGroupedBy);

    obj.forEach((key, value) => {
      const group = new Collection(key, value, this._childrenGroupedBy);
      this._groups.push(group);
      group.groupBy(...args);
    });

    this.sortBy(...this._sortArgs);

    return this;
  }

  /**
   * Removes the grouping.
   * @returns {Collection}
   */
  ungroup() {
    this._groupArgs = [];
    this._groups = [];
    this._groupedBy = null;
    this._childrenGroupedBy = null;
    this._resetItems();
    return this;
  }

  /**
   * Sorts the collection and sub-collections by the passed arguments.
   * @param args
   * @returns {Collection}
   */
  sortBy(...args) {
    if (!args.length) {
      return this;
    }

    if (this.hasGroups) {
      this._groups.forEach(group => group.sortBy(...args));
      return this;
    }

    this.sort((r1, r2) => {
      for (let i = 0; i < args.length; i++) {
        const { field, dir } = args[i], v1 = r1[field], v2 = r2[field];
        if (v1 < v1) return dir === 'asc' ? -1 : 1;
        if (v1 > v2) return dir === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return this;
  }

  /**
   * Removes the applied sort.
   * @returns {Collection}
   */
  removeSort() {
    this._sortArgs = [];
    this._resetItems();
    this._groups.forEach(group => group.removeSort());
    return this;
  }

  /**
   * Search the items based on the passed query.
   * @param args
   * @returns {Collection}
   */
  search(...args) {
    if (!args.length) {
      return this;
    }

    this._query = args;
    const items = [...this];
    this.length = 0;
    this.push(...items.filter(r => matchCriteria(args, r)));
    this._groups.forEach(group => group.search(...args));

    return this;
  }

  /**
   * Reset the search.
   * @returns {Collection}
   */
  reset() {
    this._query = null;
    this._resetItems();
    this._groups.forEach(group => group.reset());
    return this;
  }

  /**
   * Reset the items.
   * @private
   */
  _resetItems() {
    this.splice(0, this.length);
    this.push(...this._originalItems);
  }

  /**
   * Groups the array.
   * @param key
   * @private
   */
  _customGroupBy(key) {
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
  }
}
