<style>
#list {
    position: absolute;
    top: 40px;
    width: 100%;
}

#list .list_user {
    width: 100%;
}

#list .list_user li p {
    width: 100%;
    background-color: #ccc;
}

#list .list_user li ul li {
    width: 100%;
    height: 50px;
    padding-left: 5px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
}

#list .list_nav {
    position: fixed;
    top: 50%;
    right: 10px;
    font-size: 20px;

}
</style>
<template>
    <div id="list">
        <ul class="list_user" ref="listuser" @touchmove="isMove=true">
            <li v-for="item in listData" :key="item.index">
                <p>{{item.index}}</p>
                <ul>
                    <li v-for="data in item.users" :key="data.name" @touchend="handleToCall(data.tel)">{{data.name}}</li>
                </ul>
            </li>
            
        </ul>
        <ul class="list_nav" ref="listnav">
            <li v-for="item in listData" :key="item.index" @touchstart="jumpToUser">{{item.index}}</li>
        </ul>
    </div>
</template>
<script>
var listData = [
    {
        index:'a',
        users:[
            {
                name:'a1',
                tel:16287162711
            },
            {
                name:'a2',
                tel:16287162712
            },
            {
                name:'a3',
                tel:16287162713
            }
        ]
    },
    {
        index:'b',
        users:[
            {
                name:'b1',
                tel:12287162711
            },
            {
                name:'b2',
                tel:12287162712
            },
            {
                name:'b3',
                tel:12287162713
            }
        ]
    },
    {
        index:'c',
        users:[
            {
                name:'c1',
                tel:18287162711
            },
            {
                name:'c2',
                tel:18287162712
            },
            {
                name:'c3',
                tel:18287162713
            }
        ]
    },
    {
        index:'d',
        users:[
            {
                name:'d1',
                tel:11287162711
            },
            {
                name:'d2',
                tel:11287162712
            },
            {
                name:'d3',
                tel:11287162713
            }
        ]
    },
    {
        index:'e',
        users:[
            {
                name:'e1',
                tel:13287162711
            },
            {
                name:'e2',
                tel:13287162712
            },
            {
                name:'e3',
                tel:13287162713
            }
        ]
    },
    {
        index:'f',
        users:[
            {
                name:'f1',
                tel:16247162711
            },
            {
                name:'f2',
                tel:16247162712
            },
            {
                name:'f3',
                tel:16247162713
            }
        ]
    }
];
export default {
    name:'my-list',
   data() {
      return {
        listData:listData,
        isMove:false
      }
   },
   mounted:function(){
        this.setNavTop();
    },
    methods:{
        setNavTop:function(){
            var navHeight = this.$refs.listnav.offsetHeight;
            this.$refs.listnav.style.marginTop = -navHeight / 2 + 'px';
        },
        jumpToUser:function(ev){
            var allP = this.$refs.listuser.getElementsByTagName('p');
            for(var i=0;i<allP.length;i++){
                if(allP[i].innerHTML === ev.target.innerHTML){
                    document.documentElement.scrollTop = allP[i].offsetTop;                           
                }
            }
        },
        handleToCall(data){
            if(this.isMove){
                this.isMove = false;
            }else{
                //停止滑动了
                this.$root.bus.$emit("showTel",data);
            }
            
        }
    }
}
</script>
