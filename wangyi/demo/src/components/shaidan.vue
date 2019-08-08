<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="header">
      <div class="header-top" v-show="hide">
        <a href="javascript:;" class="psc-d-close" @click="close"></a>
        <div class="psc-d-logo"></div>
        <p class="psc-d-txt1">前往APP领1000元新用户现金礼包</p>
        <p class="psc-d-txt2">网易自营 品质生活</p>
        <a href="javascript:;" class="psc-d-btn">打开APP</a>
      </div>
      <div class="psc-m-topbar">
        <div class="psc-row">
          <div class="psc-m-hamburger">
            <a href="javascript:;" class="psc-u-nav-link">
              <i class="psc-icon psc-icon-house"></i>
            </a>
          </div>
          <div class="m-head-tab">
            <a href="javascript:;" class="item active">发现</a>
            <a href="javascript:;" class="item">甄选家</a>
          </div>
          <!---->
          <div class="psc-m-right">
            <a href="javascript:;" class="psc-u-nav-link psc-u-link-cart">
              <i class="psc-icon psc-icon-cart">
                <span class="psc-cart-num J_psc_cart_num" style="display: none;"></span>
              </i>
            </a>
            <a href="javascript:;" class="psc-u-nav-link psc-u-link-search">
              <i class="psc-icon psc-icon-search"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- 中间选项条 -->
      <div class="m-main-tab">
        <div class="u-scroll-wrapper">
          <a
            :href="'/#/child/'+b"
            :class="b==inn?'item active':'item'"
            v-for="(a,b) in fenlei"
            :key="b"
            @click="get(b)"
          >{{a}}</a>
        </div>
      </div>
    </div>
    

    <!-- 中间内容 -->
    <div class="m-middle">
      <router-view></router-view>
    </div>
    <!-- 底部选项 -->
    <nav class="m-nav-tab">
      <a href="javascript:;" class="item">
        <i class="u-icon u-ico-index"></i>
        <span class="txt">首页</span>
      </a>
      <a href="javascript:;" class="item">
        <i class="u-icon u-ico-cate"></i>
        <span class="txt">分类</span>
      </a>
      <a href="javascript:;" class="item active">
        <i class="u-icon u-ico-topic"></i>
        <span class="txt">识物</span>
      </a>
      <a href="javascript:;" class="item">
        <i class="u-icon u-ico-cart"></i>
        <span class="txt">购物车</span>
      </a>
      <a href="javascript:;" class="item">
        <i class="u-icon u-ico-ucenter"></i>
        <span class="txt">个人</span>
      </a>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      inn: "",
      hide: "true",
      fenlei: [
        "盛夏特别版",
        "推荐",
        "好货内部价",
        "回购榜",
        "晒单",
        "开发者日记",
        "达人",
        "HOME"
      ]
    };
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件

    window.noCart = 1;
    window.noTopbtn = 1;
    !(function() {
      function a() {
        if (parseInt(document.documentElement.clientWidth) > 768) {
          document.documentElement.style.fontSize =
            (((768 / 750) * 10) / 16) * 1000 + "%";
        } else {
          document.documentElement.style.fontSize =
            (((document.documentElement.clientWidth / 750) * 10) / 16) * 1000 +
            "%";
        }
      }
      var b = null;
      window.addEventListener(
        "resize",
        function() {
          clearTimeout(b);
          b = setTimeout(a, 300);
        },
        !1
      );
      a();
    })(window);
  },
  methods: {
    close() {
      this.hide = false;
    },
    get(b) {
      this.inn = b;
    },
    handleScroll() {
      var a = document.documentElement.scrollTop;
      var Box = document.getElementsByClassName("header")[0];
      var Box1 = document.getElementsByClassName("m-main-tab")[0];
      var Box2 = document.getElementsByClassName("m-nav-tab")[0]
      var b = Box.clientHeight;
      var c = Box2.clientHeight;
      Box.style.top = a + "px";
      Box1.style.top = -(a + b) + "px";
    }
  }
};
</script>

<style>
@import url("../../static/shaidan.css");
</style>
