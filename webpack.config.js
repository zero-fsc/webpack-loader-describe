const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // 入口
  entry: './src/index.js',
  // 模式
  mode: 'development',
  // 输出
  output: {
    // 所有文件的输出路径
    path: path.resolve(__dirname, './dist'),
    // 输出名称
    filename: 'js/bundle.js',
    // webpack5以前采用cleanWbpackPlugin
    clean: true
  },
  module: {
    /*
     * @description 正常导入
     * @author zero_fsc
     * @date 2022/06/22 21:40:38
     */
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader']
    //   },
    //   {
    //     test: /\.less$/,
    //     use: ['style-loader', 'css-loader', 'less-loader']
    //   }
    // ]

    /*
     * @description 将css单独提取成一个文件
     * @author zero_fsc
     * @date 2022/06/22 21:40:34
     */
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: [MiniCssExtractPlugin.loader, 'css-loader']
    //   },
    //   {
    //     test: /\.less$/,
    //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    //   }
    // ]

    /*
     * @description loader执行顺序
     * @author zero_fsc
     * @date 2022/06/22 21:45:14
     */
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: './loaders/ExecutionSequence/loader3',
    //     enforce: 'pre'
    //   },
    //   {
    //     test: /\.css$/,
    //     use: './loaders/ExecutionSequence/loader2',
    //     enforce: 'post'
    //   },
    //   {
    //     test: /\.css$/,
    //     use: './loaders/ExecutionSequence/loader4',
    //   },
    //   {
    //     test: /\.css$/,
    //     use: './loaders/ExecutionSequence/loader1'
    //   },
    //   {
    //     test: /\.less$/,
    //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    //   }
    // ]

    /*
     * @description pitch-loader
     * @author zero_fsc
     * @date 2022/06/22 23:42:10
     */
    // rules: [{
    //     test: /\.css$/,
    //     loader: './loaders/UseLoader/PitchLoader/pitch-loader1',
    //   },
    //   {
    //     test: /\.css$/,
    //     loader: './loaders/UseLoader/PitchLoader/pitch-loader2',
    //   },
    //   {
    //     test: /\.css$/,
    //     loader: './loaders/UseLoader/PitchLoader/pitch-loader3',
    //   },
    //   {
    //     test: /\.css$/,
    //     loader: './loaders/UseLoader/PitchLoader/pitch-loader4'
    //   },
    //   // {
    //   //   test: /\.css$/,
    //   //   use: [MiniCssExtractPlugin.loader, 'css-loader']
    //   // },
    //   // {
    //   //   test: /\.less$/,
    //   //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    //   // }
    // ]

    /*
     * @description style-loader-demo
     * @author zero_fsc
     * @date 2022/06/23 01:43:31
     */
    rules: [{
      test: /\.css$/,
      use: ['./loaders/UseLoader/style-loader-demo.js']
    }]
  },
  plugins: [
    // plugin配置
    new HtmlWebpackPlugin({
      // 模板文件 以public/index.html文件创建的新的文件
      // 新的html特点：
      // 1. 结构和原理相同
      // 2. 自动引入打包输出的资源
      template: path.resolve(__dirname, './src/public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/main.css'
    })
  ],
  // 开发服务器 不会输出资源 在内存中编译打包 
  devServer: {
    host: 'localhost', // 启动服务器的域名
    port: '3000', // 启动服务器的端口号
    open: true, // 自动打开浏览器
  },
}