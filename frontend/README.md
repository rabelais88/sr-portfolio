# SUNGRYEOL PORTFOLIO(FRONTEND)
## dev environment setup
```sh
# install npm packages via lerna
(project root)$ npx lerna bootstrap
```
- package name: `@sr-portfolio/**`
- build everything first before launching the app
- `yarn link` might be necessary


## goals
- create package template

## upgrading & maintaining packages across different folders
```sh
yarn manypkg check
yarn manypkg fix
```