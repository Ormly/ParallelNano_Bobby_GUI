<template>
  <b-table
      :data="data"
      :columns="columns"
      @select="rowSelected"
      :selected.sync="selected"
      :narrowed="narrowed"
      focusable>
  </b-table>
</template>

<script>
export default {
name: "base-table",
  data() {
    return {
      selected: {},
      narrowed: true
    }
  },
  props: {
    data: Array,
    columns: Array
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
