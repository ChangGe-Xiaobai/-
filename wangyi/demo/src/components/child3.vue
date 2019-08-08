<template>
  <div class="wrap">
    <!-- top -->
    <div data-v-26c33bf4 weex-type="div" class="m-wrapper weex-ct weex-div">
      <div data-v-26c33bf4 weex-type="div" class="m-titleWrapper weex-ct weex-div">
        <p data-v-26c33bf4 weex-type="text" class="m-partTlt weex-el weex-text">让生活更好的N种方法</p>
      </div>
      <div data-v-26c33bf4 weex-type="div" class="m-recommendArea weex-ct weex-div">
        <figure
          data-v-26c33bf4
          resize="cover"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAa5JREFUOBHtU79Lw0AUbtKLydgKuungkqZLUXSWgGsFF90UnOvuJFIoIqij4N8gguIiOGsVpLUJLf0BOhachSppWr8LvuMSa6a6eRDer+99793LOyURc1qt1pLv+6lsNnsbAwtCjuOkGWN5z/MuWBQ8HA4ZyPZUVd2CPgt5CsyvpM1mcxHxErA2sBpIb0KklUplqtPpnCuKsgxQtN4Pu9FobILoDFgDOSIuSGu12rRhGE8AzIhojILiu4PB4GBUcZXydF0vQReEqPyJpBNcp0gYkpjfHMj2yf6Wz8Cv5nK5t6DTer0+j2tsU1UQ+gBsWJZ1FUkMTDRwBKxOMeh33W53xbbtD+4LOk0mkwUERNcgvM5kMiMJXdflt1kjQi6xIQUi5DYRWdyQzr2kh1SsTQiLZt6xcq4MIlJTdmqaVpbtiB7CIvbIxyVjWLVaTcE5KTv7/f56u93Ocx86KZumeUlxjIr/JDIT+BdpYA/J0ev1igwAjRyS3KFESL78ghTznkATAor4Agz+0Tmm65NjLPKfdCxjDJH8yUwZ1sPD9xAqJRmIvUomf5IveBxxeO8LApO5RtUTsYIAAAAASUVORK5CYII="
          weex-type="image"
          class="m-commaLeft weex-el weex-image"
          style="background-size: cover; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAa5JREFUOBHtU79Lw0AUbtKLydgKuungkqZLUXSWgGsFF90UnOvuJFIoIqij4N8gguIiOGsVpLUJLf0BOhachSppWr8LvuMSa6a6eRDer+99793LOyURc1qt1pLv+6lsNnsbAwtCjuOkGWN5z/MuWBQ8HA4ZyPZUVd2CPgt5CsyvpM1mcxHxErA2sBpIb0KklUplqtPpnCuKsgxQtN4Pu9FobILoDFgDOSIuSGu12rRhGE8AzIhojILiu4PB4GBUcZXydF0vQReEqPyJpBNcp0gYkpjfHMj2yf6Wz8Cv5nK5t6DTer0+j2tsU1UQ+gBsWJZ1FUkMTDRwBKxOMeh33W53xbbtD+4LOk0mkwUERNcgvM5kMiMJXdflt1kjQi6xIQUi5DYRWdyQzr2kh1SsTQiLZt6xcq4MIlJTdmqaVpbtiB7CIvbIxyVjWLVaTcE5KTv7/f56u93Ocx86KZumeUlxjIr/JDIT+BdpYA/J0ev1igwAjRyS3KFESL78ghTznkATAor4Agz+0Tmm65NjLPKfdCxjDJH8yUwZ1sPD9xAqJRmIvUomf5IveBxxeO8LApO5RtUTsYIAAAAASUVORK5CYII=&quot;);"
        ></figure>
        <p data-v-26c33bf4 weex-type="text" class="m-word weex-el weex-text">夏日清凉好物</p>
        <figure
          data-v-26c33bf4
          resize="cover"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAbpJREFUOBHtVD1Lw1AUbZLXWklBnBx0aulXFgcnRXDwByj6B3QRdFEXxcVBl+Lk2D8guFT9AQpCFZxEQgoxySiOjkJjmnhe7A0vz3armw/CPefck3vfF0/pdDoFVVVPMsPHY71eb1HacZy1Xq+3SFyOYRges263O67r+r6cJB5F0RhwUhQ/LWMSO5SXo+/7DVUWR8H/i45iF9M1/mRPmaIoX+jTFnoVgaeJa5oWEuYR3MO1iv2IGq7XgpjP5/OhIgoc27Z9jUarpOOeHtZqtTPiYrQsazabzb6QBu9ntVot/Fo+Os+TqR9fJZ5QxljKi8k4+KJUUdM0i+g2lfz1A2yJJxRbkSqKf+MJsMQBkMvljkSOrs+VSsUVNcJ4MwwUWSHOI/yXPMZFXdedwaafgm9wkQZmsgtj6qBQSPE8bx3+c+AJ8gLfYe9vOGdY8iQED5g/HMmAdlEqlR4SoQ8wgQZyB6IO7qPJHmlqEAQMolywiVPcJJMY8ezpIkexd6xoyTAMi/TUQaH4B0xbWMY2ls3v79CBfITkLfxz5XL5STTGlx/Fmki28BjfwxyIhgHYhIfv9RUO8W1APvMNUkiynjpNcYQAAAAASUVORK5CYII="
          weex-type="image"
          class="m-commaRight weex-el weex-image"
          style="background-size: cover; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAbpJREFUOBHtVD1Lw1AUbZLXWklBnBx0aulXFgcnRXDwByj6B3QRdFEXxcVBl+Lk2D8guFT9AQpCFZxEQgoxySiOjkJjmnhe7A0vz3armw/CPefck3vfF0/pdDoFVVVPMsPHY71eb1HacZy1Xq+3SFyOYRges263O67r+r6cJB5F0RhwUhQ/LWMSO5SXo+/7DVUWR8H/i45iF9M1/mRPmaIoX+jTFnoVgaeJa5oWEuYR3MO1iv2IGq7XgpjP5/OhIgoc27Z9jUarpOOeHtZqtTPiYrQsazabzb6QBu9ntVot/Fo+Os+TqR9fJZ5QxljKi8k4+KJUUdM0i+g2lfz1A2yJJxRbkSqKf+MJsMQBkMvljkSOrs+VSsUVNcJ4MwwUWSHOI/yXPMZFXdedwaafgm9wkQZmsgtj6qBQSPE8bx3+c+AJ8gLfYe9vOGdY8iQED5g/HMmAdlEqlR4SoQ8wgQZyB6IO7qPJHmlqEAQMolywiVPcJJMY8ezpIkexd6xoyTAMi/TUQaH4B0xbWMY2ls3v79CBfITkLfxz5XL5STTGlx/Fmki28BjfwxyIhgHYhIfv9RUO8W1APvMNUkiynjpNcYQAAAAASUVORK5CYII=&quot;);"
        ></figure>
      </div>
      <main
        data-v-26c33bf4
        weex-type="scroller"
        class="weex-scroller weex-scroller-wrapper weex-ct weex-scroller-horizontal m-slider m-rec-slider"
        flex-direction="row"
      >
        <article class="weex-scroller-inner weex-ct">
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/35f5fce5983159493acd47662434c7d6.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover; background-image: url(&quot;https://yanxuan.nosdn.127.net/35f5fce5983159493acd47662434c7d6.jpg?imageView&amp;quality=70&amp;thumbnail=240y240&quot;);"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/efe8a64d9ca80994a1c53d8af1a2dba9.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover; background-image: url(&quot;https://yanxuan.nosdn.127.net/efe8a64d9ca80994a1c53d8af1a2dba9.jpg?imageView&amp;quality=70&amp;thumbnail=240y240&quot;);"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/d52f5ed1f8a72242b9a30f992a6bede7.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover; background-image: url(&quot;https://yanxuan.nosdn.127.net/d52f5ed1f8a72242b9a30f992a6bede7.jpg?imageView&amp;quality=70&amp;thumbnail=240y240&quot;);"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/2e10543839f7ed42b13b0f35b29a9524.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/2e10543839f7ed42b13b0f35b29a9524.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/4f5fc28a25333420cd243e77839a09b0.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/4f5fc28a25333420cd243e77839a09b0.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/72e88de9515c4b1d9587c8424c31a38b.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/72e88de9515c4b1d9587c8424c31a38b.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/2dc4f91b331d706bbb4c39f820883b93.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/2dc4f91b331d706bbb4c39f820883b93.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/92b9ddc97a1510d64f841fc64e2b7da0.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/92b9ddc97a1510d64f841fc64e2b7da0.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/97b291a6d0a5980369d55332df1aeec4.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/97b291a6d0a5980369d55332df1aeec4.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/27ebdf5ff55b38de18aa69147eecfa34.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/27ebdf5ff55b38de18aa69147eecfa34.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/c1647d792962971daa89937fe93da7fc.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/c1647d792962971daa89937fe93da7fc.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/6821dacda53bbfef6d1345c2fd71bfbd.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/6821dacda53bbfef6d1345c2fd71bfbd.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/34779996106fb4fbb2e44acf9bd811b8.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/34779996106fb4fbb2e44acf9bd811b8.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/e867a96b02bbcd924f6f0193155eee70.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/e867a96b02bbcd924f6f0193155eee70.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/33c26d0938b1280a5426b53fc643a91d.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/33c26d0938b1280a5426b53fc643a91d.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/28934272b994386b69a4cbc4b7eb5fc2.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/28934272b994386b69a4cbc4b7eb5fc2.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/85dea85a566a11bc7a8774f454927010.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/85dea85a566a11bc7a8774f454927010.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/79b95b66ff4360a30febadfe4d3ffc98.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/79b95b66ff4360a30febadfe4d3ffc98.jpg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
          <div
            data-v-26c33bf4
            weex-type="div"
            data-evt-click
            data-evt-panstart
            data-evt-panend
            class="m-look weex-ct weex-div"
          >
            <figure
              data-v-26c33bf4
              src="https://yanxuan.nosdn.127.net/f90f89fb292eecd760fbfa2cfc68436d.jpeg?imageView&amp;quality=70&amp;thumbnail=240y240"
              resize="cover"
              data-img-src="https://yanxuan.nosdn.127.net/f90f89fb292eecd760fbfa2cfc68436d.jpeg?imageView&amp;quality=70&amp;thumbnail=240y240"
              weex-type="image"
              class="m-image weex-el weex-image"
              style="background-size: cover;"
            ></figure>
            <!---->
          </div>
        </article>
      </main>
    </div>
    <!-- 内容 -->
    <div class="child3-con">
      <!-- 标题 -->
      <div class="m-titleWrapper">
        <p class="m-titleWrappercontitle">TA们的严选生活</p>
      </div>
      <!-- 选项 -->
      <div data-v-37617678 weex-type="div" class="m-tabWrapper weex-ct weex-div">
        <div data-v-37617678 weex-type="div" class="m-tab weex-ct weex-div">
          <div data-v-37617678 weex-type="div" class="m-tabItem weex-ct weex-div" v-for="(item,index) in list" :key="index">
            <p
              data-v-37617678
              data-type="1"
              weex-type="text"
              data-evt-click
              @click="get(index)"
              :class="indexx == index?'weex-el weex-text m-tabTxt m-tabTxt-active':'weex-el weex-text m-tabTxt '"
            >{{list[index]}}</p>
          </div>
          
        </div>
      </div>
      <!-- 内容 -->
      <div class="qiehuancon1">
        <div class="qiehuanconss">
          <div class="qiehuanconss-list">
            <div class="qiehuanconss-Left" v-for="(item,index) in lists" :key="index">
              <div class="qiehuanconss-Left-cons">
                  <div class="qiehuanconss-Left-cons-box">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <div class="YHxinxi">
                      <div class="YHxinxi-l">
                        <img src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png?imageView&quality=65&thumbnail=48x48" alt="">
                        <p>{{item.shu}}</p> 
                      </div>
                      <div class="YHxinxi-r">
                        <p>0</p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="">
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="qiehuanconss-list">
            <div class="qiehuanconss-Left" v-for="(item,index) in lists" :key="index">
              <div class="qiehuanconss-Left-cons">
                  <div class="qiehuanconss-Left-cons-box">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <div class="YHxinxi">
                      <div class="YHxinxi-l">
                        <img src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png?imageView&quality=65&thumbnail=48x48" alt="">
                        <p>{{item.shu}}</p> 
                      </div>
                      <div class="YHxinxi-r">
                        <p>0</p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="">
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //rem
    (function(win, lib) {
      var doc = win.document;
      var docEl = doc.documentElement;
      var metaEl = doc.querySelector('meta[name="viewport"]');
      var flexibleEl = doc.querySelector('meta[name="flexible"]');
      var dpr = 0;
      var scale = 0;
      var tid;
      var flexible = lib.flexible || (lib.flexible = {});
      if (metaEl) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var match = metaEl
          .getAttribute("content")
          .match(/initial\-scale=([\d\.]+)/);
        if (match) {
          scale = parseFloat(match[1]);
          dpr = parseInt(1 / scale);
        }
      } else {
        if (flexibleEl) {
          var content = flexibleEl.getAttribute("content");
          if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
              dpr = parseFloat(initialDpr[1]);
              scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
              dpr = parseFloat(maximumDpr[1]);
              scale = parseFloat((1 / dpr).toFixed(2));
            }
          }
        }
      }
      if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);

        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
          if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
            dpr = 3;
          } else {
            if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
              dpr = 2;
            } else {
              dpr = 1;
            }
          }
        } else {
          dpr = 1;
        }
        scale = 1 / dpr;
      }
      docEl.setAttribute("data-dpr", dpr);
      if (!metaEl) {
        metaEl = doc.createElement("meta");
        metaEl.setAttribute("name", "viewport");
        if (!!win.webPageScalable) {
          metaEl.setAttribute(
            "content",
            "initial-scale=" + scale + ", user-scalable=yes"
          );
        } else {
          metaEl.setAttribute(
            "content",
            "initial-scale=" +
              scale +
              ", maximum-scale=" +
              scale +
              ", minimum-scale=" +
              scale +
              ", user-scalable=no viewport-fit=cover"
          );
        }
        if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(metaEl);
        } else {
          var wrap = doc.createElement("div");
          wrap.appendChild(metaEl);
          doc.write(wrap.innerHTML);
        }
      }
      function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var ua = navigator.userAgent.toLowerCase();
        if (!/ipad.*yanxuan/.test(ua)) {
          if (width / dpr > 750) {
            width = 750 * dpr;
          }
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + "px";
        flexible.rem = win.rem = rem;
      }
      win.addEventListener(
        "resize",
        function() {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
        },
        false
      );
      win.addEventListener(
        "pageshow",
        function(e) {
          if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
          }
        },
        false
      );
      if (doc.readyState === "complete") {
        doc.body.style.fontSize = 12 * dpr + "px";
        doc.body.style.margin = 0;
        doc.body.style.background = "#f4f4f4";
      } else {
        doc.addEventListener(
          "DOMContentLoaded",
          function(e) {
            doc.body.style.fontSize = 12 * dpr + "px";
            doc.body.style.margin = 0;
            doc.body.style.background = "#f4f4f4";
          },
          false
        );
      }
      refreshRem();
      flexible.dpr = win.dpr = dpr;
      flexible.refreshRem = refreshRem;
      flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === "string" && d.match(/rem$/)) {
          val += "px";
        }
        return val;
      };
      flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === "string" && d.match(/px$/)) {
          val += "rem";
        }
        return val;
      };
    })(window, window["lib"] || (window["lib"] = {}));

    this.$http({
          url:"../../static/shuju.json",
          method:"get",
          params:{}
        }).then((res)=>{
          this.lists=res.data.data.shaidan['list'+this.indexx]
          console.log(this.lists)
        }).catch((error)=>{
          console.log(error)
        })
    window.addEventListener("scroll", this.handleScroll, true);
  },
  data() {
    return {
      lists:[],
      indexx:0,
      list:["最新","本月最热","晒单合集"]
    }
  },
  methods: {
    get(index){
      this.indexx = index;
      this.$http({
          url:"../../static/shuju.json",
          method:"get",
          params:{}
        }).then((res)=>{
          this.lists=res.data.data.shaidan['list'+this.indexx]
          console.log(this.lists)
        }).catch((error)=>{
          console.log(error)
        })
    },
    handleScroll(){
      var a = document.documentElement.scrollTop;
      var b = document.body.clientHeight
      // console.log(a-b)
      if(a-b>=-480){
        // console.log(1)
        this.$http({
          url:"../../static/shuju.json",
          method:"get",
          params:{}
        }).then((res)=>{
          this.lists=this.lists.concat(res.data.data.shaidan['list'+this.indexx])
          
          // console.log(this.lists)
        }).catch((error)=>{
          // console.log(error)
        })
      }
    }
  }

};
</script>

<style scoped>
@import url("../../static/child3");
</style>
