<template>
  <HelloTable />
  <!-- <HelloForm /> -->
</template>

<script>
// import HelloForm from "./components/HelloForm";
import HelloTable from "./components/HelloTable";

export default {
  name: "App",
  components: {
    HelloTable
    // HelloForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
