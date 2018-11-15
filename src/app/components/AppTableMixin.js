export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    protoype: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    records: [],
    fields: {}
  }),
  methods: {
    fieldsRender() {
      this.fields = this.protoype.fields();
    }
  },
  watch: {
    value(value) {
      this.records = [...value];
    }
  },
  created() {
    this.fieldsRender();

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
