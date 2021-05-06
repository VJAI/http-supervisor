/**
 * Takes care of event handling business.
 */
export default class EventEmitter {

  /**
   * The events and their associated handlers store.
   * @type {Map}
   * @private
   */
  _eventsHandlersMap = new Map();

  /**
   * Subscribes to the passed event.
   * @param {string} eventName
   * @param {function} handler
   */
  on(eventName, handler) {
    if (!this._eventsHandlersMap.has(eventName)) {
      this._eventsHandlersMap.set(eventName, new Set());
    }

    this._eventsHandlersMap.get(eventName).add(handler);
  }

  /**
   * Un-subscribes from the passed event.
   * @param {string} eventName
   * @param {function} handler
   */
  off(eventName, handler) {
    if (!this._eventsHandlersMap.has(eventName)) {
      return;
    }

    const handlers = this._eventsHandlersMap.get(eventName);
    handlers && handlers.delete(handler);
  }

  /**
   * Invokes the handlers registered for the event.
   * @private
   */
  triggerEvent(eventName, ...args) {
    const handlers = this._eventsHandlersMap.get(eventName);
    if (!handlers) {
      return;
    }
    [...handlers].forEach(handler => handler(...args));
  }

  destroy() {
    this._eventsHandlersMap = null;
  }
}
