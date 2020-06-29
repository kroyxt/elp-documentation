module.exports = {
  title: 'Encapsulated Language Projects',
	description: 'Documentation',
	head: [
		[ 'link', { rel: 'icon', href: '/img/icon.png' } ]
	],
	themeConfig: {
		logo: '/img/logo.jpg',
		 nav: [
      { text: 'Reddit', link: 'https://www.reddit.com/r/EncapsulatedLanguage/new/' },
			{ text: 'Youtube', link: 'https://www.youtube.com/channel/UCqqCQngo0EGuFVs6A9UUTUA/' },
			{ text: 'FAQ', link: '/faq/'}
    ],
		displayAllHeaders: true, // Default: false
		sidebar: 'auto',
		repo: 'kroyxlab/elp-documentation',
		repoLabel: 'Contribute!',
		DocsRepo: 'kroyxlab/elp-documentation',
		DocsDir: 'docs',
		editsLinks: true
	},
	plugins: ['@vuepress/back-to-top'],
	base: '/elp-documentation/'
}