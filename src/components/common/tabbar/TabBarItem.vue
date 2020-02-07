<template>
<div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div> 
</div>
  
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'pink'
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path);     
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle() {
            return this.isActive?{color: this.activeColor} : {}
        }
    }
}
</script>
    
<style>
.tab-bar-item {
    flex: 1;
    font-size: 14px;
}
.tab-bar-item img {
    width: 30px;
    vertical-align: middle;
}

</style>