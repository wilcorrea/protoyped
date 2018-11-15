<template>
  <div class="container">
    <div class="form form-grid">
      <div
        v-for="field in fields"
        :key="`container-${field.$key}`"
        v-show="!field.$layout.formHidden"
        class="field"
        :class="`width-${field.$layout.formWidth}`"
      >
        <component
          :is="field.$is"
          :key="field.$key"
          v-model="record[field.$key]"
          v-bind="field.$attrs"
          v-on="field.$listeners"
        />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import AppFormMixin from './AppFormMixin';

export default {
  name: 'AppForm',
  mixins: [
    AppFormMixin,
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr {
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.04),
    #ddd,
    #ddd,
    rgba(0, 0, 0, 0.04)
  );
}
hr.light {
  margin: 10px 0;
}

.form {
  position: relative;
  min-width: 260px;
  width: 100%;
}
.form .field {
  padding: 5px 10px 10px 10px;
}
.form .field .native label,
.form .field .native input,
.form .field .native textarea {
  display: block !important;
  width: 100% !important;
  padding: 2px 6px !important;
}
.form .field .native input,
.form .field .native textarea {
  border-radius: 2px !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: #e8e8e8 !important;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.025) !important;
  padding: 4px 6px !important;
  outline: none !important;
}
.form .field .native input:hover,
.form .field .native textarea:hover {
  border-color: #d4d4d4 !important;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05) !important;
}
.form .field .native input:focus,
.form .field .native textarea:focus {
  border-color: #d8d8d8 !important;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1) !important;
}
.form .field .native textarea {
  resize: vertical !important;
  min-height: 96px !important;
}
.form.form-grid {
  display: grid;
  grid-template-columns: repeat(20, 5%);
}
.form.form-grid .field {
  grid-column: auto/span 20;
}
.form.form-grid .field.width-5 {
  grid-column: auto/span 1;
}
.form.form-grid .field.width-10 {
  grid-column: auto/span 2;
}
.form.form-grid .field.width-15 {
  grid-column: auto/span 3;
}
.form.form-grid .field.width-20 {
  grid-column: auto/span 4;
}
.form.form-grid .field.width-25 {
  grid-column: auto/span 5;
}
.form.form-grid .field.width-30 {
  grid-column: auto/span 6;
}
.form.form-grid .field.width-35 {
  grid-column: auto/span 7;
}
.form.form-grid .field.width-40 {
  grid-column: auto/span 8;
}
.form.form-grid .field.width-45 {
  grid-column: auto/span 9;
}
.form.form-grid .field.width-50 {
  grid-column: auto/span 10;
}
.form.form-grid .field.width-55 {
  grid-column: auto/span 11;
}
.form.form-grid .field.width-60 {
  grid-column: auto/span 12;
}
.form.form-grid .field.width-65 {
  grid-column: auto/span 13;
}
.form.form-grid .field.width-70 {
  grid-column: auto/span 14;
}
.form.form-grid .field.width-75 {
  grid-column: auto/span 15;
}
.form.form-grid .field.width-80 {
  grid-column: auto/span 16;
}
.form.form-grid .field.width-85 {
  grid-column: auto/span 17;
}
.form.form-grid .field.width-90 {
  grid-column: auto/span 18;
}
.form.form-grid .field.width-95 {
  grid-column: auto/span 19;
}
.form.form-grid .field.width-100 {
  grid-column: auto/span 20;
}
.form.form-grid .field.height-1 {
  grid-row: auto/span 1;
}
.form.form-grid .field.height-2 {
  grid-row: auto/span 2;
}
.form.form-grid .field.height-3 {
  grid-row: auto/span 3;
}
.form.form-grid .field.height-4 {
  grid-row: auto/span 4;
}
.form.form-grid .field.height-5 {
  grid-row: auto/span 5;
}
.form.form-grid .field.height-6 {
  grid-row: auto/span 6;
}
.form.form-grid .field.height-7 {
  grid-row: auto/span 7;
}
.form.form-grid .field.height-8 {
  grid-row: auto/span 8;
}
.form.form-grid .field.height-9 {
  grid-row: auto/span 9;
}
.form.form-grid .field.height-10 {
  grid-row: auto/span 10;
}
.form.form-grid .field.height-11 {
  grid-row: auto/span 11;
}
.form.form-grid .field.height-12 {
  grid-row: auto/span 12;
}
.form.form-grid .field.height-13 {
  grid-row: auto/span 13;
}
.form.form-grid .field.height-14 {
  grid-row: auto/span 14;
}
.form.form-grid .field.height-15 {
  grid-row: auto/span 15;
}
.form.form-grid .field.height-16 {
  grid-row: auto/span 16;
}
.form.form-grid .field.height-17 {
  grid-row: auto/span 17;
}
.form.form-grid .field.height-18 {
  grid-row: auto/span 18;
}
.form.form-grid .field.height-19 {
  grid-row: auto/span 19;
}
.form.form-grid .field.height-20 {
  grid-row: auto/span 20;
}
@media (max-width: 480px) {
  .form.form-grid:not(.no-break) .field:not(.no-break) {
    grid-column: auto/span 20 !important;
    grid-row: auto/span 1;
  }
}
</style>
