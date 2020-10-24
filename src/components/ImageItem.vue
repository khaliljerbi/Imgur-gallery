<template>
<v-col class="d-flex child-flex" md="4" sm="12">
    <v-img :src="image.link" width="250px" height="250px" class="grey lighten-2"></v-img>
</v-col>
</template>

<script>
export default {
    name: "ImageItem",
    props: {
        image: Object,
    },
};
</script>

<style lang="scss" scoped></style>
