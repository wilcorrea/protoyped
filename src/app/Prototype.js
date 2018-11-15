/* eslint-disable no-underscore-dangle */
import { components } from '../env';
import prototype from './prototype/index';

/**
 * @typedef {Prototype}
 */
export default class Prototype {
  static components = components;

  static is = 'input';

  constructor(options) {
    this.__fields = {};
    this.__hooks = {};

    Object.keys(prototype).forEach(key => this.__load(prototype[key]));

    if (this.construct && typeof this.construct === 'function') {
      const { scope } = options;
      this.construct(scope);
      return;
    }
    throw new Error('Invalid `construct` method on prototype instance');
  }

  static build(options = {}) {
    return new this(options);
  }

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
    this.__setComponent(__is);
    return this;
  }

  hook(name, handler) {
    this.__hooks[name] = handler;
    return this;
  }

  hasHook(name) {
    return !!this.__hooks[name];
  }

  getHook(name) {
    return this.__hooks[name];
  }

  fields() {
    return this.__fields;
  }

  hooks() {
    return this.__hooks;
  }

  __load(methods) {
    Object.keys(methods).forEach((method) => {
      this[method] = methods[method].bind(this);
    });
  }

  __setComponent(component) {
    const properties = this.constructor.components[component];
    this.__setIs(properties.is);
    this.__setAttrs(properties.attrs);
    this.__setListeners(properties.listeners);
    return this;
  }

  __setIs(component) {
    const name = this.__current;
    const field = this.__fields[name];
    field.$is = component;
    return this;
  }

  __setLayout(layout) {
    const name = this.__current;
    const field = this.__fields[name];
    this.__fields[name].$layout = Object.assign(field.$layout, layout);
    return this;
  }

  __setAttrs(attrs) {
    const name = this.__current;
    const field = this.__fields[name];
    this.__fields[name].$attrs = Object.assign(field.$attrs, attrs);
    return this;
  }

  __setListeners(listeners) {
    const name = this.__current;
    const field = this.__fields[name];
    this.__fields[name].$listeners = Object.assign(
      field.$listeners,
      listeners,
    );
    return this;
  }
}
