/**
 * normal-loader
 * @param {*} content 文件内容
 * @param {*} map 文件映射 SourceMap
 * @param {*} meta 文件元信息 别的loader传递过来的数据
 */
module.exports = function (content, map, meta) {
  console.log('normal-loader');

  /**
   * 第一个参数：err 代表是否存在错误
   * 第二个参数：content 处理后的内容
   * 第三个参数：sourceMap 继续传递sourceMap
   * 第四个参数：meta 传递其他loader的数据
   * 好处：
   * 保证sourMap不中断
   */
  this.callback(null, content, map, meta)
}