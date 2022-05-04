//! thing category definitions
// 	various definitions and data structures to reference and use throughout
// 

module.exports = {

	// theme colors
	theme_colors: [
		"transparent", "grey", "blue", "green", "red", "yellow", "orange", "pink", "purple"
	],

	// available icons for lists and things
	icon_options: [ 
		"address-book", "alarm-clock", "album-collection", "alien", "alien-monster", "ambulance", "apple-crate", "atlas", "atom",  "award", 
		"baby", "baby-carriage", "backpack", "badger-honey", "bags-shopping", "baseball", "basketball-hoop", "beer", "bed-alt", "bicycle", "binoculars", "birthday-cake", "bolt", "book-spells", "books", "bread-loaf", "burger-soda", "burrito",  "bus",
		"camera-retro", "campfire", "campground", "car-side", "car", "cat", "cat-space", "charging-station", "chart-scatter", "cheese-swiss", "cheeseburger", "church", "clipboard-list", "city", "cocktail", "coffee", "coffee-togo", "compass", "comment-alt-dots", "cookie", "croissant",
		"deer", "dice", "dice-d20", "dollar-sign", "dog", "drone", "drone-alt", "drumstick", "duck", "egg-fried", "envelope-open-text", "eye", "eye-evil", "farm", "feather", "fingerprint", "fire-alt", "fish", "fist-raised", "flag-usa", "flask-potion", "flower", "football-ball", "french-fries", "frog", "futbol", 
		"game-console-handheld", "gas-pump", "gem", "ghost", "gift", "glass-cheers", "glass-whiskey-rocks", "globe-americas", "golf-ball", "graduation-cap", "guitar",
		"hamsa", "hard-hat", "hat-chef", "heart", "heartbeat", "hockey-sticks", "home", "horse", "hospital-alt", "hotdog", "ice-cream", "ice-skate", "icicles", "igloo", "industry-alt", "infinity", "jack-o-lantern", "joint", "joystick", 
		"key-skeleton", "landmark-alt", "leaf-maple", "leaf-oak", "lemon", "lightbulb", "lights-holiday", "lips", "location", "lock-alt", "luchador", "magic", "map-marked-alt", "map-marker-alt", "map-marker-smile", "map-signs", "medal", "microphone-stand", "microscope", "misletoe",
		"mitten", "money-bill", "monkey", "moon", "mosque", "music", "newspaper", "paperclip", "palette", "paper-plane", "paw", "peace", "pencil-alt", "pepper-hot", "piano", "piano-keyboard", "pie", "pizza-slice", "poo", "popcorn", "puzzle-piece", "racquet", "rainbow", "raygun", "receipt", "rings-wedding", "road", "robot", "route",
		"salad", "sandwich", "sausage", "sax-hot", "seedling", "shapes", "ship", "shovel-snow", "sign-language", "siren-on", "ski-lift", "snowflake", "snowboarding", "snowman", "snowmobile", "squirrel", "steak", "sticky-note", "stroopwafel", "suitcase-rolling",  "synagogue",
		"tablets", "taco", "tanakh",  "telescope", "thumbs-up", "theater-masks", "tint", "tire", "toilet", "tractor", "tree", "tree-alt", "trophy-alt", "truck-pickup", "tv-retro", "ufo-beam", "unicorn", "university", 
		"utensils", "vial",  "virus","volleyball-ball", "whistle", "wreath", 

	 ],

	// =============================
	// =============================
	// News
	// =============================
	// =============================
	// Categories
	newsCategories: {
		all: {
			name: "all",
			title: "all categories",
			description: "",
			icon: "newspaper",
		},
		community: {
			name: "community",
			title: "community",
			description: "",
			icon: "home-heart",
		},
		justice: {
			name: "justice",
			title: "justice & policing",
			description: "",
			icon: "balance-scale-left",
		},
		climate: {
			name: "climate",
			title: "climate & environment",
			description: "",
			icon: "globe-americas",
		},
		arts: {
			name: "arts",
			title: "arts, culture, & leisure",
			description: "",
			icon: "theater-masks",
		},
		politics: {
			name: "politics",
			title: "democracy, government, & politics",
			description: "",
			icon: "box-ballot",
		},
		business: {
			name: "business",
			title: "business & work",
			description: "",
			icon: "briefcase",
		},
		education: {
			name: "education",
			title: "education",
			description: "",
			icon: "bell-school",
		},
		infrastructure: {
			name: "Infrastructure & Operations",
			title: "infrastructure",
			description: "",
			icon: "road",
		},
		health: {
			name: "health",
			title: "health",
			description: "",
			icon: "heartbeat",
		},
		sports: {
			name: "sports",
			title: "sports",
			description: "",
			icon: "whistle",
		},
		weather: {
			name: "weather",
			title: "weather",
			description: "",
			icon: "thunderstorm-sun",
		},

	},

	// News Outlets
	newsOutlets: {
		"MPR": {
			id: "mpr",
			title: "MPR",
			url: "https://www.mprnews.org/",
		},
		"Star Tribune": {
			id: "startribune",
			title: "Star Tribune",
			url: "https://www.startribune.com/",
		},
		"Pioneer Press": {
			id: "pioneerpress",
			title: "Pioneer Press",
			url: "https://www.twincities.com/",
		},
		"MinnPost": {
			id: "minnpost",
			title: "MinnPost",
			url: "https://www.minnpost.com/",
		},
		westcentraltribune: {
			id: "westcentraltribune",
			title: "West Central Tribune",
			url: "https://www.wctrib.com/",
		},
		"St. Cloud Times": {
			id: "stcloudtimes",
			title: "St. Cloud Times",
			url: "https://www.sctimes.com/",
		},
		"Austin Daily Herald": {
			id: "austindailyherald",
			title: "Austin Daily Herald",
			url: "https://www.austindailyherald.com/",
		},
		"Duluth News Tribune": {
			id: "duluthnewstribune",
			title: "Duluth News Tribune",
			url: "https://www.duluthnewstribune.com/",
		},
		"Racket": {
			id: "racket",
			title: "Racket",
			url: "https://racketmn.com/",
		},
		"Axios": {
			id: "axios",
			title: "Axios",
			url: "https://www.axios.com/local/twin-cities/",
		},
		"Sahan Journal": {
			id: "sahanjournal",
			title: "Sahan Journal",
			url: "https://sahanjournal.com/",
		},
		"Minnesota Reformer": {
			id: "minnesotareformer",
			title: "Minnesota Reformer",
			url: "https://minnesotareformer.com/",
		},
		"Business Journal": {
			id: "mnbusinessjournal",
			title: "Business Journal",
			url: "https://www.bizjournals.com/twincities/",
		},
		"Bring Me The News": {
			id: "bringmethenews",
			title: "Bring Me The News",
			url: "https://www.bringmethenews.com/",
		}
		
	},

	

	// =============================
	// =============================
	// Things
	// =============================
	// =============================
	//  thing categories
	// food, shopping, recreation, arts, entertainment, wellbeing, public, business, music, creative
    thing_categories : {
		all: {
			name: "all",
			title: "all categories",
			description: "All kinds of things from all different categories",
			icon: "shapes",
		},
		food: {
			name: "food",
			title: "food & drinks",
			description: "Places that serve food & drinks - restaurants, breweries, etc",
			icon: "utensils-alt",
		},
		shopping: {
			name: "shopping",
			title: "shopping & goods",
			description: "Shops, stores, and companies that make or sell goods, food, or beverages.",
			icon: "tags",
		},
		recreation: {
			name: "recreation",
			title: "parks, recreation, & outdoors",
			description: "Parks, sports, adventures, and anything active or outdoors.",
			icon: "tree-alt",
		},
		arts: {
			name: "arts",
			title: "arts & culture",
			description: "Museums, theaters, galleries, and public art.",
			icon: "theater-masks",
		},
		entertainment: {
			name: "entertainment",
			title: "entertainment & amusements",
			description: "Live entertainment, gaming, festivals, fairs, and more",
			icon: "laugh",
		},
		wellbeing: {
			name: "wellbeing",
			title: "wellbeing",
			description: "Health, wellness, beauty, fitness, and personal growth.",
			icon: "head-side-brain",
		},
		public: {
			name: "public",
			title: "institutions & religion",
			description: "Government, public services, universities, and religion.",
			icon: "university",
		},
		business: {
			name: "business",
			title: "business & startups",
			description: "New or well established businesses.",
			icon: "chart-line",
		},
		music: {
			name: "music",
			title: "musicians & bands",
			description: "Individuals or goups who make or perform music.",
			icon: "sax-hot",
		},
		creative: {
			name: "creative",
			title: "creative & makers",
			description: "Authors, artists, comedians, woodworkers, and more.",
			icon: "signature",
		},
		other: {
			name: "other",
			title: "other",
			description: "Places and things that don't fit anywhere else.",
			icon: "shapes",
		},
	},

	// subcategories
	thing_subcategories: {
		food: {
			"alcohol":["brewery", "brewpub", "cidery", "cocktail lounge", "distillery", "dive bar", "karaoke bar", "meadery", "nightclub", "sports bar", "taproom", "wine bar", "winery", "other"],
			"buffet":["all day buffet", "breakfast buffet", "brunch buffet", "dessert bar", "dinner buffet", "pizza buffet", "salad buffet", "other"],
			"cafe":["coffee shop", "tea house", "grab and go", "restaurant & cafe", "bakery", "other"],
			"casual":["deli", "diner", "greens", "grill", "ice cream", "noodles", "pizza", "sandwiches", "seafood", "smokehouse", "steakhouse", "sushi", "treats", "other"],
			"fast food":["burgers", "chicken", "drive-in", "fish", "hot dogs", "gyros", "noodles", "pizza", "sandwiches", "tacos", "other"],
			"food truck":["fried food", "healthy", "sweets", "sandwiches", "coffee", "ice cream", "tacos", "other"],
			"ghost kitchen":["burgers", "chicken", "fish & chips", "fusion", "hot dogs", "kebab", "noodles", "pizza", "sandwiches", "tacos", "other"],
			"upscale":["coffee shop", "fine dining", "patiserie", "seafood", "smokehouse", "steakhouse", "sushi", "tapas", "tasting menu", "treats", "other"],
			"other":[ "food hall", "family style", "other"],
		},
		shopping: {
			"specialty shops": ["art supplies", "book store", "clothing & accessories", "electronics", "equipment", "furniture", "hardware", "homegoods", "office supplies", "outdoor", "pet shops", "record shops", "specialty supplies", "sporting goods", "toystores", "vintage", "other"],
			"convenience store": ["bait shops", "expanded convenience stores", "gas stations", "other"],
			"discount shops": ["consignment", "discount grocery", "dollar stores", "thrift shops", "other"],
			"drug stores": ["pharmacy", "community pharmacy", "compounding pharmacy", "hospital pharmacy", "other"],
			"markets & grocery stores": ["supermarkets", "corner markets", "co-op", "farmers markets", "produce stands", "other"],
			"warehouse stores": ["warehouse clubs", "lumber yards", "home improvement", "construction", "other"],
			"other": ["other"],
		},
		arts: {
			"theaters": ["music venues", "live theaters", "movie theaters", "comedy clubs", "other"], 
			"museums": ["history & cultural", "art & galleries", "science & technology", "natural history", "zoos & aquariums", "war & politics", "other"],
			 "galleries": ["local artists", "consignment", "co-ops", "other"],
			 "performing arts": ["dance", "opera", "music", "drama", "magic & puppetry", "other"],
			"murals & public art": ["murals", "art installations", "art walks", "sculptures", "other"], 
			"other": ["other"],
		},
		entertainment: {
			"casinos & gambling": ["casinos", "betting", "bingo", "other"],
			"amusement": ["amusement parks", "mini golf", "arcades", "festivals", "laser tag", "go-karts", "water parks", "other"],
			"live entertainment": ["live music", "improv", "drag shows", "burlesque", "variety shows",  "other"],
			"other": ["other"],
		},
		recreation: {
			"physical activities": ["hiking", "biking", "climbing", "hunting", "ski & snowboard", "motor sports", "skateboarding", "other"],
			"nature": ["wilderness areas", "lakes", "gardens", "public land", "preserves", "other"],
			"parks": ["city parks", "regional parks", "state parks", "dog parks", "sports areas", "stadiums", "other"],
			"attractions": ["roadside attractions", "landmarks", "other"],
			"other": ["other"],
		},
		wellbeing: {
			"classes": ["cooking", "skilled crafts", "arts & textiles", "life skills", "other"],
			"health": ["physical", "mental health", "care", "other"],
			"wellness": ["massage", "spa", "other"],
			"beauty": ["hair salon", "nail salon", "makeup", "wigs", "other"],
			"fitness": ["gym", "fitness studio", "athletic club", "personal training", "other"],
			"other": ["other"],
		},
		public: {
			"assistance": ["food bank", "shelters", "government", "other"],
			"ammenities": ["libraries", "parking lots", "pools", "beaches", "other"],
			"transportation": ["bus station", "train station", "airport", "other"],
			"infrastructure": ["bridges", "tunnels", "other"],
			"religion": ["churches", "mosques", "temples", "synagogues", "other"],
			"education": ["colleges & universities", "grade schools", "other"],
			"government": ["state government", "local government", "federal government", "other"],
			"other": ["other"],
		},
		business: {
			"entrepreneurship": ["startups", "coworking", "side hustles", "other"],
			"non profits": ["health", "social welfare", "justice", "business", "other"],
			"technology": ["software", "energy", "electronics", "engineering", "biotech", "fintech",  "other"],
			"manufacturing": ["food production", "equipment", "consumer goods", "transportation", "chemical", "textiles", "metalworks", "other"],
			"beauty, health & wellness": ["makeup", "personal care", "physical health", "mental health", "other"],
			"services": ["legal", "b2b", "construction", "landscaping", "architects", "real estate", "insurance", "financial", "transportation", "other"],
			"homes": ["cleaning", "renovation", "rentals", "real estate", "other"],
			"other": ["other"],
		},
		music: {
			"band": ["indie", "pop", "rap", "edm", "blues", "classical", "rock", "jazz", "r&b", "country", "other"],
			"solo artist": ["indie", "pop", "rap", "edm", "blues", "classical", "rock", "jazz", "r&b", "country", "other"],
			"other": ["other"],
		},
		creative: {
			"writing": ["authors", "blogging", "journalism", "other"],
			"talent": ["comedians", "chefs & bakers", "athletes", "actors", "drag queens", "other"],
			"visual": ["photo & video", "design", "models", "artists", "other"],
			"other": ["other"],
		},
		other: {
			"places": ["random places", "abandoned places", "spooky places", "other"],
			"things": ["random things", "other"],
			"other": ["other"],
		},
	},
	// food cuisines
	cuisines: [
		"african","american","argentine","asian","cajun","caribbean","chinese","french","geek","german","indian","italian","japanese","korean","mediterranean","mexican","native american","polish","somali","spanish","thai","vietnamese","other"
	],



	// =============================
	// =============================
	// Events
	// =============================
	// =============================
	// event categories
	event_categories : {
		all: {
			name: "all",
			title: "all categories",
			description: "All kinds of events from all categories",
			icon: "calendar-alt",
		},
		celebration: {
			name: "celebration",
			title: "celebration",
			description: "Birthdays, anniversaries, new years parties, and more.",
			icon: "birthday-cake",
		},
		entertainment: {
			name: "entertainment",
			title: "entertainment",
			description: "Live performances, dances, theater, and more.",
			icon: "theater-masks",
		},
		music: {
			name: "music",
			title: "music",
			description: "Live musical events, concerts, and shows.",
			icon: "music",
		},
		community: {
			name: "community",
			title: "community, government, & politics",
			description: "Block parties, meetups, protests, politics, and more.",
			icon: "home-heart",
		},
		business: {
			name: "business",
			title: "restaurants, shops, & business",
			description: "Grand openings, pop ups, markets, conferences, and more.",
			icon: "store",
		},
		wellbeing: {
			name: "wellbeing",
			title: "wellbeing",
			description: "Health, wellness, fitness, and personal growth.",
			icon: "head-side-brain",
		},
		sports: {
			name: "sports",
			title: "sports & activities",
			description: "Focused on sports and other physical activities.",
			icon: "pennant",
		},
		other: {
			name: "other",
			title: "other",
			description: "Events that don't really fit anywhere else.",
			icon: "ellipsis-h",
		},
	},

	// event subcategories
	// all, celebration, entertainment, music, community, business, wellbeing, sports
	event_subcategories: {
		celebration: {
			"holiday": ["new years", "christmas", "halloween", "4th of july", "valentines", "other"],
			"personal": ["birthday", "going away", "graduation", "welcome home", "housewarming", "surprise", "other"],
			"family": ["engagement", "wedding", "anniversary", "adoption", "baby shower", "other"],
			"other": null,
		},
		entertainment: {
			"live shows": ["stand up", "improv", "drag", "dancing", "other"],
			"dance": ["ball", "formal", "semi-formal", "other"],
			"theater": ["movie", "opera", "musical", "play", "other"],
			"other": null,
		},
		music: {
			"live show": ["pop", "rap", "hip-hop", "rock", "folk", "alternaive", "jazz", "country", "soul", "edm", "punk", "metal", "other"],
			"party": ["after party", "pre party", "release party", "other"],
			"other": null,
		},
		community: {
			"activism": ["protest", "vigil", "mutual aid", "other"],
			"neighborhood": ["block party", "meeting", "clean up", "other"],
			"charity": ["food drive", "fundraiser", "volunteering", "other"],
			"government": ["school board", "city council", "state government", "local government", "other"],
			"politics": ["fundraiser", "rally", "town hall", "other"],
			"hobbies": ["meetup", "cars", "crafts", "book club", "other"],
			"employment": ["job fair", "hiring event", "other"],
			"other": null,
		},
		business: {
			"shopping": ["pop up", "vintage market", "craft market", "grand opening", "sale", "store closing", "other"],
			"restaurants": ["pop up", "grand opening", "tasting", "release", "other"],
			"networking": ["conference", "trade show", "expo", "meetup", "presentation", "class", "other"],
			"other": null,
		},
		wellbeing: {
			"education": ["class", "lecture", "demonstration", "workshop", "other"],
			"health": ["mental health", "physical health", "other"],
			"fitness": ["workout", "yoga", "training", "other"],
			"other": ["financial", "other"],
		},
		sports: {
			"team sports": ["baseball", "basketball", "cricket", "football", "hockey", "soccer", "tennis", "volleyball", "softball", "other"],
			"action sports": ["skateboarding", "BMX", "scooter", "mountain biking", "other"],
			"winter sports": ["snowboarding", "skiing", "sledding", "ice skating", "other"],
			"motor sports": ["racing", "dirtbike", "snowmobile", "other"],
			"outdoors": ["hunting", "fishing", "other"],
			"other": null,
		},
		other: {
			"other": null,
		},
	}


	
};