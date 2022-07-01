<!--
	Tasks Page
-->

<template>
	<div class="padded">


		<div class="max-width margin-auto">

			<div id="homeLogo">
				<img src="@/assets/branding/logo-light.png" title="Logo" alt="Logo" v-if="!$store.getters['User/darkMode']"/>
				<img src="@/assets/branding/logo-dark.png"  title="Logo" alt="Logo" v-else />
			</div>

			<h2 class="ptop-sm">Time Tracking.</h2>


		</div>


	</div>
</template>

<script>
// Components
import Callout from "@/components/ui/Common/Callout";


export default {
	name: "TimeTracking",

	components: {
		Callout
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