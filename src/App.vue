<template>
  <div id="app">
    <top-component></top-component>
  </div>
</template>

<style>
  *
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body
  {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
<script>
import TopComponent from "@/components/top-component";
export default {
  components: {TopComponent}
}
</script>
