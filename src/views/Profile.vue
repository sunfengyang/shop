<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="registPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="registHandler">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@service.config.js';


export default {
  data(){
    return{
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:'',
    }
  },
  methods:{
    registHandler(){
      axios({
        url:'url.registUser',
        method:'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword
        }
      }).then(res=>{

      }).catch(err=>{

      });
    },
  }
}
</script>

<style lang="scss">

</style>
