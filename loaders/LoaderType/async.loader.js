module.exports = function (content, map, meta) {
  const callback = this.async()

  // 异步loader一定会等待本次异步操作完成后,在执行下一个loader,故采用setTimeout做延时器,模拟等待[eventLoop]
  setTimeout(() => {
    console.log('async-loader');
    callback(null, content, map, meta)
  }, 1000)
}