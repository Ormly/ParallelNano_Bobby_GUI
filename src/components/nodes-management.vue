<template>
  <base-table
    :data="tableData"
    :columns="tableColumns"
    @select="selectedTableData">
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
      tableColumns: [],
      selectedTableData: {}
    }
  }
}
</script>

<style scoped>
</style>
