<!--
 * @Author: CoolWind
 * @Date: 2019-11-30 16:33:59
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-06 09:59:59
 * @Description: 
 -->
<template>
    <div class="forumfontBox">
        <div class="forumfont">
            <div class="fontInput">
                <input type="text" placeholder="说点什么吧" ref="sayWords">
                <a-button @touchstart="success">发表</a-button>
            </div>
            <div class="fontSource">
                <div ref="photoDiv"><img src="../assets/images/font01.jpg" alt=""><span>图片</span></div>
                <div><img src="../assets/images/font02.jpg" alt=""><span>视频</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import {Button} from 'ant-design-vue';
import '../assets/css/antd.css';

Vue.use(Button);

export default {
    name: 'forumfont',
    data(){
        return {
            
        }
    },
    methods: {
        success() {
            this.$refs.sayWords.value = "";
            this.$message.success('发表成功',3,);
            this.$store.commit('showFont');
        },
        // captureImage(){
        //     //1、获取摄像头对象。
        //     let cmr =  window.plus.camera.getCamera();
        //     //2、调用拍照功能
        //     let res = cmr.supportedImageResolutions[2];
        //     let fmt = cmr.supportedImageFormats[0];
            
        //     window.console.log("Resolution: "+res+", Format: "+fmt);
            
        //     cmr.captureImage( function( filePath ){//成功回调函数，获取路径
        //             window.alert( "拍照成功："+filePath );
        //             window.plus.gallery.save( filePath, function () { //将图片保存到系统路径，再通过gallery.pick才能获取到,其实在captureImage成功回调之后图片已经被保存到了你打包的APP的目录下。
        //                 //alert( "保存图片到相册成功" );
        //             });
        //         },
        //         function( error ) {
        //             window.alert( "Capture image failed: " + error.message );
        //         },
        //         {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
        //     );
        // }
    },
}
</script>

<style scoped>
    .forumfontBox{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 2;
        position: fixed;
        top: 0;
        padding-top: 2rem;
    }
    .forumfont{
        width: 100%;
        height: 1.6rem;
    }
    .fontInput{
        width: 100%;
        height: .5rem;
        background: white;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;
    }
    .fontInput input{
        width: 3rem;
        height: .5rem;
        border: 0;
        outline: none;
        line-height: .5rem;
        color: #757575;
        font-size: .14rem;
        box-sizing: border-box;
        padding-left: .15rem;
    }
    .fontInput input::placeholder{
        color: #757575;
    }
    .fontSource{
        width: 100%;
        height: .5rem;
        background: white;
    }
    .fontSource div{
        float: left;
        display: flex;
        width: .7rem;
        height: .5rem;
        justify-content: space-around;
        align-items: center;
        padding-left: .1rem;
    }
    .fontSource img{
        width: .2rem;
        height: .2rem;
        display: block;
    }
    
</style>