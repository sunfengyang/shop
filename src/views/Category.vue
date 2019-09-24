<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li v-for="(item,index) in types" :key="index">
              {{item.typeName}}
            </li>
          </ul>
        </van-col>
        <van-col span="18" class="container">

        </van-col>
      </van-row>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'

export default {
  data(){
    return {
      types:[],
    }
  },
  created(){
    axios({
      url:url.getTypes,
    }).then(res=>{
      console.log(res);
      this.types = res.data;
    }).catch(err=>{
      console.log(err)
    });
  }
}
</script>

<style lang="scss">
.nav{
  background-color: #eee;
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
}
</style>
