<template>
    <mt-popup v-model="notAccessVisible" :class="'pop-box'" :closeOnClickModal="false">
        <div class="pop-header">
            <div class="close-icon" @click="close"></div>
        </div>
        <div :class="'pop-body'">
            <div class="title">
                <span class="text">很遗憾你猜错了</span>
            </div>
        </div>
        <div class="pop-body">

        </div>
    </mt-popup>
</template>


<script>
    import Vue from 'vue'
    import {
        Popup
    } from 'mint-ui'
    Vue.component(Popup.name, Popup)
    export default {
    
        name: 'pop',
        components: {
    
        },
        props: {
            className: String
        },
        data() {
            return {
                notAccessVisible: true
            }
        },
        methods: {
            open: function() {
                this.notAccessVisible = true
            },
            close: function() {
                this.notAccessVisible = false
            }
        }
    }
</script>

<style lang="less" scoped>
.pop-box {
    box-sizing: border-box;
    width: 592pr;
    // padding: 16pr 0px;
    border-radius: 10pr;
}

.pop-header {
    height: 24pr;
    .close-icon {
        position: absolute;
        right: 20pr;
        top: 20pr;
        width: 24pr;
        height: 24pr;
        &::before, &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 24pr;
            background-color: #9B9B9B;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}



.pop-body {
    text-align: center;
    .title {
        height: 56pr;
        color: #43475B;
        .text {
            font-size: 40pr;
        }
    }
    }
</style>