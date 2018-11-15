export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    prototype: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      default: 'id',
    },
  },
  data: () => ({
    records: [],
    fields: {},
  }),
  methods: {
    fieldsRender() {
      this.fields = this.prototype.fields();
    },
  },
  watch: {
    value(value) {
      this.records = [...value];
    },
  },
  created() {
    this.fieldsRender();

    if (this.prototype.hasHook('created')) {
      const hook = this.prototype.getHook('created');
      hook.bind(this).call();
    }
    this.$emit('created');
  },
  mounted() {
    if (this.prototype.hasHook('mounted')) {
      const hook = this.prototype.getHook('mounted');
      hook.bind(this).call();
    }
    this.$emit('mounted');
  },
};
