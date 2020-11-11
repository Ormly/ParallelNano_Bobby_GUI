<template>
    <div>
        <base-data-display
            :icon-name="temperatureIcon.icon"
            :icon-size="temperatureIcon.size"
            :current-data-state="temperatureData">
        </base-data-display>
        <br/>
        <base-data-display
            :icon-name="humidityIcon.icon"
            :icon-size="humidityIcon.size"
            :current-data-state="humidityData">
        </base-data-display>
    </div>
</template>

<script>
import BaseDataDisplay from "@/components/base-data-display";
export default {
name: "data-management",
    components: {BaseDataDisplay},
    data() {
        return {
            temperatureIcon: {
                'icon': 'thermometer',
                'size': 'is-large'
            },
            humidityIcon: {
                'icon': 'water-percent',
                'size': 'is-large'
            },
        }
    },
    props: {
        temperatureData: String,
        humidityData: String
    }
}
</script>

<style scoped>

</style>