#!/usr/bin/env sh

# 忽略Error
set -e

# Build
npm run docs:build

# 進入發布目錄
cd docs/.vitepress/dist

# 如果是發佈到自定義的Domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果是部署到 https://<USERNAME>.github.io
#  git push -f https://github.com/Axel1227/Axel1227.github.io.git main:gh-pages
git push -f git@github.com:Axel1227/Axel1227.github.io.git main:gh-pages


# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -