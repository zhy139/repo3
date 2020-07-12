<template>
  <div id="app">
      <!-- 头部组件 -->
      <my-header title="通讯录" is-fixed>
          <button slot="left" @touchstart="backBtn">返回</button>
          <button slot="right" @touchstart="homeBtn">主页</button>
      </my-header>
      <!-- 列表组件 -->
      <my-list></my-list>
      <!-- 弹窗组件 -->
      <my-dialog>
          <div class="button_wrap">
              <button @touchstart="confirmBtn">确定</button>
              <button @touchstart="cancelBtn">取消</button>
          </div>
      </my-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      backBtn: function () {
          alert('返回')
      },
      homeBtn: function () {
          alert('主页')
      },
      confirmBtn:function(){
          alert('okkk')
      },
      cancelBtn:function(){
          alert('hhh')
          this.$children[2].$el.style.display = 'none';
      }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
}
body {
    position: relative;
}

li {
    list-style: none;
}
</style>
