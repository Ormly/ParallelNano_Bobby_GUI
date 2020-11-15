<template>
    <div class="container">
        <div class="box">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <b-icon
                            :icon="iconName"
                            :size="iconSize">
                        </b-icon>
                        <h1 class="is-size-2">{{display}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "base-data-display",
    mounted() {
      this.setDisplay();
    },
    updated() {
      this.setDisplay();
    },
  props: {
        iconName: String,
        iconSize: String,
        currentDataState: Number,
        dataType: String,
        display: String
    },
    methods: {
      setDisplay() {
        let temp = '' + this.currentDataState;
        this.dataType.localeCompare("humidity") ? this.display = temp + ' °C' : this.display = temp + ' %';
      }
    }
}
</script>

<style scoped>

</style>
