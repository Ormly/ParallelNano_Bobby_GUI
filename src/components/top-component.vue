<template>
  <div class="columns">
    <div class="column">
      <h1 class="is-size-1">Nodes</h1>
      <nodes-management class="column"/>
    </div>
    <div class="column">test</div>
    <div class="column">
        <h1 class="is-size-1">Nodes</h1>
        <users-management class="column"/>
    </div>
  </div>
</template>

<script>
import NodesManagement from "@/components/nodes-management";
import UsersManagement from "@/components/user-management";
export default {
name: "top-component",
  components: {NodesManagement, UsersManagement}
}
</script>

<style scoped>

</style>
