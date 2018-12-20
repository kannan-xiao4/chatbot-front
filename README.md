# chatbot-front

## Project setup
```
npm install
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


## FirebaseのEnv設定
.env.local を下記の形式でプロジェクトディレクトリ直下に配置する
```
VUE_APP_FIRE_BASE_API_KEY=AAAAAAAAAAAAAAAAAAAAAAAAAAA
VUE_APP_AUTH_DOMAIN=sample-project.firebaseapp.com
VUE_APP_DATABASE_URL=https://sample-project.firebaseio.com
VUE_APP_PROJECT_ID=sample-project
VUE_APP_STORAGE_BUCKET=sample-project.appspot.com
VUE_APP_MESSAGING_SENDER_ID=123456789000
```
