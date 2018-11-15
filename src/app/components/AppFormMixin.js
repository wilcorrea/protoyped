export default {
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    protoype: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    record: {},
    fields: {}
  }),
  methods: {
    fieldsRender() {
      this.fields = this.protoype.fields();
      Object.keys(this.fields).forEach($key => {
        Object.keys(this.fields[$key].$listeners).forEach(name => {
          const event = this.fields[$key].$listeners[name];
          this.fields[$key].$listeners[name] = event.bind(this);
        });
      });
    },
    recordRender() {
      const recordReduce = (accumulator, $key) => {
        let value = this.value[$key];
        if (typeof value === "undefined") {
          value = this.fields[$key].$attrs.value;
        }
        accumulator[$key] = value;
        return accumulator;
      };
      this.record = Object.keys(this.fields).reduce(recordReduce, {});
    }
  },
  watch: {
    value(value) {
      Object.keys(value).forEach($key => {
        if (this.record[$key] === value[$key]) {
          return;
        }
        this.record[$key] = value[$key];
      });
    },
    record: {
      handler(record) {
        this.$emit("input", record);
      },
      deep: true
    }
  },
  created() {
    this.fieldsRender();
    this.recordRender();
    if (this.protoype.hasHook("created")) {
      const hook = this.protoype.getHook("created");
      hook.bind(this).call();
    }
    this.$emit("created");
  },
  mounted() {
    if (this.protoype.hasHook("mounted")) {
      const hook = this.protoype.getHook("mounted");
      hook.bind(this).call();
    }
    this.$emit("mounted");
  }
};
