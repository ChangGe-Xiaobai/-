<template>
  <div :class="flag?'childwrap':'newwrap'">
    <div class="ggbox" v-show="hide">
      <img src="https://yanxuan.nosdn.127.net/15538481219197847.jpeg" alt />
      <img src="https://yanxuan.nosdn.127.net/15538481219467848.jpeg" alt />
      <img src="https://yanxuan.nosdn.127.net/15538481223127849.jpeg" alt />
    </div>
    <div class="contentbox">
      <div class="contentbox-center" :style="sets?'':'background-color:white'">
          <!-- //内容 -->
        <div class="contentbox-center-box" :style="sets?'margin:auto':'margin:0'">
          <div class="box-title" v-show="sets">
            <div class="m-D301A6-type">
              严选
              <span class="J-D301A6-tag">回购</span>榜
            </div>
            <img src="https://yanxuan.nosdn.127.net/15428766047261440.png" class="m-D301A6-subtlt" />
          </div>
          <div class="con">
          <!-- 请求 -->
            <div :class="sets?'cons':'cons1'" v-for="(item,index) in lists" :key="index">
              <div :class="index>2?'con-title m-D301A6-banner4':'con-title m-D301A6-banner'+(index+1)" v-show="sets">
                <div class="m-D301A6-rank m-D301A6-rank1">{{index+1}}</div>
                <div class="m-D301A6-bannerTlt">{{item.title}}</div>
                <div class="m-D301A6-bannerDesc">{{item.con}}</div>
              </div>
              <div class="con-conn">
                <div class="con-conn-center">
                  <div :class="sets?'con-conn-centerL':'con-conn-centerL1'">
                    <img :src="item.pic" style="height:100%" alt />
                    
                  </div>
                  <div class="con-conn-centerR">
                    <p class="m-D301A6-name m-D301A6-ellipsis">{{item.stitle1}}</p>
                    <p class="m-D301A6-des m-D301A6-ellipsis">{{item.stitle2}}</p>
                    <div class="u-D301A6-prdtTags" v-show="hide">
                      <span class="u-D301A6-itemTag app">{{item.stitle3}}</span>
                    </div>
                    <div class="m-D301A6-rate first" v-show="hide">
                      <span>回购指数：</span>
                      <div class="m-D301A6-star">
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766028331434.png" />
                      </div>
                    </div>
                    <div class="m-D301A6-rate second" v-show="hide">
                      <span>口碑指数：</span>
                      <div class="m-D301A6-star">
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766042391438.png" />
                        <img src="https://yanxuan.nosdn.127.net/15428766028331434.png" />
                      </div>
                    </div>
                    <p class="m-D301A6-price">
                        <span class="u-D301A6-offPrice"><span class="u-doc">¥</span>{{item.new}}</span>
                        <span class="u-D301A6-unitPrice" v-show="hide">{{item.old}}</span>
                        <a class="J_D301A6_cart u-D301A6-cart" href="javascript:;" data-itemid="1318002" v-show="hide"></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <!--  -->
          
          </div>
        </div>
      </div>
    </div>
        <input  class="products-submit" @click="set()" v-show="aaa">
  </div>
</template>

<script>
export default {
    name:"child1",
    data() {
        return{
            content:"",
            lists:[],
            sets : true,
            flag:true,
            hide:true,
            aaa:false
        }
    },
    methods: {
      set(){
        this.flag=false
        this.hide=false
        this.sets = false
        var box = document.getElementsByClassName("products-submit")[0]
        box.remove()
        document.documentElement.scrollTop = 0;
      },
      handleScroll(){
        var a = document.documentElement.scrollTop;
        console.log(a)
        if(a>500){
          this.aaa = true;
        }else{
          this.aaa = false;
        }
      }
    },
    mounted(){
        this.$http({
          url:"../../static/shuju.json",
          method:"get",
          params:{}
        }).then((res)=>{
          // console.log(res.data.data.huigou)
          this.lists=res.data.data.huigou.list
          console.log(this.lists)
        }).catch((error)=>{
          console.log(error)
        })
       window.addEventListener("scroll", this.handleScroll, true);
    },
   

};
</script>

<style scoped>
@import url("../../static/child");
</style>
