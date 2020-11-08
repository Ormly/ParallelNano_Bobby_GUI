<template>
  <b-table
      :data="data"
      :columns="columns">
  </b-table>
</template>

<script>
export default {
name: "base-table",
  props: {
    data: [],
    columns: []
  }
}
</script>

<style scoped>
</style>
