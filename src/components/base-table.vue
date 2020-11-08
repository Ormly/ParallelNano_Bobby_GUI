<template>
  <b-table
      :data="data"
      :columns="columns"
      :selected.sync="selected"
      focusable>
  </b-table>
</template>

<script>
export default {
name: "base-table",
  data() {
    return {
      selected: {}
    }
  },
  props: {
    data: [],
    columns: []
  }
}
</script>

<style scoped>
</style>
