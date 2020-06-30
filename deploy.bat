npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:kroyxlab/elp-documentation.git master:gh-pages