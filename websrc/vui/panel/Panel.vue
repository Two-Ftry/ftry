<template lang="html">
  <div class="panel-box"  transition="moonlight">
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
    background-color: rgba(255, 255, 255, 0.1); /* IE */
    /*background-color: transparent;*/
  }
  .moonlight-enter {
        -webkit-transform: translateX(110%);
        transform: translateX(110%);
        /*-mz-animation: moonlight-in .4s ease-out forwards;
        -webkit-animation: moonlight-in .4s ease-out forwards;*/
        animation: moonlight-in .4s ease-out forwards;
    }

    .moonlight-leave {
        /*-mz-animation: moonlight-out .4s ease-in forwards;
        -webkit-animation: moonlight-out .4s ease-in forwards;*/
        animation: moonlight-out .4s ease-in forwards;
    }

    @keyframes moonlight-in {
        0% {
            transform: translateX(110%);
        }

        100% {
            transform: translateX(0%);
        }
    }
    @-webkit-keyframes moonlight-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(110%);
        }
    }
    @keyframes moonlight-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(110%);
        }
    }

</style>
