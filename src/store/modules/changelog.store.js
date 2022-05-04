//! Changelog Store

const state = {

	lastupdate: "March 10, 2022",
	// Changes
	changes: [
		{
			date: "March 10, 2022",
			title: "Initial Deployment",
			description: "Deploying the site for the first time.",
			icon: "fas fa-check-double",
			color: "red",
			tag: "",
			items: [
				"Entirely new site.",
				"No changes, it's all new."
			]
		},
	]

};

const getters = {
	lastupdate(state){
		return state.lastupdate;
	},
	changes(state){
		return state.changes;
	},
};


const mutations = {
};


const actions = {
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};