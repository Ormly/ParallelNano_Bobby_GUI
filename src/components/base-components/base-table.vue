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
/*
 * This component represents a basic table, complete with prop-given data and column labeling.
 */
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
    //Array of table (row) entries.
    data: Array,
    //Array of columns with associated labels.
    columns: Array
  },
  methods: {
    rowSelected() {
      //Fires when a table entry is selected.
      //@args The payload is the selected table entry data.
      this.$emit("select", this.selected)
    }
  }
}
</script>

<style scoped>
</style>
