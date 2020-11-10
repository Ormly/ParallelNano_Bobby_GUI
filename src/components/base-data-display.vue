<template>
    <div class="container">
        <div class="box">
            <b-icon
                :icon="iconName"
                :size="iconSize">
            </b-icon>
        </div>
    </div>
</template>

<script>
export default {
name: "base-data-display",
    props: {
        iconName: String,
        iconSize: String
    }
}
</script>

<style scoped>

</style>