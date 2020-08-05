module.exports = {
  title: 'Encapsulated Language Project',
  description: 'Documentation',
  head: [
    [ 'link', { rel: 'icon', href: '/img/icon.png' } ]
  ],
  themeConfig: {
    logo: '/img/logoHeader.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reddit', link: 'https://www.reddit.com/r/EncapsulatedLanguage/new/' },
      { text: 'Youtube', link: 'https://www.youtube.com/channel/UCqqCQngo0EGuFVs6A9UUTUA/' },
      { text: 'Discord', link: 'https://discord.gg/8WvgTRF'}
    ],
    displayAllHeaders: true, // Default: false
    sidebar: [
      {
        title: 'Documentation',
        path: '/documentation',
        collapsable: true,
        children: [
          '/documentation'
        ]
      },
      {
        title: 'Draft Proposals',
        path: '/proposals/draft',
        children: [
          '/proposals/draft/animals',
          '/proposals/draft/calendar',
          '/proposals/draft/chemistry',
          '/proposals/draft/colors',
          '/proposals/draft/communityAdministration',
          '/proposals/draft/countryNames',
          '/proposals/draft/flag',
          '/proposals/draft/grammar',
          '/proposals/draft/logo',
          '/proposals/draft/meteorology',
          '/proposals/draft/name',
          '/proposals/draft/numberBase',
          '/proposals/draft/numbers',
          '/proposals/draft/numerals',
          '/proposals/draft/phonology',
          '/proposals/draft/phonotactics',
          '/proposals/draft/physics',
          '/proposals/draft/script',
          '/proposals/draft/shapes',
          '/proposals/draft/touch-alphabet',
        ]
      },
      {
        title: 'Official Proposals',
        path: '/proposals/official/',
        children: [
          '/proposals/official/'
        ]
      },
      {
        title: 'FAQ',
        path: '/faq/',
        children: [
          '/faq/',
        ]
      },
      {
        title: 'History',
        path: '/history',
        children: [
          '/history',
        ]
      },
      {
        title: 'Encapsulation',
        path: '/encapsulation',
        children: [
          '/encapsulation',
        ]
      },
      {
        title: 'Programs',
        path: '/programs',
        children: [
          '/programs',
        ]
      },


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
