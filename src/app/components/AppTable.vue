<template>
  <div class="container">
    <table
      cellpadding="0"
      cellspacing="0"
    >
      <thead>
      <tr>
        <th>*</th>
        <th
          v-for="field in fields"
          v-show="!field.$layout.gridHidden"
          v-html="field.$attrs.label"
          :key="field.$key"
        />
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(record, key) in records"
        :key="key"
      >
        <td>
          <slot name="options" :record="record">
            <a href="javascript:void(0)" @click="$router.push(`/${record[id]}`)">
              {{ record[id] }}
            </a>
          </slot>
        </td>
        <td
          v-for="field in fields"
          v-show="!field.$layout.gridHidden"
          :key="field.$key"
        >
          <slot :name="`column-${field.$key}`" :record="record">
            <span v-html="record[field.$key]"/>
          </slot>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/javascript">
import AppTableMixin from './AppTableMixin';

export default {
  name: 'AppTable',
  mixins: [
    AppTableMixin,
  ],
};
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid rgba(0, 0, 0, .42);
    padding: 8px;
  }
</style>
