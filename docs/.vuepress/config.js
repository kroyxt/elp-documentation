module.exports = {
  title: 'Encapsulated Language Projects',
	description: 'Documentation',
	head: [
		[ 'link', { rel: 'icon', href: '/img/icon.png' } ]
	],
	themeConfig: {
		logo: '/img/logo.jpg',
		 nav: [
      { text: 'Home', link: '/' },
      { text: 'Reddit', link: 'https://www.reddit.com/r/EncapsulatedLanguage/new/' },
			{ text: 'Youtube', link: 'https://www.youtube.com/channel/UCqqCQngo0EGuFVs6A9UUTUA/' },
    ],
		displayAllHeaders: true, // Default: false
    sidebar: [
      {
        title: 'Documentation',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/'
        ]
      },
      {
        title: 'Proposals',
        path: '/proposals/draft/',
        collapsable: true,
        children: [
          '/proposals/draft/',
          '/proposals/official/'
        ]
      },
      {
        title: 'FAQ',
        collapsable: true,
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
