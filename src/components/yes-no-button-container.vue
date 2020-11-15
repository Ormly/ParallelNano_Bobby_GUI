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
import BaseButton from "@/components/base-button";

export default {
    name: "yes-no-button-container",
    components: {BaseButton},
    props: {
        buttonData: Array
    },
    methods: {
        propagateButtonEvent(buttonLabel) {
            this.$emit("button-clicked", buttonLabel);
        }
    }
}
</script>

<style scoped>

</style>
