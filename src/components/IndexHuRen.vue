<template>
	<div class="indexhuren">
		<div class="huren">
			<router-link to="">
				<div class="player-container">
					<video-player class="vjs-custom-skin shipin" :options="playerOptions"></video-player>
				</div>
				<p>湖人2.4秒神仙战术！波普飙中压哨三分 与詹皇撞胸庆祝</p>
				<div class="zan">
					<i class="el-icon-chat-square"></i>
					<span>4246</span>
					<i class="el-icon-thumb i2"></i>
					<span>128</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import 'video.js/dist/video-js.css'
	import 'vue-video-player/src/custom-theme.css'
//	import 'videojs-contrib-hls.js/src/videojs.hlsjs'

	export default {
		data() {
			return {
				playerOptions: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					controls: true, //控制条
					preload: 'auto', //视频预加载
					muted: false, //默认情况下将会消除任何音频。
					loop: false, //导致视频一结束就重新开始。
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: 'video/mp4',
						src: 'http://vd4.bdstatic.com/mda-ia6n51kqnc4n12e1/sc/mda-ia6n51kqnc4n12e1.mp4' //你所放置的视频的地址，最好是放在服务器上
					}],
					poster: "https://img.ivsky.com/img/bizhi/pre/201104/28/l_a_lakers-004.jpg", //你的封面地址（覆盖在视频上面的图片）
					width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.indexhuren{
		width: 100%;
		border-top: .11rem solid #fffbff;
		border-bottom: .11rem solid #fffbff;
		.huren{
			width: 94%;
			margin: 0 auto;
			position:relative;
			.player-container{
				width: 100%;
			}
			p{
				position: absolute;
				top: .12rem;
				left: 0;
				color: #f6f6f4;
				font-size: .15rem;
				line-height: .18rem;
				background: transparent;
				padding: 0 .13rem;
			}
			.zan{
				width: 100%;
				height: .22rem;
				padding-top: .14rem;
				i{
					margin-left: 5px;
					color: #93929a;
					font-size: .14rem;
				}
				span{
					color: #9a9ba0;
					font-size: .08rem;
				}
				.i2{
					margin-left: .17rem;
				}
			}
		}
	}
</style>