import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//存储数据
    userInfo:{
      userName:'未登录'
    }
  },
  getters:{//经常用于数据筛选，多个数据相关计算

  },
  mutations: {//方法，改变state数据的唯一途径，不能处理异步操作
    changeLogin(state,status){
      state.userInfo = status;
    }
  },
  actions: {//提交mutations改变状态，可以包含异步操作,不可以直接改变state
    loginAction({commit},user){
      commit('changeLogin',user); // user对应status
    }
  }
})
