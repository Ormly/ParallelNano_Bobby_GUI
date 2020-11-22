<template>
  <div class="columns">
    <div  class="column is-one-fifth">
      <div class="columns is-gapless">
        <div class="column is-narrow">
          <base-button @base-button-clicked="propagateButtonEvent" v-for="dataItem in buttonColumnLeft" :key="dataItem.label"
            :label="dataItem.label"
            :icon="dataItem.icon"
            :size="dataItem.size"
            :type="dataItem.type"
            :fullwidth="dataItem.fullwidth">
          </base-button>
        </div>
        <div class="column is-narrow">
          <base-button @base-button-clicked="propagateButtonEvent" v-for="dataItem in buttonColumnCenter" :key="dataItem.label"
            :label="dataItem.label"
            :icon="dataItem.icon"
            :size="dataItem.size"
            :type="dataItem.type"
            :fullwidth="dataItem.fullwidth">
          </base-button>
        </div>
        <div class="column is-narrow">
            <base-button @base-button-clicked="propagateButtonEvent" v-for="dataItem in buttonColumnRight" :key="dataItem.label"
             :label="dataItem.label"
             :icon="dataItem.icon"
             :size="dataItem.size"
             :type="dataItem.type"
             :fullwidth="dataItem.fullwidth">
            </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base-components/base-button";
/*
 * Helper component to display buttons below the nodes table.
 */
export default {
name: "nodes-button-container",
  components: {BaseButton},
  props: {
    buttonData: Array
  },
  computed: {
    buttonColumnLeft() {
      return [this.buttonData[0],this.buttonData[3]]
    },
    buttonColumnCenter() {
      return [this.buttonData[1],this.buttonData[4]]
    },
    buttonColumnRight() {
      return [this.buttonData[2]]
    }
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
