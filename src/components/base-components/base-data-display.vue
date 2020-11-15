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
    data() {
      return {
        display: String
      }
    },
    props: {
        iconName: String,
        iconSize: String,
        currentDataState: Number,
        dataType: String
    },
    methods: {
      setDisplay() {
        this.dataType.localeCompare("humidity") ? this.display = this.currentDataState + ' °C' : this.display = this.currentDataState + ' %';
      }
    }
}
</script>

<style scoped>

</style>
