<template>
  <div>
    <PrototypeForm
      v-bind="$data"
      v-model="record"
    />
    <pre>{{ record }}</pre>
  </div>
</template>

<script type="text/javascript">
import PrototypeForm from '../app/components/PrototypeForm';
import Category from '../domains/general/category/Category';
import records from './data';

export default {
  name: 'HelloForm',
  components: {
    PrototypeForm,
  },
  props: {
    scope: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    record: {},
    prototype: {},
  }),
  created() {
    this.prototype = Category.build({ scope: this.scope });
  },
  mounted() {
    if (!this.$route.params.id) {
      return;
    }
    window.setTimeout(() => {
      this.record = records[0];
    }, 500);
  },
};
</script>
