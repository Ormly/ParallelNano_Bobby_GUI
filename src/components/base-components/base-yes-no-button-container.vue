<template>
    <div class="buttons">
        <base-button @base-button-clicked="propagateButtonEvent"
                     v-for="dataItem in buttonData"
                     :key="dataItem.label"
                     :label="dataItem.label"
                     :size="dataItem.size"
                     :type="dataItem.type">
        </base-button>
    </div>
</template>

<script>
import BaseButton from "@/components/base-components/base-button";
/*
 * This component represents a basic container of two buttons, meant to display a typical yes/no button constellation.
 */
export default {
    name: "yes-no-button-container",
    components: {BaseButton},
    props: {
        //label, size, type
        buttonData: Array
    },
    methods: {
        propagateButtonEvent(buttonLabel) {
            //Fire when a is clicked.
            //@args The payload is the label of the button, for identification purposes.
            this.$emit("button-clicked", buttonLabel);
        }
    }
}
</script>

<style scoped>

</style>
