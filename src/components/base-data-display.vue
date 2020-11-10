<template>
    <div class="container">
        <div class="box">
            <b-icon
                :icon="icon-name"
                :size="icon-size">
            </b-icon>
        </div>
    </div>
</template>

<script>
export default {
name: "base-data-display",
    props: {
        'icon-name': String,
        'icon-size': String,
        'current-value': Number
    },
    methods: {

    }
}
</script>

<style scoped>

</style>