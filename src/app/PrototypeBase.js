/* eslint-disable no-underscore-dangle */
import { components } from '../env';

/**
 * @typedef {PrototypeBase}
 */
export default class PrototypeBase {
  /**
   * @type {{input, text, select, file}}
   */
  static components = components;

  /**
   * @type {string}
   */
  static is = 'input';

  /**
   * @param {Object} options
   * @returns {this}
   */
  static build(options = {}) {
    return new this(options);
  }

  /**
   * @param {Object} options
   */
  constructor(options) {
    this.__fields = {};
    this.__hooks = {};

    if (this.construct && typeof this.construct === 'function') {
      const { scope } = Object.assign({}, options);
      // noinspection JSUnresolvedFunction
      this.construct(scope);
      return;
    }
    throw new Error('Invalid `construct` method on prototype instance');
  }

  /**
   * @param {String} name
   * @param {String} label
   * @param {String} is
   * @param {Object} attrs
   * @param {Object} listeners
   * @returns {this}
   */
  field(name, label = '', is = null, attrs = null, listeners = null) {
    this.__current = name;
    let __is = is;
    if (!is) {
      __is = this.constructor.is;
    }
    const __attrs = Object.assign({ label }, attrs);
    const __listeners = Object.assign({}, listeners);
    this.__fields[name] = {
      $key: name,
      $is: '',
      $layout: {
        formWidth: 100,
        formHidden: false,
        gridWidth: 'auto',
        gridHidden: false,
      },
      $attrs: __attrs,
      $listeners: __listeners,
    };
    this.setComponent(__is);
    return this;
  }

  /**
   * @returns {Object}
   */
  fields() {
    return this.__fields;
  }

  /**
   * @returns {Object}
   */
  hook(name, handler) {
    this.__hooks[name] = handler;
    return this;
  }

  /**
   * @returns {Object}
   */
  hooks() {
    return this.__hooks;
  }

  /**
   * @param {String} component
   * @returns {this}
   */
  setComponent(component) {
    const properties = this.constructor.components[component];
    if (!properties) {
      this.setIs(component);
      return this;
    }
    this.setIs(properties.is);
    this.setAttrs(properties.attrs);
    this.setListeners(properties.listeners);
    return this;
  }

  /**
   * @param {String} component
   * @returns {this}
   */
  setIs(component) {
    const name = this.__current;
    const field = this.__fields[name];
    field.$is = component;
    return this;
  }

  /**
   * @param {Object} layout
   * @returns {this}
   */
  setLayout(layout) {
    const name = this.__current;
    const field = this.__fields[name];
    this.__fields[name].$layout = Object.assign(field.$layout, layout);
    return this;
  }

  /**
   * @param {Object} attrs
   * @returns {this}
   */
  setAttrs(attrs) {
    const name = this.__current;
    const field = this.__fields[name];
    this.__fields[name].$attrs = Object.assign(field.$attrs, attrs);
    return this;
  }

  /**
   * @param {Object} listeners
   * @returns {this}
   */
  setListeners(listeners) {
    const name = this.__current;
    const field = this.__fields[name];
    this.__fields[name].$listeners = Object.assign(
      field.$listeners,
      listeners,
    );
    return this;
  }
}
