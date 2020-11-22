<template>
    <div class="buttons has-addons">
        <base-button @base-button-clicked="propagateButtonEvent" v-for="dataItem in buttonData" :key="dataItem.label"
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
/*
 * Helper component meant  to hold buttons related to the users view.
 */
export default {
name: "users-button-container",
    components: {BaseButton},
    props: {
        buttonData: Array
    },
    methods: {
      propagateButtonEvent(buttonLabel) {
        // Fire when a button is clicked.
        // @args The payload is the label of the button, for identification purposes.
        this.$emit("button-clicked", buttonLabel);
      }
    }
}
</script>

<style scoped>
</style>
