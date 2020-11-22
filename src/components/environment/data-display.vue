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
                        <h1 class="is-size-2">{{currentDataState}} {{parameterSign}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*
 * Displays the relevant environmental parameters to the user.
 */
export default {
name: "data-display",
    props: {
        iconName: String,
        iconSize: String,
        currentDataState: Number,
        parameterSign: String
    }
}
</script>

<style scoped>

</style>
