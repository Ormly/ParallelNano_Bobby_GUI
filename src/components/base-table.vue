<template>
  <b-table
      :data="data"
      :columns="columns"
      @select="rowSelected"
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
  },
  methods: {
    rowSelected() {
      this.$emit("select", this.selected)
    }
  }
}
</script>

<style scoped>
</style>
