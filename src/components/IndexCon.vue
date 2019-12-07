<template>
	<div class="indexcon">
		<router-link to="">
			<div class="player-container">
				<video-player class="vjs-custom-skin shipin" :options="playerOptions"></video-player>
			</div>
			<span>26日 NBA十佳球 詹姆斯死亡追帽保罗鹰击长空</span>
		</router-link>
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
					poster: "http://img1.gtimg.com/sports/pics/hv1/244/175/2284/148561969.jpg", //你的封面地址（覆盖在视频上面的图片）
					width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.indexcon{
		width: 94%;
		margin: 0 auto;
	}
	
	.player-container{
		width: 100%;
		/*display: block;*/
		/*height: 1.99rem;*/
		/*height: 2.25rem;*/
	}
	span{
		/*width: 100%;*/
		display: block;
		color: #f0f0f0;
		font-size: .12rem;
		height: .36rem;
		line-height: .36rem;
		background: #202020;
		padding-left: .08rem;
		position: relative;
		top: -1px;
	}
</style>
