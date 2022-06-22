/**
 * raw-loader 接收到的content是Buffer数据[二进制数据]
 * 当处理图片或图标时,可以采用raw-loader
 * 支持同步或异步写法
 * @param {*} content 文件内容
 * @param {*} map 文件映射 SourceMap
 * @param {*} meta 文件元信息 别的loader传递过来的数据
 */
function rawLoader(content, map, meta) {
  return content
}

rawLoader.raw = true

module.exports = Test3Loader