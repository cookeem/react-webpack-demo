## 创建相关目录
```sh
$ mkdir react-webpack-demo
$ cd react-webpack-demo/
```

## 进行npm初始化
```sh
$ npm init -y
```

## npm安装webpack，全局安装模式
```sh
$ npm install webpack
```

## npm安装webpack-dev-server，本地模式，用于本地测试
```sh
$ npm install webpack webpack-dev-server --save
```

## npm安装相关依赖，本地模式
```sh
npm install react react-dom --save
npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save
```

## 在package.json文件中，添加scripts部分描述，相当于增加start、build指令
```sh
$ vi package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --hot",
    "build": "webpack"
  },
```

## 创建webpack配置文件：webpack.config.js

## 创建index.html文件

## 创建main.jsx文件

## npm进行打包，此时会把react、react-dom、babel打包生成index.js文件
```sh
$ npm run build
```

## npm启动测试服务，访问http://localhost:8080/
```sh
$ npm run start

> react-webpack-demo@1.0.0 start /Volumes/Share/react-webpack-demo
> webpack-dev-server --hot

Project is running at http://localhost:8080/
webpack output is served from /
Hash: 4edb23bcf965dd8c491d
Version: webpack 2.4.1
Time: 3039ms
   Asset     Size  Chunks                    Chunk Names
index.js  1.07 MB       0  [emitted]  [big]  main
chunk    {0} index.js (main) 1.01 MB [entry] [rendered]
  [114] (webpack)/hot/emitter.js 77 bytes {0} [built]
  [115] ./main.jsx 850 bytes {0} [built]
  [116] (webpack)-dev-server/client?http://localhost:8080 5.68 kB {0} [built]
  [117] (webpack)/hot/dev-server.js 1.57 kB {0} [built]
  [136] ./~/html-entities/index.js 231 bytes {0} [built]
  [142] ./~/punycode/punycode.js 14.7 kB {0} [built]
  [147] ./~/react-dom/index.js 59 bytes {0} [built]
  [161] ./~/react-dom/lib/ReactDOM.js 5.14 kB {0} [built]
  [231] ./~/react/react.js 56 bytes {0} [built]
  [259] ./~/strip-ansi/index.js 161 bytes {0} [built]
  [261] ./~/url/url.js 23.3 kB {0} [built]
  [263] (webpack)-dev-server/client/overlay.js 3.73 kB {0} [built]
  [264] (webpack)-dev-server/client/socket.js 897 bytes {0} [built]
  [266] (webpack)/hot/log-apply-result.js 1.02 kB {0} [built]
  [267] multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./main.jsx 52 bytes {0} [built]
     + 253 hidden modules
webpack: Compiled successfully.
```

