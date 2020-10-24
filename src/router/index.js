import Vue from "vue";
import VueRouter from "vue-router";

import AuthHandler from "../components/AuthHandler";
import ImageList from "../components/ImageList";
import UploadForm from "../components/UploadForm";

Vue.use(VueRouter);

const routes = [
  { path: "/oauth2/callback", component: AuthHandler },
  { path: "/", component: ImageList },
  { path: "/upload-form", component: UploadForm },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
