//! Plugins
// Global functions to use in any mixin or component

import { _ } from "core-js";

export default {

	install(Vue, options){

		// Toast & Hello
		// Sends notifications to root component to display
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

		// Scroll up
		// Simply scrolls to top of page
		Vue.prototype.scrollUp = function() {
			document.getElementById("mainScrollView").scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			  });
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

		// Navigate
		// Function to navigate with -> navigate("/route")
		// then use @click to navigate()
		// Checks if Confirm Leave is enabled
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
	
	}
  
 };