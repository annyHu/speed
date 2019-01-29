<template>
  <div class="home">
    <!-- <p class="title">文字居中---公用css以及scss常用封装</p> -->
    <ul class="left">
      <li class="title">文字居中---公用css以及scss常用封装</li>
      <li class="text_top">
        文字居上
      </li>
      <li class="text_bottom">
        文字居下
      </li>
      <li class="text_left">
        文字居左
      </li>
      <li class="text_right">
        文字居右
      </li>
      <li class="inner_title">
        单行省略---dfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdf
        gmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdf
      </li>
      <li class="inner_title_mul">
        多行省略---dfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfd
        fgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmd
        flgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdfdfgmdflgmdf
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixin.scss';

  @mixin text{
    padding: 10px;
    width: 500px;
    line-height: 30px;
    border: 1px solid #f1f0f8;
    box-sizing: border-box;
  }
  .home{
    @include center;
    margin-top: 30px;
  }
  .title{
    width: 500px;
    background: #cdc;
    height: 60px;
    @include center;
  }
  .left{
    width: 500px;
  }
  .inner_title{
    @include text;
    @include ellipsis;
  }
  .inner_title_mul{
    @include text;
    @include ellipsis_mul(3);
  }
  .text_top{
    height: 80px;
    @include text;
  }
  .text_bottom{
    height: 80px;
    @include text;
    @include leftBottom;
  }
  .text_left{
    @include text;
    @include left;
  }
  .text_right{
    @include text;
    @include right;
  }
</style>
