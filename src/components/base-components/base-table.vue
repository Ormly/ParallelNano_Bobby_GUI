<template>
  <b-table
      :data="data"
      :columns="columns"
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
      selected: null,
      narrowed: true
    }
  },
  watch: {
    selected: function() {
      this.rowSelected();
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
