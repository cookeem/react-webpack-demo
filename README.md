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
- ```webpack --progress -p```可以有效压缩bundle.js的大小
- -p 参数：shortcut for --optimize-minimize --define
```sh
$ vi package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --hot",
    "build": "webpack --progress -p"
  },
```

## 创建webpack配置文件：webpack.config.js

## 创建index.html文件

## 创建main.jsx文件

## npm进行打包，此时会把react、react-dom、babel打包生成index.js文件
```sh
$ npm run build

> react-webpack-demo@1.0.0 build /Volumes/Share/Js_Program/react-webpack-demo
> webpack --progress -p

Hash: a20ebd6dbfdc9e711268                                                              
Version: webpack 2.4.1
Time: 5858ms
    Asset    Size  Chunks             Chunk Names
bundle.js  143 kB       0  [emitted]  main
   [3] ./~/object-assign/index.js 2.11 kB {0} [built]
  [14] ./~/react-dom/lib/ReactReconciler.js 6.21 kB {0} [built]
  [15] ./~/react/lib/React.js 3.32 kB {0} [built]
  [16] ./~/react/lib/ReactElement.js 11.2 kB {0} [built]
  [75] ./~/react-dom/index.js 59 bytes {0} [built]
  [76] ./~/react/react.js 56 bytes {0} [built]
  [77] ./main.jsx 850 bytes {0} [built]
 [106] ./~/react-dom/lib/ReactDOM.js 5.14 kB {0} [built]
 [155] ./~/react-dom/lib/renderSubtreeIntoContainer.js 422 bytes {0} [built]
 [158] ./~/react/lib/ReactChildren.js 6.19 kB {0} [built]
 [159] ./~/react/lib/ReactClass.js 26.9 kB {0} [built]
 [160] ./~/react/lib/ReactDOMFactories.js 5.53 kB {0} [built]
 [162] ./~/react/lib/ReactPropTypes.js 500 bytes {0} [built]
 [163] ./~/react/lib/ReactPureComponent.js 1.32 kB {0} [built]
 [164] ./~/react/lib/ReactVersion.js 350 bytes {0} [built]
    + 154 hidden modules
```

## npm启动测试服务，访问http://localhost:8080/
```sh
$ npm run start

> react-webpack-demo@1.0.0 start /Volumes/Share/Js_Program/react-webpack-demo
> webpack-dev-server --hot

Project is running at http://localhost:8080/
webpack output is served from /
Hash: f3f3008fa8cf698e6568
Version: webpack 2.4.1
Time: 3762ms
    Asset     Size  Chunks                    Chunk Names
bundle.js  1.07 MB       0  [emitted]  [big]  main
chunk    {0} bundle.js (main) 1.01 MB [entry] [rendered]
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

---

## webpack调试

- 使用webpack检查依赖包，按照依赖包大小进行排序，最后的文件最大
```sh
$ webpack --display-modules --sort-modules-by size
Hash: 05ac7f528cdbce423cca
Version: webpack 2.4.1
Time: 2094ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  737 kB       0  [emitted]  [big]  main
  [81] ./~/react/react.js 56 bytes {0} [built]
  [80] ./~/react-dom/index.js 59 bytes {0} [built]
 [144] ./~/react-dom/lib/ReactVersion.js 350 bytes {0} [built]
 [177] ./~/react/lib/ReactVersion.js 350 bytes {0} [built]
 [168] ./~/react-dom/lib/renderSubtreeIntoContainer.js 422 bytes {0} [built]
  [58] ./~/react-dom/lib/ReactDOMComponentFlags.js 429 bytes {0} [built]
  [54] ./~/prop-types/lib/ReactPropTypesSecret.js 436 bytes {0} [built]
 [179] ./~/react/lib/getNextDebugID.js 437 bytes {0} [built]
 [116] ./~/react-dom/lib/ReactDOMFeatureFlags.js 439 bytes {0} [built]
 [175] ./~/react/lib/ReactPropTypesSecret.js 442 bytes {0} [built]
  [66] ./~/react-dom/lib/ReactPropTypesSecret.js 442 bytes {0} [built]
...
  [26] ./~/react-dom/lib/ReactBrowserEventEmitter.js 12.6 kB {0} [built]
 [118] ./~/react-dom/lib/ReactDOMInput.js 13 kB {0} [built]
 [101] ./~/react-dom/lib/BeforeInputEventPlugin.js 13.3 kB {0} [built]
  [47] ./~/react-dom/lib/validateDOMNesting.js 13.7 kB {0} [built]
 [137] ./~/react-dom/lib/ReactMultiChild.js 14.6 kB {0} [built]
  [98] ./~/prop-types/factoryWithTypeCheckers.js 17.6 kB {0} [built]
  [64] ./~/react-dom/lib/ReactMount.js 25.5 kB {0} [built]
 [172] ./~/react/lib/ReactClass.js 26.9 kB {0} [built]
 [111] ./~/react-dom/lib/ReactCompositeComponent.js 35.2 kB {0} [built]
 [113] ./~/react-dom/lib/ReactDOMComponent.js 38.5 kB {0} [built]
```