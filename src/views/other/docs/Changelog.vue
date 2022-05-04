<!--
Changelog
-->

<template>
	<div class="page narrow-page">

		<!-- Header -->
		<h1 class="mtop-md">Changelog</h1>
		<div class="inline-block">
			<div class="tag yellow mtop-xs">
				<i class="far fa-sync-alt mright-xxs"></i>
				<span>Last updated {{lastUpdate}}</span>
			</div>		
		</div>		


		<div v-for="(change, key) in changes" :key="key" class="changelog-block">
			<div class="changelog-date">
				{{change.date}}
			</div>
			<div class="changelog-body">

				<h3>
					{{change.title}}&nbsp;
					<i v-if="change.icon" :class="'text-' + change.color + ' ' + change.icon"></i>
				</h3>

				<p class="big">{{change.description}}</p>
				<ul v-if="change.items[0]" class="changelog-ul">
					<li v-for="(item, itemkey) in change.items" :key="itemkey">
						{{item}}
					</li>
				</ul>

			</div>
		</div>
		


		<!-- Spacer -->
		<div class="ptop-xl pbottom-md"></div>

	</div>
</template>

<script>

export default {
  	name: "Changelog",
  	components: {

	},
	mixins: [
	],
	created: function () {
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "Changelog");
	},
	mounted(){
	},
	data() {
		return {
			lastUpdate: this.$store.getters["Changelog/lastupdate"],
			changes: this.$store.getters["Changelog/changes"],
			company: process.env.VUE_APP_COMPANY_NAME,
			url: process.env.VUE_APP_FULL_URL,
		};
	},
	mounted(){
	},
	methods: {
		
	}
};
</script>

<style lang="scss">
	// 
</style>