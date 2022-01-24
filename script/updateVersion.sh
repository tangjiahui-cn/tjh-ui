# 自动更新版本号
if [ "$1" ];
then
  npm --no-git-tag-version version --allow-same-version $1
  VERSION=$1
elif [ "$1" != "&&" ];
then
  npm --no-git-tag-version version --allow-same-version patch
  VERSION=$(node -p "require('./package.json').version")
fi

# 提交git记录
git add .
git commit -am "update version ${VERSION}"
## 标记tag
# git tag v${VERSION}

printf "\n🔥Version is ${VERSION}.\n"