<!-- 
Floating nav button
-->

<template>
	<div id="nav">

		<div id="branding">
			<router-link to="/" class="pfl-image">
				<img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['User/darkMode']"/>
				<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else />
			</router-link>
		</div>

		<div id="appList" class="no-scrollbars">
			<router-link v-for="(app, key) in enabledApps" :key="key" :class="app.class + ' ' + app.color" :to="app.path">
				<i :class="app.icon"></i>
				<!-- <span class="link-text"> -->
					<b>{{app.title}}</b>
					<!-- <small>{{app.headline}}</small> -->
				<!-- </span> -->
			</router-link>

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
		};
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
	watch:{
	},
	methods: {

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
		background-color: var(--layer);
		border-bottom: 1px solid var(--borderFade);
		// box-shadow: var(--shadow);

		

		#branding{
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 0 0 var(--sidePadding);

			img{
				height: 40px;
				width: auto;
				@media (max-width: $screenSM) {
					height: 28px;
				}
			}
		}

		#appList{
			width: 100%;
			display: flex;
			gap: 40px;
			box-sizing: border-box;
			padding-left: 45px;
			overflow-x: auto;

			@media (max-width: $screenSM) {
				gap: 40px;
			}

			a{
				display: flex;
				font-size: 0.9rem;
				font-weight: 500;
				gap: 18px;
				padding: 20px 0;
				white-space: pre;

				@media (max-width: $screenSM) {
					font-size: 0.8rem;
					gap: 10px;
				}

				i,b{
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				i{
					font-size: 1.5rem;
					@media (max-width: $screenSM) {
						font-size: 1.2rem;
					}
				}

				&:last-child{
					padding-right: 55px;
				}
			}
		}

	}


</style>