const MODE = process.env.NODE_ENV
const isProduction = MODE === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TeserPlugfin = require('terser-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    entry: './src/ts/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode: MODE,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                // ローダーの対象 // 拡張子 .js の場合
                test: /\.js$/,
                // ローダーの処理対象から外すディレクトリ
                exclude: /node_modules/,
                // Babel を利用する
                loader: "babel-loader",
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // プリセットを指定することで、ES2019 を ES5 に変換
                        "@babel/preset-env"
                    ]
                }
            }
        ]
    },
    resolve: {
        // Webpackで利用するときの設定
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
        // Vueを読み込めるようにするため
        new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: isProduction
            ? []
            : [
                // jsファイルの最適化
                new TeserPlugfin({
                    // すべてのコメント削除
                    extractComments: 'all',
                    // console.logの出力除去
                    terserOptions: {
                        compress: { drop_console: true }
                    },
                }),
            ]
    },
    devServer: {
        // サーバーの起点ディレクトリ
        // contentBase: "dist",
        // バンドルされるファイルの監視 // パスがサーバー起点と異なる場合に設定
        publicPath: '/dist/js/',
        //コンテンツの変更監視をする
        watchContentBase: true,
        // 実行時(サーバー起動時)ブラウザ自動起動
        open: true,
        // 自動で指定したページを開く
        openPage: "index.html",
        //　同一network内からのアクセス可能に
        host: "0.0.0.0"
    }
}