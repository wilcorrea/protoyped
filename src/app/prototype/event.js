/* eslint-disable no-underscore-dangle */
export default {
  on(event, callable) {
    const listener = {};
    listener[event] = callable;
    return this.__setListeners(listener);
  },
};
