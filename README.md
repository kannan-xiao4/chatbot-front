# chatbot-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


## そもそものProject準備(2018.10.13現在)
nodeとnpmがインストール済み

```
$ node -v
v10.11.0

$ npm -v
6.4.1
```

vue-cli をインストール
```
$ npm install -g @vue/cli

$ vue -V
3.0.5
```
## vue project preset
```
Vue CLI v3.0.5
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript for auto-detected polyfills? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: TSLint
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

## 起動確認
```
$ cd chatbot-front
$ npm run serve
```
`http://localhost:8080/` or `http://hostpcip:8080/`
で確認
