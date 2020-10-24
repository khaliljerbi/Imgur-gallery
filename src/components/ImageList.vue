<template>
<v-row align="center" justify="center" class="image-container">
    <ImageItem v-for="image in allImages" :image="image" :key="image.id"></ImageItem>
</v-row>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";

// components
import ImageItem from "./ImageItem";

export default {
    name: "ImageList",
    components: {
        ImageItem,
    },
    methods: mapActions(["fetchImages"]),
    computed: mapGetters(["allImages"]),
    created() {
        this.fetchImages();
    },
};
</script>

<style lang="scss" scoped>
.image-container {
    padding: 20px;
}
</style>
