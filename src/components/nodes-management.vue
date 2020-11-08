<template>
  <base-table
    :data="tableData"
    :columns="tableColumns">
  </base-table>
</template>

<script>
import BaseTable from "@/components/base-table";
export default {
name: "nodes-management",
  components: {BaseTable},
  data() {
    return {
      tableData: [],
      tableColumns: []
    }
  },
  props: {

  }
}
</script>

<style scoped>
</style>
