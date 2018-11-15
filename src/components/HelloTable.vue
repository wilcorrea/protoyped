<template>
  <div>
    <AppTable v-bind="$data" v-model="records">
      <div slot="options" slot-scope="scope">{{ scope.record["id"] }}</div>
    </AppTable>
    <pre>{{ records }}</pre>
  </div>
</template>

<script>
import AppTable from "../app/components/AppTable";
import Category from "../domains/general/category/Category";

export default {
  name: "HelloTable",
  components: {
    AppTable
  },
  data: () => ({
    records: [],
    protoype: {}
  }),
  created() {
    // this.$route.params.id
    this.protoype = Category.build({ scope: "index" });
  },
  mounted() {
    const age = () => parseInt(Math.random() * 100, 0);
    window.setTimeout(() => {
      this.records = [
        {
          id: 1,
          name: "William 1",
          age: age(),
          email: "wilcorrea@gmail.com",
          description: "~"
        },
        {
          id: 2,
          name: "William 2",
          age: age(),
          email: "wilcorrea@gmail.com",
          description: "~"
        },
        {
          id: 3,
          name: "William 3",
          age: age(),
          email: "wilcorrea@gmail.com",
          description: "~"
        },
        {
          id: 4,
          name: "William 4",
          age: age(),
          email: "wilcorrea@gmail.com",
          description: "~"
        },
        {
          id: 5,
          name: "William 5",
          age: age(),
          email: "wilcorrea@gmail.com",
          description: "~"
        },
        {
          id: 6,
          name: "William 6",
          age: age(),
          email: "wilcorrea@gmail.com",
          description: "~"
        }
      ];
    }, 1000);
  }
};
</script>
