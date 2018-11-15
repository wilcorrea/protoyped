<template>
  <div>
    <AppForm
      v-bind="$data"
      v-model="record"
    />
    <pre>{{ record }}</pre>
  </div>
</template>

<script>
import AppForm from '../app/components/AppForm';
import Category from '../domains/general/category/Category';

export default {
  name: 'HelloForm',
  components: {
    AppForm,
  },
  props: {
    scope: {
      type: String,
    },
  },
  data: () => ({
    record: {},
    prototype: {},
  }),
  created() {
    // this.$route.params.id
    this.prototype = Category.build({ scope: this.scope });
  },
  mounted() {
    if (!this.$route.params.id) {
      return;
    }
    const age = () => parseInt(Math.random() * 100, 0);
    window.setTimeout(() => {
      this.record = {
        name: 'William',
        age: age(),
        email: 'wilcorrea@gmail.com',
      };
    }, 500);
  },
};
</script>
