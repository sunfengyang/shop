import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入所有vant插件（不推荐）
//import Vant from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Vant);

//按需引入插件（更为推荐）
import {NavBar,Icon,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Tab,Tabs,CellGroup,Field} from 'vant';
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(CellGroup).use(Field);

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
