//! Site Store

const state = {

	// Project info
	data: {

		// Active apps
		apps: {
			tasks: {
				id: "tasks",
				title: "Tasks",
				headline: "Daily tasks and reminders",
				description: "Simple tasks and recurring reminders with notifications",
				path: "/tasks",
				icon: "fas fa-check-double",
				color: "red",
				category: "productivity",
			},
			time: {
				id: "time",
				title: "Time Tracking",
				headline: "Keep track of your time",
				description: "Simple timekeeping for tasks with weekly reports and exporting.",
				path: "/time",
				icon: "fas fa-chess-clock",
				color: "sky",
				category: "productivity",
			},
			travel: {
				id: "travel",
				title: "Travel Planner",
				headline: "Organize your trips",
				description: "Plan and organize your trips & travels with a timeline, packing list, and more.",
				path: "/travel",
				icon: "fas fa-map-location",
				color: "purple",
				category: "productivity",
			},
			water: {
				id: "water",
				title: "Water",
				headline: "Remember to stay hydrated",
				description: "Water intake tracking and reminders so you stay hydrated",
				path: "/water",
				icon: "fas fa-glass",
				color: "orange",
				category: "health",
			},
			food: {
				id: "food",
				title: "Food",
				headline: "Daily food tracking",
				description: "Simple tracking for your meals or calories with notes",
				path: "/food",
				icon: "fas fa-fork-knife",
				color: "yellow",
				category: "health",
			},
			fasting: {
				id: "fasting",
				title: "Fasting",
				headline: "Follow a fasting cycle",
				description: "Reminders and tracking to stay on top of your fasting schedule",
				path: "/fasting",
				icon: "fas fa-empty-set",
				color: "yellow",
				category: "health",
			},
			pills: {
				id: "pills",
				title: "Pills",
				headline: "Medication schedule",
				description: "A schedule and task list for your daily pills & medications",
				path: "/pills",
				icon: "fas fa-pills",
				color: "pink",
				category: "health",
			},
			pantry: {
				id: "pantry",
				title: "Pantry",
				headline: "Waste less food",
				description: "Track your food supply with reminders and tips so you can throw less out",
				path: "/pantry",
				icon: "fas fa-can-food",
				color: "green",
				category: "home",
			},
			recipes: {
				id: "recipes",
				title: "Recipes",
				headline: "Simple recipes & cooking",
				description: "A simple tool for storing recipes and adjusting measurements",
				path: "/recipes",
				icon: "fas fa-hat-chef",
				color: "blue",
				category: "home",
			},
			settings: {
				id: "settings",
				title: "Settings",
				headline: "Set up camp",
				description: "Adjust how tidy.camp looks, behaves, and manages your data.",
				path: "/settings",
				icon: "fas fa-gear",
				class: "settings",
				color: "blue",
				persistent: true,
				category: "system",
			},
		}
	},

};

const getters = {
	apps(state){
		return state.data.apps;
	}
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