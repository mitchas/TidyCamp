<!--
	App Settings & Preferences
-->

<template>
	<div class="padded">

		<!-- User App Preferences -->
		<h1>Preferences</h1>


		<!-- Theme Switcher component -->
		<ThemeEditor v-if="themeModal" v-on:closeEditor="themeModal = false"></ThemeEditor>


		<div class="toggle-grid mtop-md">

			<!-- Change Theme -->
			<div class="toggle-card">
				<label class="tc-main">
					<i class="tc-icon fas fa-palette"></i>
					<b>Visual Theme</b>
					<!-- Button -->
					<div class="tc-input">
						<button class="button small" @click="themeModal = true">
							<span>Edit</span>
							<i class="fas fa-droplet"></i>
						</button>
					</div>
				</label>
				<div class="tc-body">
					<p>
						Adjust the color theme and other visual preferences.
					</p>
				</div>
			</div>

			<!-- Loop toggle preferences -->
			<div class="toggle-card" v-for="(pref, key) in preferences" :key="key" :class="{'inactive': pref.disabled}">
				<label class="tc-main">
					<i :class="'tc-icon ' + pref.icon"></i>
					<b>{{pref.title}}</b>
					<div class="tc-input">
						<input type="checkbox" class="toggle on-off" :checked="userPreferences[key]" @input="updatePreference(key)" :disabled="pref.disabled"/>
					</div>
				</label>
				<div class="tc-body">
					<p>
						{{pref.description}}
					</p>
				</div>
			</div>

		</div>


		<!-- Your apps -->
		<h1 class="mtop-xl">Your Apps</h1>
		<p>
			You can turn off any apps you don't use so they don't show in the app launcher.
			<br/>
			The <i class="fas fa-circle-star text-blue"></i> default app is what loads first when you first open tidy.camp.
		</p>


		<div class="toggle-grid mtop-md" v-if="sortedApps">

			<div class="toggle-card" v-for="(app, key) in sortedApps" :key="key" :class="{'inactive': appData[app.id] && appData[app.id].enabled == false}">
				<label class="tc-main" v-if="sortedApps[key]">
					<i :class="'tc-icon ' +app.icon"></i>
					<b>{{app.title}}</b>
					<div class="tc-input" v-if="!sortedApps[key].persistent">
						<input type="checkbox" class="toggle on-off" :checked="appData[app.id] && appData[app.id].enabled" @input="toggleApp(app.id)" />
					</div>
				</label>
				<!-- Toggle Body -->
				<div class="tc-body">
					<p>
						{{app.description}}
					</p>
				</div>
				<!-- Footer controls -->
				<div class="tc-footer">
					<div class="tc-tags">
						<span :class="'tag ' + app.category">{{app.category}}</span>
						<!-- <span :class="'tag grey' + apps[key].color">Household</span> -->
					</div>
					<div class="tc-actions" v-if="!app.persistent">
						<!-- Default -->
						<button class="tc-action-button" :class="{'active': userPreferences.start == sortedApps[key].path}" @click="setDefaultApp(app.path)">
							<i class="fas fa-circle-star"></i>
						</button>
						<!-- Clear Data -->
						<button class="tc-action-button" @click="eraseAppData(key)">
							<i class="fas fa-eraser"></i>
						</button>
					</div>
				</div>

			</div>

		</div>

		<!-- Confirm delete app data Modal -->
		<Confirm v-if="deletingAppData != null" 
			title="Delete App Data" 
			color="red"
			confirmText="Clear Data" cancelText="No, Cancel" 
			confirmIcon="fas fa-eraser"
			v-on:confirmFalse="deletingAppData = null"
			v-on:confirmTrue="confirmDeleteAppData()">
			
			<p class="no-padding">
				Are you sure you want to clear your data for and completely reset the <b>{{sortedApps[deletingAppData].title}}</b> app?
			</p>
			<p class="small mtop-sm no-padding text-fade">
				This can <b>not</b> be undone.
			</p>
		</Confirm>


		<!-- Your Data -->
		<h1 class="mtop-xl">Your Data</h1>
		<p>
			{{appName}} does not store any of your data.
			<br/>
			Everything you enter on this site is <b>only</b> stored in <b>your computer's</b> local storage.
		</p>
		<p class="small mbottom-md">
			This means your data will <b>not</b> sync between devices, and if you clear your browser data, you will lose your {{appName}} data. 
			Download and backup your data file regularly if you're worried. We may add accounts and syncing later.
		</p>

		<!-- Data Controls -->
		<button class="button blue mright-xs mbottom-xs" @click="exportModal = true">
			<i class="fas fa-laptop-arrow-down"></i>
			<span>View Data</span>
		</button>
		<!-- Import Data -->
		<button class="button green mright-xs mbottom-xs" @click="importModal = true;">
			<i class="fas fa-file-import"></i>
			<span>Import Data</span>
		</button>
		<!-- Clear Data -->
		<button class="button red mbottom-xs" @click="hardResetModal = true">
			<i class="fas fa-radiation"></i>
			<span>Clear All Data</span>
		</button>

		<!-- Privacy Subheader -->
		<h3 class="mtop-lg">Privacy</h3>
		<p>
		</p>
		<p class="small mbottom-md">
			<b>TL;DR:</b>
			This app is as private as it gets. We don't save <b>any</b> of your data anywhere. It's all on your computer. There are no ads, third-party libraries, or cookies.
			<br/>
			It does have Analytics, but it's self-hosted and only tracks which pages or apps are viewed and how many times.
		</p>

		<!-- Privacy Policy -->
		<router-link to="/privacy" class="button pink mright-xs mbottom-xs">
			<i class="fas fa-blinds"></i>
			<span>Privacy Policy</span>
		</router-link>
		<!-- Terms of Service -->
		<router-link to="/terms" class="button purple mbottom-xs">
			<i class="fas fa-file-check"></i>
			<span>Terms of Service</span>
		</router-link>


		<!-- Development -->
		<h1 class="mtop-xl">Development</h1>
		<p>
			View the changelog for the latest updates & changes. 
			<br/>
			The design page is for previewing UI elements.
		</p>

		<!-- Changelog -->
		<router-link to="/changelog" class="button yellow mright-xs mbottom-xs">
			<i class="fas fa-list"></i>
			<span>Changelog</span>
		</router-link>
		<!-- Design -->
		<router-link to="/design" class="button orange mbottom-xs">
			<i class="fas fa-browser"></i>
			<span>Design</span>
		</router-link>


		<!-- Export Data Modal -->
		<Modal size=""
			color="green"
			:show="exportModal"
			title="Manage Your Data"
			confirmIcon="fas fa-cloud-arrow-down"
			confirmText="Download"
			dismissText="Done"
			:reverseButtons="true"
			@confirmed="exportData"
			@dismissed="exportModal = false">

			<p class="no-padding">
				Here's what all of your data looks like:
			</p>

			<div id="localStorageOutput">
				<textarea class="mtop-sm" id="localStorageTextarea" :value="getAllLocalStorage().length ? getAllLocalStorage() : 'Nothing here'" readonly></textarea>
			</div>

		</Modal>

		<!-- Import Data Modal -->
		<Modal size=""
			:show="importModal"
			color="invert"
			title="Import Data"
			icon="fas fa-file-import"
			confirmText="Done"
			confirmIcon="fas fa-times"
			@confirmed="importModal = false"
			@dismissed="importModal = false">

			<p class="no-padding">
				If you have a <b>{{appName}}</b> backup <b><code>.json</code></b> file, you can upload it here to import and merge it into your existing data.
			</p>

			<!-- Upload File Button -->
			<label class="button mtop-xs green max-width-fit" :class="{'disabled': $store.getters['Hold/isLoading']}">
				<i class="fas fa-file-code"></i>
				<span>Choose File</span>
				<input type="file" name="importFille" accept=".json" @input="importData" hidden/>
			</label>


		</Modal>

		<!-- Hard Reset Modal -->
		<Modal size=""
			:show="hardResetModal"
			title="Erase Everything"
			icon="fas fa-triangle-exclamation"
			color="red"
			dismissText="Cancel"
			confirmText="Delete Everything"
			confirmIcon="fas fa-radiation"
			:disableConfirm="hardResetConfirmation.toLowerCase() != 'delete'"
			@confirmed="resetLocalStorage"
			@dismissed="hardResetModal = false">

			<p class="no-padding">
				This will clear your local storage for {{appName}} and reset all of your data and settings.
				<b>This can not be undone</b>
			</p>

			<!-- Confirm text -->
			<div class="max-width-tiny margin-auto align-center ptop-md">
				<label>Type "delete" to confirm:</label>
				<input class="align-center" v-model="hardResetConfirmation" type="text" placeholder="delete"/>
			</div>


		</Modal>


		<!-- Spacer -->
		<div class="mbottom-xl"></div>


	</div>
</template>

<script>
// Components
// import Callout from "@/components/ui/Common/Callout";
import Confirm from "@/components/ui/Modals/Confirm";
import Modal from "@/components/ui/Modals/Modal";
import ThemeEditor from "@/components/ui/Single/ThemeEditor";

import _orderBy from "lodash/orderBy";

export default {
	name: "settings",

	components: {
		// Callout,
		Confirm,
		Modal,
		ThemeEditor,
	},

	mixins: [
	],

	data() {
		return {
			appName: process.env.VUE_APP_COMPANY_NAME,

			themeModal: false,
			deletingAppData: null,
			exportModal: false,
			importModal: false,
			hardResetModal: false,
			hardResetConfirmation: "",

			// Available apps from site store
			apps: this.$store.getters["Site/apps"],

			// Available preferences
			preferences: {
				"dark_mode": {
					title: "Dark Mode",
					icon: "fas fa-moon-stars",
					description: "Turn off the lights. Dark background with darker colors.",
				},
				"animations": {
					title: "Motion",
					icon: "fas fa-clapperboard",
					description: "Control motion and animations used throughout the app.",
				},
				"outlines": {
					title: "Outlines",
					icon: "fas fa-border-bottom-right",
					description: "Dashed accessibility outline that appears when you click buttons or forms.",
				},
				"notifications": {
					title: "Notifications",
					icon: "fas fa-bell-on",
					description: "Check back in a bit. Notifications aren't quite ready yet.",
					// description: "Grant permissions to send push notifications on this device.",
					disabled: true,
				},
			}
		};
	},

	computed: {

		// test: {
		// 	get() {
		// 		return this.$store.getters["User/preferences"];
		// 	},
		// },
		sortedApps() {
			return _orderBy(this.apps, "category");
		},
		userPreferences: {
			get() {
				return this.$store.getters["User/preferences"];
			},
		},
		appData: {
			get() {
				return this.$store.getters["User/apps"];
			},
		},
		
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

		getAllLocalStorage: function() {
			return JSON.stringify(localStorage);
		},


		// Updates preference in store
		updatePreference: function(key){
			this.$store.dispatch("User/TOGGLE_PREFERENCE", key);
		},

		// Enable or disable app 
		toggleApp: function(key){
			this.$store.dispatch("User/TOGGLE_APP", key);
		},

		// Sets default app based on key
		setDefaultApp: function(key){
			this.$store.dispatch("User/UPDATE_PREFERENCE", {key: "start", value: key});
		},
		// Erases app data after confirmation
		eraseAppData: function(key){
			this.deletingAppData = key;
		},
		confirmDeleteAppData: function(){
			var appID = this.sortedApps[this.deletingAppData].id;
			var appTitle = this.sortedApps[this.deletingAppData].title;
			this.$store.dispatch("User/CLEAR_APP_DATA", appID);
			this.hello(appTitle + " Data Cleared!", "fas fa-check");
			this.deletingAppData = null;
		},


		// Data Management
		// Export output TextArea to Json File download
		exportData: function(){
			let _this = this;
			this.$store.dispatch("Hold/LOADING", "data");

			var destroyClickedElement = function(event) {
				// remove the link from the DOM
				document.body.removeChild(event.target);
			};

			// Take Textarea output and write to file.
            var textToWrite = JSON.stringify(localStorage);
            var textFileAsBlob = new Blob([textToWrite], { type: "text/json" });
            var fileNameToSaveAs = this.lettersAndNumbers(this.appName) + "_backup_" + this.$date().format("MMMDDYYtHHmm") + ".json";
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download";
            window.URL = window.URL || window.webkitURL;
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);

			setTimeout(() => {
            	downloadLink.click();
				_this.hello("Downloaded", "fas fa-smile", "green");
				_this.$store.dispatch("Hold/STOP_LOAD");
      		}, 500);

		},
		// Import Data
		importData: function(output){
			this.$store.dispatch("Hold/LOADING", "data");
			// output.target.files[0];
			var reader = new FileReader();
			reader.onload = this.processImport;
			reader.readAsText(output.target.files[0]);
		},
		processImport: function(event){
			let _this = this;

			var data = JSON.parse(event.target.result);

			var preferencesMerged = false;
			var appDataMerged = false;

			// Validate and save into store
			if(data["preferences"]){
				this.$store.commit("User/SET_PREFERENCES", data["preferences"]);
				preferencesMerged = true;
			}
			if(data["appData"]){
				this.$store.commit("User/SET_APP_DATA", data["appData"]);
				appDataMerged = true;
			}

			if(!preferencesMerged && !appDataMerged){
				var mergeInfo = "No Data Merged";
			}else{
				var mergeInfo = "Merged ";
			}
			if(preferencesMerged){
				mergeInfo = mergeInfo + "Preferences ";
				if(appDataMerged){ mergeInfo = mergeInfo + "& "; }
			}
			if(appDataMerged){
				mergeInfo = mergeInfo + "App Data";
			}

			setTimeout(() => {
				_this.hello(mergeInfo, "fas fa-check");
				_this.$store.dispatch("Hold/STOP_LOAD");
				_this.importModal = false;
      		}, 500);
		},

		// Reset Local Storage, refresh page
		resetLocalStorage: function(){
			// Clear local storage
			localStorage.clear();
			// Toast
			this.toast("Local Storage Cleared", "Your data & preferences have been cleared from your browser's local storage.", "", "fas fa-trash-alt");
			this.hardResetModal = false;
			this.hardResetConfirmation = "";
		},



	}
};

</script>


<style lang="scss">


.toggle-grid{
	display: flex;
	gap: 30px;
	flex-wrap: wrap;

	@media (max-width: $screenSM) {
		gap: 15px
	}

	.toggle-card{
		display: flex;
		flex-direction: column;
		flex-basis: 320px;
		border-radius: var(--borderRadius);
		box-shadow: var(--shadow);
		color: var(--text);
		background-color: var(--layer);

		@media (max-width: $screenSM) {
			flex-basis: 100%;
		}

		&.inactive{
			color: var(--textFade);

			.tc-main b,
			.tc-body p{
				color: var(--textFade);
			}
			.tc-main .tc-icon{
				background-color: transparent;
				color: var(--textFade);
			}
			.tag{
				opacity: 0.5;
			}
		}

		.tc-main{
			box-sizing: border-box;
			display: flex;
			padding: 20px 20px 12px 20px;

			@media (max-width: $screenSM) {
				padding: 20px 20px 10px 20px;
			}

			.tc-icon{
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
			.tc-input{
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
		.tc-body{
			box-sizing: border-box;
			padding: 0 20px 20px 20px;
			flex-grow: 3;

			p{
				margin: 0;
				padding: 0;
				line-height: 20px;
				font-size: 14px;
			}
		}
		// Footer
		.tc-footer{
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 15px 15px 15px;

			.tc-tags{
				display: flex;
				gap: 10px;
				text-transform: capitalize;

				.tag{
					&.system{background-color: var(--grey); color: var(--greyText);}
					&.productivity{background-color: var(--yellow); color: var(--yellowText);}
					&.home{background-color: var(--purple); color: var(--purpleText)}
					&.health{background-color: var(--pink); color: var(--pinkText)}
				}
			}
			.tc-actions{
				flex-grow: 3;
				display: flex;
				justify-content: flex-end;
				gap: 8px;
				
				.tc-action-button{
					height: 20px;
					line-height: 20px;
					font-size: 18px;
					color: var(--text);
					opacity: 0.2;
					transition: var(--transition);

					&:hover,
					&:focus{
						opacity: 1;
					}

					&.active{
						color: var(--blue);
						opacity: 1;
					}
				}
			}
		}
	}
}



// Data Management
#localStorageOutput{
	position: relative;
}
#localStorageTextarea{
	font-family: var(--monospace);
	font-size: 12px;
	line-height: 14px;
}
#localStorageTextareaButtons{
	position: absolute;
	bottom: 8px;
	right: 8px;
}



</style>