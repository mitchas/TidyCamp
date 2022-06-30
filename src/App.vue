<!--
//! App.vue
//		Main app component, present on all views
// -->

<template>

	<!-- Set classes for different preferences -->
	<div id="app" :class="{
		'no-animations': !$store.getters['User/preferences'].animations, 
		'no-outlines': !$store.getters['User/preferences'].outlines,
		'softkeyboard-visible': $store.getters['Device/softKeyboardVisible']
		}">


		<transition name="load">

			<!-- App wrapper only shown if page mounted -->
			<div class="app-wrapper" :class="'theme-' + $store.getters['Hold/pageTheme']">
			
				<!-- Loaders -->
				<transition-group name="load">
					<!-- Data loading -->
					<div id="dataLoading" key="1" v-if="$store.getters['Hold/isLoading'] == 'data'"><div id="loaderElement"></div></div>
				</transition-group>


				<!-- All page content contained within main -->
				<main id="content">

					<!-- Top bar component -->
					<!-- Logo, account dropdown, etc -->
					<NavBar></NavBar>

					<!-- Center/Main Content -->
					<div class="body-content" id="mainScrollView">

						<transition name="page" mode="out-in">
							<!-- Router only loads when auth is determined false (no user), or dataLoaded >= 2, meaning profile + user loaded -->
							<router-view v-if="$store.getters['User/auth'] == false || ($store.getters['User/auth'] && $store.getters['Hold/dataLoaded'] >= 2)"/>
						</transition>
					</div>

				</main>


				<!-- Toast Component -->
				<Toast ref="toastComponent"></Toast>

				<!-- Alert Component -->
				<Alert ref="alertComponent"></Alert>

				<!-- Confirm Leave Component -->
				<ConfirmLeave ref="confirmLeaveComponent"></ConfirmLeave>

				<!-- Lock scrolling on HTML if scrollLock is true -->
				<v-style v-if="$store.getters['Hold/scrollLock']">
					html{
						overflow: hidden;
					}
					@media (max-width: 780px) {
						padding-right: 8px;
						box-sizing: border-box;
					}
				</v-style>

				<!-- Toggle-able preferences that change HTML -->
				<!-- Rounded borders -->
				<v-style v-if="$store.getters['User/preferences'].round_borders">
					:root {
						--borderRadius: 10px;
					}
				</v-style>
				<v-style v-else>
					:root {
						--borderRadius: 1px;
					}
				</v-style>
				<!-- Fonts -->
				<v-style v-if="$store.getters['User/preferences'].font == 'serif'">
					:root {--primaryFont: var(--serif);}
				</v-style>
				<v-style v-else-if="$store.getters['User/preferences'].font == 'mono'">
					:root {--primaryFont: var(--monospace);}
				</v-style>
				<v-style v-else>
					:root {--primaryFont: var(--sans);}
				</v-style>
				


			</div>

		</transition>

	</div>
</template>


<script>
// Components
import NavBar from "@/components/ui/Single/NavBar";
import Alert from "@/components/ui/Common/Alert";
import Toast from "@/components/ui/Common/Toast";
import ConfirmLeave from "@/components/ui/Modals/ConfirmLeave";
// Mixins
import screenResizeMixin from "@/components/mixins/ui/screenResizeMixin.js";

export default {
	name: "app",
	mixins: [
		screenResizeMixin,
	],
	components: {
		Alert,
		Toast,
		NavBar,
		ConfirmLeave,
	},
	data() {
		return {
		};
	},
	created: function () {
		_paq.push(["disableCookies"]);
		_paq.push(["setCustomUrl", "/" ]);
		_paq.push(["setDocumentTitle", "Home"]);
		_paq.push(["trackPageView"]);
	},
	computed: {
	},
	watch: {
		// Send track on each route change
		$route (to, from){
			// Log tracking only if different route
			if(from.path != to.path){
				_paq.push(["setCustomUrl", to.path ]);
				_paq.push(["setDocumentTitle", to.name]);
				_paq.push(["trackPageView"]);
			}
		}
	},
	mounted() {
		let _this = this;

		this.$store.commit("Hold/SCROLL_LOCK", false);

		// Get geolocation if already allowed
		setTimeout(function(){
			if(_this.$store.getters["Device/permissions"].geolocation == "granted"){
				_this.getGeolocation(true);
			}
		}, 2000);

	},
	beforeDestroy() { 
	},
	methods: {

	}
};
</script>

<style lang="scss">


	// Data Loading
	#dataLoading{
		display: block;
		position: fixed;
		bottom: 0;
		left: -5vw;
		width: 110vw;
		height: 6px;
		z-index: 1000;
		border-radius: 6px;

		#loaderElement{
			display: block;
			position: absolute;
			border-radius: 6px;
			left: 0;
			height: 100%;
			width: 0px;
			background-color: var(--text);
			margin: 0 auto;
			animation: dataLoading 1.8s ease-in-out 0s infinite normal;
		}
	}
	@keyframes dataLoading {
		0.0%{
			width: 0px;
			left: 0%;
		}
		40%{
			width: 60vw;
		}
		60%{
			width: 40vw;
		}
		100%{
			width: 0px;
			left: 100%;
		}
	}


	// Outermost wrapper
	#app {
		display: block;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		max-height: 100%;
		min-height: 100%;
		height: 100%;

		// Inner wrapper only shown on mountt
		.app-wrapper{
			width: 100%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			display: block;
			max-height: 100%;
			min-height: 100%;
			height: 100%;
			overflow: hidden;
		}

		// Toggleable UI preferences
		&.no-animations{
			*{
				transition-duration: 0s !important;
				animation-duration: 0s !important;
			}
		}
		&.no-outlines{
			input,button,textarea,a,select,.focusable{
				outline: none;
				&:focus{
					outline: none !important;
				}
				&:active{
					outline: none;
				}
			}
		}

	}


	//  Main App Content
	main#content{
		box-sizing: border-box;
		padding-right: 0;
		display: flex;
		position: relative;
		flex-grow: 3;
		overflow: hidden;
		max-height: 100%;
		height: 100%;

		// Stack on mobile
		@media (max-width: $screenSM) {
			flex-direction: column;
		}

		// Main view content
		.body-content{
			box-sizing: border-box;
			flex-grow: 3;
			// to account for header
			height: 100%;
			overflow-x: hidden;
			width: 100%;
			transition: 0.2s 0.5s;
			height: 100%;
			overflow-Y: auto;
			overflow-X: hidden;
			padding: 85px 0;
			@media (max-width: $screenSM) {
				padding: 30px 0 100px 0;
			}
		}
	}

	// Suspension banner
	.suspension-banner{
		max-width: 90%;
		margin: 10vh auto;
	}


</style>
