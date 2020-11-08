<template>
  <base-table
    :data="data"
    :columns="columns">
  </base-table>
</template>

<script>
import BaseTable from "@/components/base-table";
export default {
name: "nodes-management",
  components: {BaseTable},
  data() {
    return {
      data: [],
      columns: []
    }
  },
  props: {

  }
}
</script>

<style scoped>
</style>
