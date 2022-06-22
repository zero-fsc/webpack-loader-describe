module.exports = function (content) {

  /**
   * 1. 直接使用style-loader，只能处理样式
   *    不能处理样式中引入的其它资源。
   * 2. 借助css-loader，解决央视中引入其它资源的问题。
   *    css-loader暴露了一段JS代码，style-loader需要执行js代码，得到返回值之后，再动态创建style标签，插入到页面上。
   * 
   * 3. style-loader使用pitch-loader
   */
  const script = `
    const styleE1 = document.createElement('style');
    styleE1.innerHTML = ${JSON.stringify(content)};
    document.head.appendChild(styleE1);
  `

  return script;
}

// module.exports.pitch = function (remainingRequest) {
//   // remainingRequest 剩下还需要处理的loader
//   // console.log(remainingRequest);

//   // 1. 将remainingRequest 中的绝对路径改为相对路径（后面只能使用相对路径操作）
//   const releativePath = remainingRequest.split('!').map(path => {
//     console.log(this.context, path);
//     return this.utils.contextify(this.context, path)
//   }).join('!')
//   console.log(releativePath);
//   // 2. 引入css-loader处理后的资源
//   // 3. 创建style, 将内容插入页面中生效
//   const script = `
//     import style from "!!${releativePath}"
//     const styleE1 = document.createElement('style');
//     styleE1.innerHTML = style;
//     document.head.appendChild(styleE1);
//   `

//   // 终止后面的loader执行
//   return script
// }