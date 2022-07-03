import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyCDmjT6gCrVF2wJQoQ6ymbPmU5ZZ0D60Ss",
  authDomain: "crm-project-11b27.firebaseapp.com",
  projectId: "crm-project-11b27",
  storageBucket: "crm-project-11b27.appspot.com",
  messagingSenderId: "728741716332",
  appId: "1:728741716332:web:854a62e60365645ad05349",
  measurementId: "G-WG7MFV2291"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
}
})


