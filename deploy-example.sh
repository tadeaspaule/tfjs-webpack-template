rm -rf dist
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:{username}/{repo-name}.git master:gh-pages
cd -