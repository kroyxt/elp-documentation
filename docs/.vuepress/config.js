module.exports = {
  // Titolo de la projekto
  title: 'Encapsulated Language Project',

  // Priskribo de la projekto
	description: 'Documentation',


	head: [
    // Favicon
    // ĉi tiu doziero estas en docs/.vuepress/public/img
		[ 'link', { rel: 'icon', href: '/img/icon.png' } ]
	],

	themeConfig: {

    // Logo kiu estas montrita supran dekstron de la retpaĝo
    // ĉi tiu doziero estas en docs/.vuepress/public/img
		logo: '/img/logoHeader.png',

    // Menuo kiu estas montrita supran maldekstron de la retpaĝo
		 nav: [
      { text: 'Home', link: '/' },
      { text: 'Reddit', link: 'https://www.reddit.com/r/EncapsulatedLanguage/new/' },
			{ text: 'Youtube', link: 'https://www.youtube.com/channel/UCqqCQngo0EGuFVs6A9UUTUA/' },
			{ text: 'Discord', link: 'https://discord.gg/8WvgTRF'}
    ],

		displayAllHeaders: true, // Default: false

    // SideBar
    sidebar: [

      // Ĉefa sekcio de la dokumentado
      {
        title: 'Documentation',
        path: '/documentation',
        collapsable: true,
        children: [
          '/documentation'
        ]
      },

      // Draft Proposals sekcio
      {
        title: 'Draft Proposals',
				path: '/proposals/draft',
        children: [
          '/proposals/draft/calendar',
          '/proposals/draft/colors',
          '/proposals/draft/communityAdministration',
          '/proposals/draft/countryNames',
          '/proposals/draft/logo',
          '/proposals/draft/name',
          '/proposals/draft/numberBase',
          '/proposals/draft/numbers',
          '/proposals/draft/numerals',
          '/proposals/draft/phonology',
          '/proposals/draft/phonotactics',
          '/proposals/draft/script',
          '/proposals/draft/shapes',
        ]
      },

      // Official proposals sekcio
      {
        title: 'Official Proposals',
        path: '/proposals/official/',
        children: [
          '/proposals/official/'
        ]
      },

      // FAQ sekcio
      {
        title: 'FAQ',
        path: '/faq/',
        children: [
          '/faq/'
        ]
      }
    ],

		repo: 'kroyxlab/elp-documentation',
		repoLabel: 'Contribute!',
		docsRepo: 'kroyxlab/elp-documentation',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    smoothScroll: true
	},
	plugins: ['@vuepress/back-to-top'],
	base: '/elp-documentation/'
}
