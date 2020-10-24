<template>
<v-container>
    <v-row align="center" justify="center" class="upload-form">
        <v-file-input :loading="getStatus" :disabled="getStatus" accept="image/*" v-model="files" color="deep-purple accent-4" counter label="File input" multiple placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">
            <template v-slot:selection="{ index, text }">
                <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                    {{ text }}
                </v-chip>

                <span v-else-if="index === 2" class="overline grey--text text--darken-3 mx-2">
                    +{{ files.length - 2 }} File(s)
                </span>
            </template>
        </v-file-input>
    </v-row>
    <v-row justify="center">
        <v-btn v-if="files.length > 0" class="ma-2" color="info" width="50%" @click="uploadImages(files)" :disabled="getStatus">
            {{ getStatus ? "Uploading..." : "Upload" }}
        </v-btn>
    </v-row>
</v-container>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "UploadForm",
    data: () => ({
        files: [],
    }),
    computed: mapGetters(["getStatus"]),
    methods: {
        ...mapActions(["uploadImages"]),
    },
};
</script>

<style scoped>
.upload-form {
    padding: 20px;
}
</style>
