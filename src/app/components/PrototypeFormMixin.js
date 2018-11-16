/* eslint-disable no-param-reassign */
import Prototype from '../Prototype';

export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    prototype: {
      type: Prototype,
      required: true,
    },
  },
  data: () => ({
    record: {},
    fields: {},
  }),
  methods: {
    fieldsRender() {
      this.fields = this.prototype.fields();
      Object.keys(this.fields).forEach(($key) => {
        Object.keys(this.fields[$key].$listeners).forEach((name) => {
          const event = this.fields[$key].$listeners[name];
          this.fields[$key].$listeners[name] = event.bind(this);
        });
      });
    },
    recordRender() {
      const recordReduce = (accumulator, $key) => {
        let value = this.value[$key];
        if (typeof value === 'undefined') {
          value = this.fields[$key].$attrs.value;
        }
        accumulator[$key] = value;
        return accumulator;
      };
      this.record = Object.keys(this.fields).reduce(recordReduce, {});
    },
  },
  watch: {
    value(value) {
      Object.keys(value).forEach(($key) => {
        if (this.record[$key] === value[$key]) {
          return;
        }
        this.record[$key] = value[$key];
      });
    },
    record: {
      handler(record) {
        this.$emit('input', record);
      },
      deep: true,
    },
    /**
     * @param {String} hook
     */
    hookTrigger(hook) {
      const hooks = this.prototype.hooks();
      if (hooks[hook]) {
        hooks[hook].bind(this).call();
      }
      this.$emit(hook);
    },
  },
  created() {
    this.fieldsRender();
    this.recordRender();

    this.hookTrigger('created');
  },
  mounted() {
    this.hookTrigger('mounted');
  },
};
