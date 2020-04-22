# Js-design-pattern
practice design pattern


## Setup enviroment
1. setup npm enviroment
2. install wbepack
```bash
npm install webpack webpack-cli --save-dev
```
3. install webpack-dev-server
4. install babel
```bash
npm install babel-core babel-loader babel-ployfill babel-preset-es2015 babel-preset-latest --save-dev

```

## support decorator in babel 
```bash
npm install "@babel/plugin-syntax-decorators": "^7.0.0",
 npx babel-upgrade --write
```

.babelrc
```javascript
{
    "presets": [
        "@babel/preset-env",
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
}
```

## Start API server
```bash
../../node_modules/http-server/bin/http-server -p 8880
```
## Start wbe server
```bash
npm run dev
```

