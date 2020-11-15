<template>
    <div class="buttons has-addons">
        <base-button v-for="dataItem in buttonData" :key="dataItem.label"
             :label="dataItem.label"
             :icon="dataItem.icon"
             :size="dataItem.size"
             :type="dataItem.type"
             :fullwidth="dataItem.fullwidth">
        </base-button>
    </div>
</template>

<script>
import BaseButton from "@/components/base-components/base-button";

export default {
name: "users-button-container",
    components: {BaseButton},
    props: {
        buttonData: Array
    }
}
</script>

<style scoped>
</style>
