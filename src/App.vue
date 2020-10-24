<template>
<v-app>
    <v-main>
        <v-container fluid>
            <v-row>
                <AppHeader></AppHeader>
            </v-row>
            <router-view></router-view>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
    name: "App",
    components: {
        AppHeader,
    },
    data: () => ({
        //
    }),
};
</script>

<style scoped></style>
