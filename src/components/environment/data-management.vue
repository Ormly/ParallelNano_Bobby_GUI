<!--suppress ALL -->
<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <base-data-display
                :icon-name="temperatureIcon.icon"
                :icon-size="temperatureIcon.size"
                data-type="temperature"
                :current-data-state="rawEnvironmentData.temperature">
            </base-data-display>
            <br/>
            <base-data-display
                :icon-name="humidityIcon.icon"
                :icon-size="humidityIcon.size"
                data-type="humidity"
                :current-data-state="rawEnvironmentData.humidity">
            </base-data-display>
        </div>
    </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const environmentAPI = APIFactory.get("environment");

import BaseDataDisplay from "@/components/base-components/base-data-display";
export default {
name: "data-management",
    components: {BaseDataDisplay},
    created() {
      this.fetchEnvironmentData()
      this.pollAPI()
    },
    data() {
        return {
            polling: null,
            rawEnvironmentData: {},
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
    methods: {
      async fetchEnvironmentData() {
        const { data } = await environmentAPI.getEnvironmentData()
        this.rawEnvironmentData = data
      },
      pollAPI () {
        this.polling = setInterval(() => {
          this.fetchEnvironmentData()
        }, 3000)
      }
    },
    beforeDestroy() {
        clearInterval(this.polling)
    }
}
</script>

<style scoped>

</style>
