import Collection from './collection';

export class Session extends Set {

  _id = null;

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  requests() {
    return new Collection(...this);
  }
}
