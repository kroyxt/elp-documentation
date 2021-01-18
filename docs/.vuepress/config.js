module.exports = {
	// Title of the projects
	title: "Encapsulated Language Project",
	// Description of the projects
	description: "Documentation",
	// Favicon icon
	head: [["link", { rel: "icon", href: "/img/icon.png" }]],
	// Configuration of the theme
	themeConfig: {
		// Disable search box
		search: false,
		// Elp logo
		logo: "/img/logoHeader.png",
		// Nav bar
		nav: [
			// Link to documentation.md
			{ text: "Home", link: "/documentation" },
			// Go to proposals
			{
				text: "Proposals",
				items: [
					// Link to Officials proposals
					{ text: "Officials", link: "/proposals/official/" },
					// Link to Drafts proposals
					{ text: "Drafts", link: "/proposals/draft/" },
				],
			},
			// Link to Lives Documents
			{
				text: "Live Documents",
				link:
					"https://docs.google.com/document/d/1mysBSSm_bsXDDoMxw5qlnvR-bk1M00z-GbdEqRerWJ8/edit?usp=sharing",
			},
			// Go to Social media pages
			{
				text: "Follow Us",
				items: [
					// Link to Reddit
					{
						text: "Reddit",
						link: "https://www.reddit.com/r/EncapsulatedLanguage/new/",
					},
					// Link to Youtube Channel
					{
						text: "Youtube",
						link: "https://www.youtube.com/channel/UCqqCQngo0EGuFVs6A9UUTUA/",
					},
					// Link to Discord Server
					{ text: "Discord", link: "https://discord.gg/8WvgTRF" },
				],
			},
			{
				text: "FAQ",
				link: "/faq/",
			},
		],
		displayAllHeaders: true,
		// Sidebar Nav links
		sidebar: {
			// Sidebar of Officials Proposals
			"/proposals/official/": [
				"", // to -> /proposals/official/README.md
				"AimsAndGoals", // to -> /proposals/official/AimsAndGoals.md
				"CommunityAdministration",
				"Phonology",
				"Romanization",
				"NumberBase",
				"PhonologicalValues",
				"OrthographicNumerals",
				"OrthographicSymbols",
				"NumberWords",
				"WordOrder",
				"Mathematics",
				"Color",
                                "Shapes",
				"Grammar",
				"Country",
				"Logo",
			],
			// Sidebar of Drafts Proposals
			"/faq/": [""],
			// Fallback Sidebar
			"/": ["documentation", "encapsulation", "history", "programs"],
		},
		// Repository info: owner/name-of-repository
		docsRepo: "kroyxlab/elp-documentation",
		// Docs folder in repository
		docsDir: "docs",
		editLinks: true,
		editLinkText: "Help us improve this page!",
		lastUpdated: "Last Updated",
		smoothScroll: true,
	},
	plugins: ["@vuepress/back-to-top"],
	base: "/elp-documentation/",
};
