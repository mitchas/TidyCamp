<!-- 
Top nav bar - fixed
-->

<template>
	<div id="nav">

		<div id="branding">

			<a @click="!$store.getters['User/app_launcher'] ? navigate('/') : toggleAppLauncher()">
				<img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['User/darkMode']"/>
				<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else />
			</a>
		</div>


		<div id="appList" class="no-scrollbars" :class="{'expanded': appLauncherVisible}" @click="appLauncherVisible = false">
			<router-link v-for="(app, key) in appLinks" :key="key" :class="{'active': $route.path == app.path, 'hidden': !appData[key].enabled}" :to="app.path">
				<i :class="app.icon"></i>
				<b>{{app.title}}</b>
				<p v-if="appLauncherVisible">{{app.description}}</p>
			</router-link>
			<!-- Blank/Gap -->
			<a>&nbsp;</a>

		</div>
		

	</div>
</template>

<script>
// Components
export default {
	name: "TopBar",
	components: {
	},
	mixins: [
	],
	data() {
		return {
			appLauncherVisible: false,
		};
	},
	computed: {
		appLinks(){
			return this.$store.getters["Site/apps"];
		},
		appData(){
			return this.$store.getters["User/apps"]
		},
  	},
	watch:{
	},
	methods: {

		toggleAppLauncher: function(){
			this.appLauncherVisible = !this.appLauncherVisible;
		}

	}
};
</script>

<style lang="scss">

	
	// Top nav bar
	// Has logo and hover menu for account/dark mode
	#nav{
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		position: fixed;
		top: 0px;
		z-index: 12;
		transition: all 0.2s ease;
		width: 100%;
		height: 60px;
		background-color: var(--layer);
		border-bottom: 1px solid var(--borderFade);
		// box-shadow: var(--shadow);

		#branding{
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 0 0 var(--sidePadding);

			a:active{
				transform: scale(0.9);
			}

			img{
				height: 36px;
				width: auto;
				@media (max-width: $screenSM) {
					height: 28px;
				}
			}
		}

		#appList{
			width: 100%;
			display: flex;
			gap: 8px;
			box-sizing: border-box;
			padding-left: 25px;
			overflow-x: auto;

			@media (max-width: $screenSM) {
				gap: 3px;
			}

			a{
				display: flex;
				font-size: 0.85rem;
				font-weight: 500;
				gap: 12px;
				padding: 10px 20px;
				margin: 8px 0;
				white-space: pre;
				position: relative;
				border-radius: calc(var(--borderRadius) * 1.35);
				color: var(--text);
				transition: 0.2s ease;

				@media (max-width: $screenSM) {
					font-size: 0.8rem;
					gap: 8px;
					padding: 8px 12px;
					margin: 8px 0;
				}

				&:hover{
					background-color: var(--background);
				}

				&.active{
					color: var(--primary);
					background-color: var(--primary);
					color: var(--background);

					&:hover{
						background-color: var(--primary);
					}
				}
				i,b{
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				i{
					font-size: 1.4rem;
					text-decoration: none !important;
					@media (max-width: $screenSM) {
						font-size: 1.2rem;
					}
				}

				&:last-child{
					padding-right: 55px;
				}
			}

			// Expanded App Launcher
			&.expanded{
				position: fixed;
				top: 60px;
				left: 0;
				background-color: rgba(0,0,40,0.25);
				height: auto;
				max-height: 100vh;
				max-height: calc(100vh - 60px);
				gap: 10px 30px;
				flex-wrap: wrap;
				box-sizing: border-box;
				padding: 8vh 5vw;
				justify-content: center;
				overflow-x:scroll;
				backdrop-filter: blur(5px);
				box-shadow: var(--shadow);

				@media (max-width: $screenSM) {
					padding: 4vh 5vw;
					gap: 15px 30px;
				}

				a{
					flex-wrap: wrap;
					flex-basis: 320px;
					min-width: 220px;
					border-radius: var(--borderRadius);
					// box-shadow: var(--shadow);
					color: var(--text);
					background-color: var(--layer);
					margin: 0;
					gap: 0;
					white-space: normal;
					height: fit-content;

					i{
						width: 50px;
						height: 50px;
						background-color: var(--grey);
						border-radius: var(--borderRadius);
						font-size: 28px;
						text-align: center;
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					b{
						display: flex;
						flex-direction: column;
						justify-content: center;
						flex-grow: 3;
						font-size: 16px;
						font-weight: 600;
						box-sizing: border-box;
						padding-left: 10px;
					}

					p{
						width: 100%;
						line-height: 1.2rem;
						font-size: 0.9rem;
					}

					&:last-child{
						display: none;
						border: none;
						box-shadow: none;
						margin-bottom: 10vh;
						background-color: transparent;
						@media (max-width: $screenSM) {
							display: block;
						}
					}

					&:hover{
						p{
							text-decoration: none;
						}
					}

					&.active{
						background-color: var(--primary);
						b,p{
							color: var(--white);
						}
						&:hover{
						}
					}
				}
			}
		}

	}


</style>