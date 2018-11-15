export default {
  type(type) {
    return this.__setAttrs({ type });
  },
  default(value) {
    return this.__setAttrs({ value });
  }
};
