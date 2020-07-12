<style>
#top {
    width: 100%;
    height: 40px;
    background-color: #21A4F1;
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
    display: flex;
    z-index: 10;
}

#top button {
    font-size: 20px;
    padding: 4px;
}

#top div {
    flex: 1;
}
</style>
<template>
    <div id="top" :style="{'position':isFixed?'fixed':'static'}">
        <slot name="left"></slot>
        <div>{{title}}</div>
        <slot name="right"></slot>
    </div> 
</template>
<script>
export default {
   name:"my-header",
   props: {
        title: {
            type: String,
            default: '标题'
        },
        isFixed: {
            type: Boolean,
            default: false
        }
    }
}
</script>
