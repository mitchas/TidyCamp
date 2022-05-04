//! Plugins
// Global methods to use in any mixin or component
//
// cleanArray(array): removes dupes from array
// 	scrollUp(): scrolls the page to top
// 	deplural(string): removes trailing s from string
// 	isValidURL(url): Returns true if URL is valid
// 	twentyFour(time): Converts 24h to 12hr
// 	lettersAndNumbers(string): Converts string to only letters and numbers and spaces
// 	spaceUnderscore(string): Converts spaces to underscorees
// 	underscoreSpace(string): Converts underscores to spaces
// 	spaceDash(string): Converts spaces to dashes
// 	dashSpace(string): Converts dashes to spaces
// 	navigate(route): pushes route to update vue router
// 	tab(url): opens url in new tab
// 	firebaseDashboard(type, payload): opens url in new tab
// 	share(shareTextt, alertText): Activates native sharing dialog or falls back to copy to clipboard
// 	copyToClipboard(name, value): Copies value to clipboard, shows toast confirmation
// 	toast(): provides easy this.toast() call to use in any component.
// 	hello(message, icon, color): Shows tiny yellow toast for a brief moment
// 	zoomTo(coordinates): Zooms to coordinates on map if available
// 	getGeolocation(): Gets device geolocation and stores in store
// 	linkPreview(link): Gets open graph data from url

import { _ } from "core-js";
import axios from "axios";

export default {

	install(Vue, options){

		// Array Duplicates
		// Removes duplicates in array
		Vue.prototype.cleanArray = function(array) {
			var a = array.concat();
			for(var i=0; i<a.length; ++i) {
				for(var j=i+1; j<a.length; ++j) {
					if(a[i] === a[j])
						a.splice(j--, 1);
				}
			}
			return a;
		};

		// Scroll up
		// Simply scrolls to top of page
		Vue.prototype.scrollUp = function() {
			document.getElementById("mainScrollView").scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			  });
		};


		// Removes S from string if it's the last letter
		Vue.prototype.deplural = function(string) {
			if(string){
				return string.toString().replace(/s$/, "");
			}else{
				return null;
			}
		};

		// Removes S from string if it's the last letter
		Vue.prototype.isValidURL = function(url) {
			const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
			this.validUrl = regex.test(url);
			return this.validUrl;
		};


		// Replace underscore with space
		Vue.prototype.twentyFour = function(time) {

			var split = time.split(":");
			var hours = parseInt(split[0]);
			var minutes = split[1];
			var ampm = "am";

			if(hours > 12){
				hours = hours - 12;
				ampm = "pm";
			}

			return hours + ":" + minutes + ampm;
		};

		// Replace string with only letters and numbers
		Vue.prototype.lettersAndNumbers = function(string) {
			return string.toString().replace(/[^a-z0-9 ]/gi,"");
		};
		// Replace underscore with space
		Vue.prototype.spaceUnderscore = function(string) {
			return string.toString().replace(/ /g,"_");
		};
		Vue.prototype.underscoreSpace = function(string) {
			return string.toString().replace(/_/g," ");
		};
		Vue.prototype.spaceDash = function(string) {
			return string.toString().replace(/ /g,"-");
		};
		Vue.prototype.dashSpace = function(string) {
			return string.toString().replace(/-/g," ");
		};

		// Navigate
		// Function to navigate with -> navigate("/route")
		// This lets you use custom elements that are accessible/focusable, rather than router-link
		// then use @click to navigate()
		Vue.prototype.navigate = function(route, confirm) {

			// If same route, don't navigate
			if(route == this.$route.path){
				return;
			}else{

				var confirmLeave = this.$store.getters["Hold/showConfirmLeave"];

				// If confirmLeave is true
				if(confirmLeave){
					// Show confirmation
					this.$root.$children[0].$refs.confirmLeaveComponent.confirmLeave(route);
				}else{
					// Else no confirmation needed
					this.$router.push(route);
					// document.documentElement.scrollTop = 0;
				}
			}
		};


		// Open url in new tab
		Vue.prototype.tab = function(url) {
			window.open(url, "_blank");
		};


		// Open url in new tab
		Vue.prototype.firebaseDashboard = function(type, payload) {
			var url = null;

			var projectId = "";
			projectId = process.env.VUE_APP_FIREBASE_PROJECTID;

			// Open to firestore uid
			if(type == "uid"){
				url = "https://console.firebase.google.com/project/" + projectId + "/firestore/data/~2Fusers~2F" + payload;
			}else if(type == "data"){
				url = "https://console.firebase.google.com/project/" + projectId + "/firestore/data/~2F" + payload.collection + "~2F" + payload.key;
			}else if(type == "auth"){
				// Open to auth page
				url = "https://console.firebase.google.com/u/0/project/" + projectId + "/authentication/users";
			}

			if(url){
				window.open(url, "_blank");
			}
		};

		// Native Sharing
		// Falls back to copy to clipboard
		Vue.prototype.share = function(shareText, alertText ) {
			var text = "Check this out: ";
			var thing = "Link";
			let _this = this;


			if(shareText){
				text = shareText;
			}
			if(alertText){
				thing = alertText;
			}

			if (navigator.share) {
				navigator.share({
					title: document.title,
					text: text,
					url: location.href,
				})
				.catch((error) => _this.$ope().error("Error sharing", error));
			}else{
				this.copyToClipboard(thing, location.href);
			}
		};

		// Copy value to device clipboard 
		Vue.prototype.copyToClipboard = function(name, value) {
			// Create input element, append text, copy text, remove element
			var inp =document.createElement("input");
			document.body.appendChild(inp);
			inp.value = value;
			inp.select();
			document.execCommand("copy",false);
			inp.remove();
			// Toast
			if(name){
				this.hello(name + " copied to clipboard. ", "far fa-copy", "blue");
			}
		};

		// Toast & Hello
		// Toast & Hello
		Vue.prototype.toast = function(title, body, color, icon, path, info) {
			this.$root.$children[0].$refs.toastComponent.showToast(title, body, color, icon, path, info);
			if(this.$store.getters["Device/hasSmallScreen"] && this.$store.getters["Device/hasTouch"]){
				navigator.vibrate(15);
			}
		};
		Vue.prototype.hello = function(message, icon, color) {
			this.$root.$children[0].$refs.alertComponent.showAlert(message, icon, color);
			if(this.$store.getters["Device/hasSmallScreen"] && this.$store.getters["Device/hasTouch"]){
				navigator.vibrate(15);
			}
		};

		// Zoom to if map is available
		Vue.prototype.zoomTo = function(coordinates) {
			this.$store.dispatch("Map/CHANGE_MAP_CENTER", coordinates);
			this.$store.dispatch("Map/CHANGE_MAP_ZOOM", 11);
			this.$store.dispatch("Map/CHANGE_MAP_DISPLAY", "visible");
		};

		// Get Geolocation
		Vue.prototype.getGeolocation = function(noAlerts) {
			let _this = this;

			return new Promise((resolve, reject) => {

				var geoloc = null;

				var showAlert = true;
				if(noAlerts && noAlerts == true){
					showAlert = false;
				}

				if(showAlert){
					_this.hello("Getting Location...", "far fa-location");
				}

				navigator.geolocation.getCurrentPosition(
					function(position) {
						geoloc = {
							lat: position.coords.latitude,
							lon: position.coords.longitude,
							updated: new Date(),
						};
						_this.$store.commit("Hold/UPDATE_GEOLOCATION", geoloc);
						resolve(geoloc);
						if(showAlert){
							_this.hello("Geolocation Updated", "far fa-map-marker-smile", "green");
						}
					},
					function(error){
						_this.$ope().error(error.message);
						if(showAlert){
							if(error.code == 3){
								_this.hello("Location Timed Out", "far fa-location-slash", "red");
							}else{
								_this.hello("Unable to access your location", "far fa-location-slash", "red");
							}
						}
						reject(error);
					}, {
						enableHighAccuracy: true,
						timeout : 5000
					}
				);
	
			});


			
		};

		// Get Convert rich blocks to HTML
		Vue.prototype.linkPreview = function(url) {
			return new Promise((resolve, reject) => {

				let _this = this;

				var encodedURL = encodeURIComponent(url);
				var key = process.env.VUE_APP_OPENGRAPH_KEY;
				var getURL = "https://opengraph.io/api/1.1/site/" + encodedURL + "?app_id=" + key;
				
				axios.get(getURL).then(response => {
					resolve(response.data.hybridGraph);
				}).catch(e => {
					reject(e);
				});

				
				
				
			});
		};
		
	
	}
  
 };