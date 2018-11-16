<template>
  <div>
    <PrototypeTable
      v-bind="$data"
      v-model="records"
    >
      <!--<div slot="options" slot-scope="scope">{{ scope.record["id"] }}</div>-->
    </PrototypeTable>
    <pre>{{ records }}</pre>
  </div>
</template>

<script type="text/javascript">
/* eslint-disable import/extensions, import/no-unresolved */
import PrototypeTable from 'src/app/components/PrototypeTable';
import Category from 'src/domains/general/category/Category';
import records from './data';

export default {
  name: 'HelloTable',
  components: {
    PrototypeTable,
  },
  data: () => ({
    records: [],
    prototype: {},
  }),
  created() {
    this.prototype = Category.build({ scope: 'index' });
  },
  mounted() {
    window.setTimeout(() => {
      this.records = records;
    }, 1000);
  },
};
</script>
