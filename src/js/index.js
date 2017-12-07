// import Vue from 'vue';
import '../scss/style.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    msg: 'Welcome to Your Vue.js App bundled with Parcel!!'
  },
});

if (module.hot) {
  module.hot.accept();
}