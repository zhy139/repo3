<style>
#dialog{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    /* display: flex; */
    z-index: 100;
    display: none;
}
#dialog .dialog_box{
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    margin: auto;
}
.dialog_title{
    font-size: 20px;
    border-bottom: 1px solid #bbb;
    padding: 5px;
}
.tel{
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 25px;
}
.button_wrap {
    display: flex;
    justify-content: space-between;
}
.button_wrap button{
    width: 70px;
    height: 40px;
    border-radius: 5px;
    margin: 30px 10px;
}
</style>
<template>
    <div id="dialog" ref="dialog">
        <div class="dialog_box">
            <div class="dialog_title">呼叫</div>
            <div class="tel">{{telNumber}}</div>
            <slot></slot>
        </div>
    </div> 
</template>
<script>
export default {
    name:'my-dialog',
   data() {
      return {
          telNumber:''
      }
   },
   props: {
        title: {
            type: String,
            default: '标题'
        },
        isFixed: {
            type: Boolean,
            default: false
        }
    },
    mounted:function(){
        this.$root.bus.$on("showTel",function(data){
            this.$refs.dialog.style.display = 'flex';
            this.telNumber = data;
        }.bind(this))
    }
}
</script>
