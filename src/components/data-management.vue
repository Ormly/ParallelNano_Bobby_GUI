<template>
    <div>
        <base-data-display
            :icon-name="temperatureData.icon"
            :icon-size="temperatureData.size">
        </base-data-display>
        <br/>
        <base-data-display
            :icon-name="humidityData.icon"
            :icon-size="humidityData.size">
        </base-data-display></div>
</template>

<script>
import BaseDataDisplay from "@/components/base-data-display";
export default {
name: "data-management",
    components: {BaseDataDisplay},
    data() {
        return {
            temperatureData: {
                'icon': 'thermometer',
                'size': 'is-large'
            },
            humidityData: {
                'icon': 'water-percent',
                'size': 'is-large'
            }
        }
    }
}
</script>

<style scoped>

</style>