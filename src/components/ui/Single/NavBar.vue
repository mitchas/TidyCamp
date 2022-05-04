<!-- 
Floating nav button
-->

<template>
	<div id="nav">
		
		<!-- App Launcher -->
		<div id="appLauncher">
			<button id="launcherButton" tabindex="0" aria-label="App Launcher" :class="{'active': showAppLauncher}" @click="showAppLauncher = !showAppLauncher">
				<!-- icon -->
				<i :class="{'fas fa-grid': !showAppLauncher, 'fas fa-times': showAppLauncher}"></i>
				<!-- Logo -->
				<!-- <img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['User/darkMode']"/>
				<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else /> -->
			</button>

			<!-- Popup on click -->
			<span  @mouseleave="showAppLauncher = false">
				<transition name="collapse">
					<AppLauncher v-if="showAppLauncher"></AppLauncher>
				</transition>
			</span>


		</div>
		

		<!-- Popover Backdrop -->
		<transition name="lightbox">
			<div class="lightbox" id="popoverLightbox" @click="showAppLauncher = false" v-if="showAppLauncher" v-touch:swipe.self="() => showAppLauncher = false"></div>
		</transition>

	</div>
</template>

<script>
// Components
import AppLauncher from "@/components/ui/Single/AppLauncher";

export default {
	name: "TopBar",
	components: {
		AppLauncher,
	},
	mixins: [
	],
	data() {
		return {
			showAppLauncher: false,
		};
	},
	watch:{
		$route (to, from){
			this.showAppLauncher = false;
		},
		// Watch showAppLauncher to lock scroll on mobile
		showAppLauncher () {
			if(this.$store.getters["Device/hasSmallScreen"]){
				if(this.showAppLauncher == true){
					this.$store.commit("Hold/SCROLL_LOCK", true);
				}else{
					this.$store.commit("Hold/SCROLL_LOCK", false);
				}
			}
		}
	},
	methods: {

		toggleSearch: function(){
			let _this = this;
			let current = this.searchVisible;

			this.searchVisible = !current;

			if(!current){
				setTimeout(function(){
					_this.$refs.globalSearchInput.focus();
				}, 350);
			}
			
		},

		// Toggle Map View
		toggleMap: function(){
			this.$store.dispatch("Map/CHANGE_MAP_DISPLAY", "visible");
		}

	}
};
</script>

<style lang="scss">

	

	$mobileSearchNavHeight: 110px; 


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

		@media (max-width: $screenSM) {
			bottom: 0;
			top: unset;
		}

		// Logo / Launcher Button
		#appLauncher{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: auto;
			position: relative;

			#launcherButton{
				transition: var(--transition);
				margin: 0 0 0 0;
				padding: 0;
				width: fit-content;
				box-sizing: border-box;
				height: 60px;
				width: 60px;
				transform: scale(1);
				color: var(--text);
				transition: var(--transition);

				@media (max-width: $screenSM) {
					padding: 10px 8px;
				}

				img{
					height: auto;
					width: 60px;
				}

				i{
					font-size: 34px;
				}

				&:hover{
					cursor: pointer;
					transform: scale(0.9);
				}
			}
		}
	}


	#popoverLightbox{
		backdrop-filter: none;
		z-index: 1;
	}



</style>