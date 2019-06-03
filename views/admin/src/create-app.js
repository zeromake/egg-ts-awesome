import Vue from "vue";
import createRouter from "./create-router";

export default function createApp() {
  const router = createRouter();

  const app = new Vue({
    router,
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <div id="app">
        <router-view/>
      </div>
    }
  });

  return {
      app,
      router,
  };
}
