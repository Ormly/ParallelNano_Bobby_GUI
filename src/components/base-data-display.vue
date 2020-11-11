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
                        <strong>{{currentDataState}}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "base-data-display",
    props: {
        iconName: String,
        iconSize: String,
        currentDataState: String
    }
}
</script>

<style scoped>

</style>