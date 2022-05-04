<!-- 
App Launcher
-->
<template>
	<div class="nav-popover">
		


		<div class="app-list">

			<router-link v-for="(app, key) in enabledApps" :key="key" :class="'app-link ' + app.class + ' ' + app.color" :to="app.path">
				<i :class="'app-link-icon ' +  app.icon"></i>
				<span class="app-link-text">
					<b>{{app.title}}</b>
					<small>{{app.headline}}</small>
				</span>
			</router-link>

		</div>

		<!-- Footer -->
		<div class="popover-footer">

			<div class="pf-row">
				<a href="mailto:hello@hotdi.sh" target="_blank">
					<i class="fas fa-envelope-open"></i>&nbsp;hello@hotdi.sh
				</a>
			</div>
		
			<div class="pf-row">
				<a href="https://www.buymeacoffee.com/mitchs" target="_blank">
					<i class="fas fa-cup-togo"></i>&nbsp;buy me a coffee
				</a>
			</div>

			<div class="popover-footer-logo">
				<router-link to="/" class="pfl-image">
					<img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['User/darkMode']"/>
					<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else />
				</router-link>
			</div>

		</div>



	</div>
</template>

<script>

export default {
	name: "AppLauncher",
	mixins: [
	],
	components: {
	},
	props: [
	],
	data() {
		return {
		};
	},
	created() {

	},
	mounted(){
	},
	computed: {
		appLinks(){
			return this.$store.getters["Site/apps"];
		},
		appData(){
			return this.$store.getters["User/apps"]
		},
		enabledApps(){
			var apps = this.AppData;

			var filtered = [];
			for (let i = 0; i < this.appLinks.length; i++){
				if(this.appData[this.appLinks[i].id].enabled == true){
					filtered.push(this.appLinks[i]);
				}
			}

			filtered.push(this.appLinks[this.appLinks.length - 1])

			return filtered
		}
  	},
	methods: {

	}	
};	

</script>

<style lang="scss">

	.nav-popover{
		display: block;
		width: 560px;
		max-width: 80vw;
		position: absolute;
		top: 63px;
		left: 25px;
		background-color: var(--background);
		box-sizing: border-box;
		border-radius: calc(var(--borderRadius) * 2);
		transform-origin: top center;
		box-shadow: var(--shadow);
		padding: 15px 30px 15px 30px;
		z-index: 10;

		@media (max-width: $screenSM) {
			padding: 10px 10px;
			min-width: 94vw;
			max-width: 94vw;
			width: 94vw;
			right: 0;
			top: unset;
			bottom: 50px;
			position: fixed;
			left: 3vw;
		}

		.app-list{
			display: flex;
			flex-wrap: wrap;
			gap: 0 3%;
			@media (max-width: $screenSM) {
				gap: 0 2%;
			}


			.app-link{
				display: flex;
				margin: 6px 0;
				width: 48%;
				color: var(--text);
				box-sizing: border-box;
				padding: 6px 10px;
				border-radius: calc(var(--borderRadius) * 2);
				transition: var(--transition);
				
				.app-link-icon{
					font-size: 32px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					height: 50px;
					width: 50px;
					min-width: 50px;
					background-color: var(--grey);
					border-radius: var(--borderRadius);
					transition: var(--transition);

					@media (max-width: $screenSM) {
						font-size: 28px;
						height: 44px;
						width: 44px;
						min-width: 44px;
					}
				}
				.app-link-text{
					display: flex;
					flex-direction: column;
					justify-content: center;
					flex-grow: 3;
					box-sizing: border-box;
					padding: 0 0 0 15px;
					font-size: 16px;

					@media (max-width: $screenSM) {
						font-size: 14px;
						padding: 0 0 0 12px;
					}

					small{
						font-size: 12px;
						font-weight: 400;
						padding-top: 3px;
						line-height: 13px;

						@media (max-width: $screenSM) {
							font-size: 11px;
							line-height: 11px;
							padding-top: 2px;
						}
					}
				}

				// Hover state
				&:hover{
					text-decoration: none;
					background-color: var(--layer);
					transform: scale(1.05);


					.app-link-icon{
					}

					.app-link-text{
						b{
							text-decoration: underline;
						}
					}
				}
			}
		}



		&:hover{
			cursor: default;
		}

	}


	.popover-logo{
		display: block;
		margin: 0 auto;
		text-align: right;

		img{
			height: 30px;
			width: auto;
		}
	}

	.popover-footer{
		font-size: 10px;
		letter-spacing: -0.4px;
		display: flex;
		gap: 30px;
		width: 100%;
		font-weight: 500;
		box-sizing: border-box;
		padding: 10px 40px 0 15px;
		position: relative;

		a{
			font-weight: 500;
		}
		

		.pf-row,
		a{
			color: var(--textFade);
		}

		.popover-footer-logo{
			display: flex;
			justify-content: flex-end;
			position: absolute;
			bottom: -5px;
			right: -14px;

			.pfl-image{

				img{
					height: 26px;
					width: auto;
				}

			}
		}
		
		b{
			font-weight: 600;
		}
	}

</style>