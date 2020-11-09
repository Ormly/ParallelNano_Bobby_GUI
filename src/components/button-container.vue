<template>
  <div class="columns">
    <div  class="column is-one-fifth">
      <div class="columns is-gapless">
        <div class="column is-narrow">
          <base-button
              :label="buttonColumnLeft[0].label"
              :icon="buttonColumnLeft[0].icon"
              :size="buttonColumnLeft[0].size"
              :type="buttonColumnLeft[0].type">
          </base-button>
          <br/>
          <base-button
              :label="buttonColumnLeft[1].label"
              :icon="buttonColumnLeft[1].icon"
              :size="buttonColumnLeft[1].size"
              :type="buttonColumnLeft[1].type">
          </base-button>
        </div><div class="column is-narrow">
          <base-button
              :label="buttonColumnCenter[0].label"
              :icon="buttonColumnCenter[0].icon"
              :size="buttonColumnCenter[0].size"
              :type="buttonColumnCenter[0].type">
          </base-button>
          <br/>
          <base-button
              :label="buttonColumnCenter[1].label"
              :icon="buttonColumnCenter[1].icon"
              :size="buttonColumnCenter[1].size"
              :type="buttonColumnCenter[1].type">
          </base-button>
        </div>
        <div class="column is-narrow">
          <base-button
              :label="buttonColumnRight[0].label"
              :icon="buttonColumnRight[0].icon"
              :size="buttonColumnRight[0].size"
              :type="buttonColumnRight[0].type">
          </base-button>
          <br/>
          <base-button
              :label="buttonColumnRight[1].label"
              :icon="buttonColumnRight[1].icon"
              :size="buttonColumnRight[1].size"
              :type="buttonColumnRight[1].type">
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base-button";
export default {
name: "button-container",
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
      return [this.buttonData[2],this.buttonData[5]]
    }
  }
}
</script>

<style scoped>
.button-margin {
  padding: 0.5rem 2.5rem;
  margin-bottom: 0.15rem;
  margin-top: 0.15rem;
}
</style>
