/* eslint-disable no-underscore-dangle */
import PrototypeBase from './PrototypeBase';

/**
 * @typedef {PrototypeBase}
 */
export default class Prototype extends PrototypeBase {
  input() {
    return this.setComponent('input');
  }

  text() {
    return this.setComponent('text');
  }

  select() {
    return this.setComponent('select');
  }

  file() {
    return this.setComponent('file');
  }

  email() {
    return this.setComponent('input');
  }


  formWidth(formWidth) {
    return this.setLayout({ formWidth });
  }

  formHidden(formHidden) {
    return this.setLayout({ formHidden });
  }

  gridWidth(gridWidth) {
    return this.setLayout({ gridWidth });
  }

  gridHidden(gridHidden) {
    return this.setLayout({ gridHidden });
  }

  type(type) {
    return this.setAttrs({ type });
  }

  default(value) {
    return this.setAttrs({ value });
  }

  on(event, callable) {
    const listener = {};
    listener[event] = callable;
    return this.setListeners(listener);
  }
}
