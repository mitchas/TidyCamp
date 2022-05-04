<!--
	Home Page
-->

<template>
	<div class="padded">


		<div class="max-width margin-auto">

			<div id="homeLogo">
				<img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['User/darkMode']"/>
				<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else />
			</div>

			<!-- <h2 class="ptop-sm">A bunch of incredibly simple yet useful apps to keep track of things.</h2> -->

			<!-- <p class="big mtop-sm">
				Tidy.camp is entirely free and private, with no ads, no cookies, no accounts, no subscriptions, and no <em><i class="fas fa-sparkles"></i> engaging content <i class="fas fa-sparkles"></i></em> you don't care about. 
			</p>
			<p class="big mtop-sm">
				Hit the <i class="fas fa-grid mright-xs mleft-xs"></i> button to open the app launcher, or keep scrolling if you want to read more about this.
			</p> -->


		</div>


	</div>
</template>

<script>
// Components
// import Callout from "@/components/ui/Common/Callout";


export default {
	name: "home",

	components: {
		// Callout
	},

	mixins: [
	],

	data() {
		return {

		};
	},

	watch: {
		
	},
	
	mounted() {
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "Home");
	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {


	}
};

</script>


<style lang="scss">

#homeLogo{
	margin: 25px auto;

	img{
		height: 55px;
		width: auto;
		display: block;
	}
}

</style>