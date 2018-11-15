import Vue from 'vue';

const basic = template => ({
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners() {
      const vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input(event) {
            vm.$emit('input', event.target.value);
          },
        },
      );
    },
  },
  template,
});

Vue.component(
  'basic-input',
  basic(`<div class="native">
<label>{{ label }}</label>
<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners">
</div>`),
);
Vue.component(
  'basic-textarea',
  basic(`<div class="native">
<label>{{ label }}</label>
<textarea v-bind="$attrs" v-bind:value="value" v-on="inputListeners"></textarea>
</div>`),
);
Vue.component(
  'basic-select',
  basic(`<div class="native">
<label>{{ label }}</label>
<select v-bind="$attrs" v-bind:value="value" v-on="inputListeners"></select>
</div>`),
);

export default {
  input: {
    is: 'basic-input',
  },
  text: {
    is: 'basic-textarea',
  },
  select: {
    is: 'basic-select',
  },
  file: {
    is: 'basic-input',
    attrs: {
      type: 'file',
    },
  },
};
