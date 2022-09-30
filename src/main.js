import { createApp } from 'vue'
import LoadScript from 'vue-plugin-load-script'
import { store } from './store'
import App from './App.vue'
import router from './router'
import VueNotifications from 'vue-notifications'
import swal from 'sweetalert' // https://github.com/t4t5/sweetalert

function toast ({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return swal(title, message, type)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

createApp(App).use(store).use(router).use(LoadScript).use(VueNotifications, options).mount('#app')
