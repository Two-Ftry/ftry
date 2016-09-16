<template lang="html">
  <div class="panel-box">
   <div class="panel-mask" @click="onToClose"></div>
    面板内容
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    onToClose(){
      this.$dispatch('event-close-panel');
    }
  },
  components: {}
}
</script>

<style lang="css">
  .panel-box{
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
    background: green;
  }
  .panel-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.1);
    /*background-color: transparent;*/
  }
</style>
