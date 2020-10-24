<template>
<v-app-bar color="deep-purple accent-4" dense dark>
    <v-btn icon>
        <v-icon>mdi-image-search</v-icon>
    </v-btn>
    <v-toolbar-title>Images</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn v-if="!isLoggedIn" class="ma-2" color="info" @click="login">
        Login
    </v-btn>
    <div v-else>
        <div v-if="isMobile">
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item to="/">
                        <v-list-item-title>Gallery</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/upload-form">
                        <v-list-item-title>Upload</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <v-row v-else align="center" justify="end">
            <v-btn text to="/">
                Gallery
            </v-btn>
            <v-btn text to="/upload-form">
                Upload
            </v-btn>
            <v-btn class="ma-2" color="info" @click="logout">
                Logout
            </v-btn>
        </v-row>
    </div>
</v-app-bar>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "AppHeader",
    methods: {
        ...mapActions(["login", "logout"]),
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        isMobile() {
            return this.$vuetify.breakpoint.xs;
        },
    },
};
</script>

<style lang="scss" scoped></style>
