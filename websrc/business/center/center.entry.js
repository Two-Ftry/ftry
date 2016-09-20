
import Vue from 'vue';
import App from './components/App.vue';

require('./style');

var _class = {
  iconBox: 'ev-icon-box',
  orange: 'orange',
  img: 'ev-b-img',
  scale: 'img-scale',
  tx: 'ev-tx',
  mt: 'index-mt',
  borderRed: 'border-red',
  btn: 'index-btn'
};

var _isClick = false;
var app = null;

function init(){
  var dom = require('./template.html');
  $('#main').replaceWith(dom);

  var _app = Vue.extend(App);
  app = new _app({
    el: '#app',
    data: {
      message: 'xxxx'
    },
    components:{
      App
    }
  });

  initEvent();
}

function initEvent(){
  $('.' + _class.iconBox + ' li').click(function(){
    var $this = $(this);
    if($this.hasClass(_class.orange)){
      $this.removeClass(_class.orange);
    }else{
      $this.addClass(_class.orange);
    }
  });

  $('.' + _class.img).click(function(){
    var $this = $(this);
    if($this.hasClass(_class.scale)){
      $this.removeClass(_class.scale);
    }else{
      $this.addClass(_class.scale);
    }
  });

  $('.' + _class.tx).hover(function(){
    if(!_isClick){
      $(this).addClass(_class.scale);
      $(this).addClass(_class.mt);
    }
  }, function(){
    if(!_isClick){
      $(this).removeClass(_class.scale);
      $(this).removeClass(_class.mt);
    }
  });

  $('.' + _class.tx).click(function(){
    _isClick = !_isClick;
    if(_isClick){
      $('.' + _class.tx).addClass(_class.borderRed);
    }else{
      $('.' + _class.tx).removeClass(_class.borderRed);
    }
  });

  $('.' + _class.btn).click(function(){
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'get',
      dataType: 'json',
      data: {
        a1: 111,
        a2: 222
      },
      success: function (data) {
        console.log('success', data);
      },
      error: function(error){
        console.log('error', error);
      }
    });
  });
}



$(function(){
  init();


});
