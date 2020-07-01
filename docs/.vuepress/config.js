module.exports = {
  // Titolo de la projekto
  title: 'Encapsulated Language Projects',

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
		logo: '/img/logo.jpg',

    // Menuo kiu estas montrita supran maldekstron de la retpaĝo
		 nav: [
      { text: 'Home', link: '/' },
      { text: 'Reddit', link: 'https://www.reddit.com/r/EncapsulatedLanguage/new/' },
			{ text: 'Youtube', link: 'https://www.youtube.com/channel/UCqqCQngo0EGuFVs6A9UUTUA/' },
    ],

		displayAllHeaders: true, // Default: false

    // SideBar
    sidebar: [

      // Ĉefa sekcio de la dokumentado
      {
        title: 'Documentation',
        path: '/',
        collapsable: false,
        children: [
          '/'
        ]
      },

      // Draft Proposals sekcio
      {
        title: 'Draft Proposals',
        path: '/proposals/draft',
        children: [
          '/proposals/draft/name',
          '/proposals/draft/logo',
          '/proposals/draft/communityAdministration',
          '/proposals/draft/numberBase',
          '/proposals/draft/numerals',
          '/proposals/draft/phonology',
          '/proposals/draft/countryNames',
          '/proposals/draft/calendar',
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
		DocsRepo: 'kroyxlab/elp-documentation',
		DocsDir: 'docs',
		editsLinks: true,
    lastUpdated: 'Last Updated',
    smoothScroll: true
	},
	plugins: ['@vuepress/back-to-top'],
	base: '/elp-documentation/'
}
