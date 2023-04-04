import Vue from "vue";
import App from "./App.vue";
import { GOOGLE_MAPS_API_KEY } from "./config";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_MAPS_API_KEY,
    libraries: "places",
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
