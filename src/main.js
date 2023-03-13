import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

let app;
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
