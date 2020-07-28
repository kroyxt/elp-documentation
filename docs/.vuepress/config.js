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
          '/proposals/draft/name',
          '/proposals/draft/logo',
          '/proposals/draft/communityAdministration',
          '/proposals/draft/numberBase',
          '/proposals/draft/numerals',
          '/proposals/draft/numbers',
          '/proposals/draft/script',
          '/proposals/draft/phonology',
          '/proposals/draft/phonotactics',
          '/proposals/draft/colors',
          '/proposals/draft/countryNames',
          '/proposals/draft/calendar',
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
