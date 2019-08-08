<template>
  <div>
    <div class="m-app newItem" style="background:#EEEEEE;">
      <!-- ------------头部开始------------ -->
      <header>
        <div class="m-hd">
          <div class="m-topBar">
            <div class="bd">
              <div class="row">
                <a href="javascript:;" class="u-icon u-icon-home"></a>
                <a href="javascript:;">
                  <i class="logo u-icon u-icon-logo"></i>
                </a>
                <div class="right">
                  <a href="javascript:;" class="search">
                    <i class="u-icon u-icon-search1"></i>
                  </a>
                  <a href="javascript:;" class="cart">
                    <i class="u-icon u-icon-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- ------------头部结束------------ -->

      <!-- ------------banner开始---------- -->
      <div class="banner">
        <div class="m-noticesWrap">
          <div class="m-notices">
            <swiper class="banner_list" :options="swiperOption" v-if="loop.length>1">
              <swiper-slide class="banner_item" v-for="(item, index) in loop" :key="index">
                <span class="innerContent">{{item}}</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <!-- ------------banner结束---------- -->

      <!-- -------------标题开始------------ -->
      <div class="m-sticky m-sticky-mounted" style="top:0;">
          <div class="placeholder" style="height: 99px;"></div>
          <div id="inner" class="inner" style="top: 0px;">
              <div id="praise" class="m-commonRankTab praise">
                  <div class="tabWrap">
                      <!-- 左边 -->
                      <div class="m-tabs   scroll">
                          <header v-if="a==0">
                              <div class="inner" style="position:relative;height:100%;width:100%;overflow:scroll;">
                                  <div class="list" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                                      <div class="tab" v-for="(tab,index) in tabsName" :key='index' :class="{active:index==num}">
                                          <span class="txt"  @click="tabsSwitchs(index)">{{tab.name}}</span>
                                      </div>
                                  </div>
                              </div>
                          </header>
                          <div class="tabAlter" v-if="b==0">全部类目</div>
                      </div>
                      <!-- 右边 -->
                      <div class="toggleWrap">
                          <div class="linear"></div>
                          <div @click="toggle" v-bind:class="flag?'toggle':'toggle toggleActive'">
                              <div class="icon"></div>
                          </div>
                      </div>
                      <!-- 下面的选项    一开始是隐藏的 -->
                      <div class="moreCate" v-if="b==false">
                        <div class="cateTag" v-for="(tab,index) in tabsName" :key='index' @click="tabsSwitch(index)" :class="{cateTagActive:index==num}">{{tab.name}}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- -------------标题结束------------ -->

      <!-- -------------内容开始------------ -->
      <div class="itemList">
        <div class="commonRankItem" v-for="item in tabIndex" :key='item.id'>
          <a href="javascript:;">
            <div class="itemWrap">
              <!-- 左边 -->
              <div class="imgWrap f-pr">
                <div class="topIcon f-pa topIcon-l">
                  <div class="m-lazyload  m-lazyload-loaded">
                    <img class="swiper-lazy" :src="item.imgpai" alt="" style="display: inline;">
                  </div>
                  <div class="topOrder">{{item.id}}</div>
                </div>
                <div class="m-lazyload  m-lazyload-loaded">
                  <img class="swiper-lazy" :src="item.image" alt="" style="display: inline;">
                </div>
              </div>
              <!-- 右边 -->
              <div class="infoWrap">
                <div class="tagWraper new">
                  <span class=" tag-status-new gradientPrice">{{item.span}}</span>
                </div>
                <div class="name f-fz32">{{item.title}}</div>
                <div class="comment f-fz28">{{item.jiang}}</div>
                <div class="priceWrap ">
                  <span class="rPrice f-fz32">
                    <span>¥</span><span>{{item.newprice}}</span>
                  </span><span class="cPricee f-fz24">
                    <span>¥</span><span>{{item.oldprice}}</span>
                  </span>
                  <div class="saleCart">马上抢</div>
                </div>
              </div>
            </div>
          </a>
          <div>
            <div class="commentWrap f-pr">
              <div class="avatar">
                <div class="m-lazyload  m-lazyload-loaded">
                  <img class="swiper-lazy" :src="item.headimg" alt="" style="display: inline;">
                </div>
              </div>
              <div class="comment">
                <span class="content">{{item.detail}}</span>
              </div>
              <i class="arrowWrap u-icon u-icon-arrow-right4"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- -------------内容结束------------ -->

      <!-- -------------更多榜单开始------------ -->
      <div class="m-moreCategories">
        <div class="header">更多榜单</div>
        <ul class="moreCategoriesList">
          <div class="moreCategoriesItem bg" v-for="item in contents" :key="item.index">
            <div class="moreCategoriesInfo">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.inter}}</div>
            </div>
            <div class="m-lazyload  m-lazyload-loaded">
              <img class="swiper-lazy" style="display: inline;" :src=item.img alt="">
            </div>
          </div>
        </ul>
      </div>
      <!-- -------------更多榜单结束------------ -->

      <!-- -------------底部开始---------------- -->
      <div class="m-itemRankTab">
        <ul class="container">
          <li class="tab tab-sale tab-active">
            <i class="u-icon u-icon-rank-sale-active"></i>
            <span class="name"><router-link to='/saleRank'>热销榜</router-link></span>
          </li>
          <li class="tab tab-preferenti">
            <i class="u-icon u-icon-rank-preferenti"></i>
            <span class="name"><router-link to='/preferentiRank'>特惠榜</router-link></span>
          </li>
          <li class="tab tab-newItem">
            <i class="u-icon u-icon-rank-newItem"></i>
            <span class="name"><router-link to='/newItemRank'>新品榜</router-link></span>
          </li>
          <li class="tab tab-praise">
            <i class="u-icon u-icon-rank-praise"></i>
            <span class="name"><router-link to='/praiseRank'>好评榜</router-link></span>
          </li>
        </ul>
      </div>
      <!-- -------------底部结束---------------- -->
    </div>
  </div>
</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      //定义一个变量,接收后台传过来的图片
      loop: [
        "驭****3刚刚下单啦！",
        "破*w刚刚下单啦！",
        "3***0刚刚下单啦！",
        "A*间刚刚下单啦！",
        "介*1刚刚下单啦！",
        "蓬*****饰刚刚下单啦！",
        "普*****a刚刚下单啦！",
        "0*****痴刚刚下单啦！",
        "0*****a刚刚下单啦！"
      ],

      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        pagination: {
          el: ".swiper-pagination"
        },
        direction: "vertical",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true,
        observeParents: true,
        // onTransitionStart(swiper){
        //   console.log(swiper)
        // }
        slidesPerView: 1,
        spaceBetween: 0, //左右间隔
        // slidesPerGroup: 3,
        // grabCursor: true,//鼠标光标
        autoplay: {
          delay: 3000, //秒
          stopOnLastSlide: false,
          disableOnInteraction: false //滑动不会失效
        },
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      content:'',
      flag:true,
      a:false,
      b:true,
      contents:'',
      num:0,
      tab:'haopingbang',
      tabIndex:"",
      tabsName: [{
                name: "全部",
            }, {
                name: "居家生活",
            }, {
                name: "服饰鞋包",
            },{
                name: "美食酒水",
            },{
                name: "个护清洁",
            },{
                name: "母婴亲子",
            },{
                name: "运动旅行",
            },{
                name: "数码家电",
            },{
                name: "全球特色",
            }],
    };
  },
  methods:{
    toggle(){
      this.flag=!this.flag
      this.a=!this.a
      this.b=!this.b
    },
    tabsSwitch(index){
      this.num=index;
      console.log(this.num,index,this)
      this.flag=!this.flag
      this.a=!this.a
      this.b=!this.b
      this.tabIndex=this.content[(this.tab)+index].result
    },
    tabsSwitchs(index){
      this.num=index;
      localStorage.setItem('index',this.num)
      // console.log(this.num,index,this)
      this.tabIndex=this.content[(this.tab)+index].result
    },
    handleScroll(){
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
        // console.log(scrollTop)
        if(scrollTop>350){
          // console.log(111111111111)
          var inner=document.getElementById('inner')
          inner.style.top=87+'px' 
          inner.style.position='fixed'
          inner.style.width='100%'
          var praise=document.getElementById('praise')
          praise.style.width='100%'
          praise.style.borderRadius=0
        }else{
          var inner=document.getElementById('inner')
          inner.style.top=0 
          inner.style.position='absolute'
          var praise=document.getElementById('praise')
          praise.style.width='9.46667rem'
          praise.style.borderRadius='.21333rem .21333rem 0 0'
        }
    }
  },
  mounted(){
        // 快捷方式
        // Axios.get('').then((res)=>{
        //     this.content=res.data
        // })
        this.$http.get('../../static/js/saleRank.json').then((res)=>{
          // console.log(localStorage.getItem('index'))
          var ly=localStorage.getItem('index')
            this.content=res.data.data
            this.tabIndex=res.data.data["haopingbang0"].result
            // console.log(this.content,res.data.data["haopingbang"+ly].result)
            this.contents=res.data.datalist.gengduobangdan.result
            
        })
        // this.$http.post('https://www.easy-mock.com/mock/5cd9125b756d7373c032d66f/example/news').then((res)=>{
        //     this.content=res.data
        // })
        // 综合性
        // this.$http({
        //     url:'https://www.easy-mock.com/mock/5d41324c8fcf20602fa04931/wangyi/index',
        //     method:'post',
        //     // 如果是get方式传输数据则需要params 反之如果是post则用data
        //     // params:{

        //     // }
        //     data:{

        //     }
        // }).then((res=>{
        //     console.log(res.data.data.haopingbang.result)
        //     this.content=res.data.data.haopingbang.result
        // }))
        window.addEventListener('scroll',this.handleScroll,true)    //监听(绑定)滚动条
    },
    destroyed:function(){
      window.removeEventListener('scroll',this.handleScroll)    //  离开页面清除（移除）滚轮滚动事件
    }
}
</script>


<style scoped>

@import url("../../static/css/saleRank.css");

</style>
