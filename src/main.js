import { createApp } from "vue";
import { createPinia } from "pinia";
import VueResource from "vue-resource";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueResource);
app.http.options.root = "https://stock-trade-eb949.firebaseio.com/";

app.use(createPinia());
app.use(router);

app.mount("#app");
