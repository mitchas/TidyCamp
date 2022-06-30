//! Hold Store
// Holds misc info for use throughout app

import { stateMerge } from "vue-object-merge";
import debounce from "lodash/debounce";
import router from "@/router";


const state = {
	// Data loaded. 0 = none,  1 = user, 2= user + profoile
	dataLoaded: 0,
	// Title of page - used on top bar and tab
	pageTitle: "Home Page",
	// Show loaders
	loading: false,


	// If true, confirm leave dialog appears before next navigate()
	confirmLeave: false,
	// If true, scrolling will lock (ie when modals are visible)
	scrollLock: false,

	// App Theme
	appTheme: "grey",

	// User device geolocation lat/lng
	geolocation: null,

	// Current App Version
	appVersion: "0.5.00",
};

const getters = {
	dataLoaded( state ) {
		return state.dataLoaded;
	},
	pageTitle( state ) {
		return state.pageTitle;
	},
	isLoading( state ) {
		return state.loading;
	},
	showConfirmLeave( state ) {
		return state.confirmLeave;
	},
	scrollLock( state ) {
		return state.scrollLock;
	},
	appTheme( state ) {
		return state.appTheme;
	},
	geolocation( state ) {
		return state.geolocation;
	},
	appVersion( state ) {
		return state.appVersion;
	},
};

const mutations = {
    DATA_LOADED(state, val) {
		state.dataLoaded++;
	},
    SET_PAGE_TITLE(state, val) {
		state.pageTitle = val;
	},
    SET_LOADING(state, val) {
		state.loading = val;
	},
    SET_CONFIRM_LEAVE(state, val) {
		state.confirmLeave = val;
	},
    SCROLL_LOCK(state, val) {
		state.scrollLock = val;
	},
    SET_APP_THEME(state, val) {
		state.appTheme = val;
	},
    UPDATE_GEOLOCATION(state, val) {
		state.geolocation = val;
	},
    SET_APP_VERSION(state, val) {
		state.appVersion = val;
	},
};


const actions = {
	// Updates tab and top bar title
	CHANGE_PAGE_TITLE({ commit }, value) {
		commit("SET_PAGE_TITLE", value);
		document.title = value;
	},
	
	// Loading
	LOADING({ commit, getters, dispatch }, value) {
		var type = "data";
		commit("SET_LOADING", type);

		// Auto timeout after 20s if it's not false
		setTimeout(function(){
			if(getters.isLoading != false){
				dispatch("STOP_LOAD");
			}
		}, 20000);
	},
	// Stop all loading indicators
	STOP_LOAD({ commit, getters, dispatch }) {
		if(getters.isLoading){
			commit("SET_LOADING", false);
		}
	},

	// Toggle leave confirmation
	CONFIRM_LEAVE({ commit }, value) {
		var x = true;
		if(!value){
			x = false;
		}
		commit("SET_CONFIRM_LEAVE", x);
	},

	
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};