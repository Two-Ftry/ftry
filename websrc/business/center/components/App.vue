<template lang="html">
<div :class="{'gross-glass': isPanelShow}">

  <div class="index-top clearfix">
    <p>欢迎您的到来</p>
    <a href="./login.html">退出</a>
    <a href="javascript:(0);" class="tx ev-tx">
    </a>
  </div>
  <img class="b-img ev-b-img" src="../../../images/bf1554.jpg" alt="" />
  <img class="b-img ev-b-img" src="../../../images/subImg/22.jpg" alt="" />
  <img class="b-img ev-b-img" src="../../../images/888.png" alt="" />
  <div class="icon-box ev-icon-box">
    <ul class="clearfix">
      <li class="iconfont icon-sousuo"></li>
      <li class="iconfont icon-4duoyun"></li>
      <li class="iconfont icon-code1"></li>
      <li class="iconfont icon-code2"></li>
      <li class="iconfont icon-code"></li>
    </ul>
  </div>
  <div class="c-box">
    <span class="c-item1" @click="onToShowPanel">1</span>
    <span class="c-item2" @click="onToShowPanel">2</span>
    <span class="c-item3" @click="onToShowPanel">3</span>
    <span class="c-item4" @click="onToShowPanel">4</span>
    <span class="c-item5" @click="onToShowPanel">5</span>
  </div>

  <button class="index-btn">发送请求</button>
</div>
  <panel v-show="isPanelShow" @event-close-panel="onToClosePanel"></panel>

</template>

<script>
import Panel from '../../../vui/panel/Panel.vue';
export default {
  data() {
    return {
      isPanelShow: false
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    onToShowPanel(){
      this.isPanelShow = true;
    },
    onToClosePanel(){
      this.isPanelShow = false;
    }
  },
  components: {
    Panel
  }
};
</script>

<style lang="css">
</style>
