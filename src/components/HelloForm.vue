<template>
  <div>
    <AppForm v-bind="$data" v-model="record" />
    <pre>{{ record }}</pre>
  </div>
</template>

<script>
import AppForm from "../app/components/AppForm";
import Category from "../domains/general/category/Category";

export default {
  name: "HelloForm",
  components: {
    AppForm
  },
  data: () => ({
    record: {},
    protoype: {}
  }),
  created() {
    // this.$route.params.id
    this.protoype = Category.build({ scope: "edit" });
  },
  mounted() {
    window.setTimeout(() => {
      this.record = {
        name: "William",
        age: 37,
        email: "wilcorrea@gmail.com",
        description: "~"
      };
    }, 1000);
  }
};
</script>
