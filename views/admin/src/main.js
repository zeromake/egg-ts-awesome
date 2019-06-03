import Vue from 'vue'
import createApp from './create-app';

Vue.config.productionTip = false

const { app } = createApp();

app.$mount('#app');
