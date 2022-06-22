# Loader

## 概念：

帮助webpack将不同类型的文件转换为webpack可识别的模块。

loader本质其实就是到处函数的JS模块

## 工作原理：

由于webpack只能处理JS格式的代码，任何非JS文件都必须被预先处理转换为JS代码，才可以参与打包。loader（加载器）就是这样一个代码转换器。它由webpack的 **loader-runner**执行调用，接收原始资源数据作为参数（当多个加载器联合使用时，上一个loader的结果会传入下一个loader），最终输出JS代码个webpack做进一步编译。

## 执行顺序：

### 分类：

- pre：前置loader
- normal：普通loader
- inline：内联loader
- post：后置loader

### 执行优先级：

- pre > normal > inline > post。
- 相同优先级loader执行顺序：从右到左，从下到上。【可以通过**enforce**改变loader执行顺序】![image-20220612231756007](C:\Users\BigBanana\AppData\Roaming\Typora\typora-user-images\image-20220612231756007.png)

## 使用loader的方式

### 配置方式：

在webpack.config.js中指定loader。推荐使用【pre、normal、post】loader方式，**其中：默认为normal-loader**

### 内联方式：

在每个**import**语句中显示指定loader。【inline-loader】

> 用法：import Styles from 'style-loader!css-loader?modules!./styles.css'
>
> 含义：
>
> - 使用css-loader和style-loader处理styles.css文件
>
> - 通过 **!** 将资源中的loader分开
>
>   inline loader可以通过添加不同前缀，跳过其它类型的loader
>
> - **!** 跳过normal-loader
>
>   **import Styles from '!style-loader!css-loader?modules!./styles.css'**
>
> - **-!** 跳过pre-loader和normal-loader
>
>   **import Styles from '-!style-loader!css-loader?modules!./styles.css'**
>
> - **!!** 跳过pre-loader、normal-loader和post-loader
>
>   **import Styles from '!!style-loader!css-loader?modules!./styles.css'**

## loader的类型

### 分类：

- normal-loader
- async-loader
- raw-loader
- pitch-loader

### 介绍：

#### loader定义函数

```javascript
/**
 * loader是一个函数，当webpack解析资源的时候，会调用相关的loader来处理
 * loader接受到文件内容作为参数，并且会返回内容出去
 * @param {*} content 文件内容
 * @param {*} map 文件映射 SourceMap
 * @param {*} meta 文件元信息 别的loader传递过来的数据
 */
module.exports = function (content, map, meta) {
  return content
}
```

#### normal-loader

```javascript
module.exports = function(content, map, meta) {
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
```

#### async-loader

```javascript
module.exports = function (content, map, meta) {
  const callback = this.async()

  // 异步loader一定会等待本次异步操作完成后,在执行下一个loader,故采用setTimeout做延时器,模拟等待[eventLoop原理]
  setTimeout(() => {
    console.log('async-loader');
    callback(null, content, map, meta)
  }, 1000)
}
```

#### raw-loader

```javascript
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
```

#### pitch-loader

```javascript
// pitch loader 是在所有loader执行之前执行的loader
module.exports.pitch = function () {
  // 熔断机制
  return 'result'
}
```

> 关于pitch-loader
>
> Loader模块导出函数的pitch属性所指向的函数被称为pitch loader

- pitch-loader执行顺序

  当我们定义了多个pitch-loader，同时里面即拥有normal-loader与pitch-loader时

  ![image-20220623001121231](C:\Users\BigBanana\AppData\Roaming\Typora\typora-user-images\image-20220623001121231.png)

  当我们执行时，可以看到，pitch-loader会先执行，且与normal-loader不一样的是，pitch-loader是从左到右，而normal-loader则是从右到左

  ![image-20220623001143156](C:\Users\BigBanana\AppData\Roaming\Typora\typora-user-images\image-20220623001143156.png)

  pitch-loader执行图

![pitch-loader](C:\Users\BigBanana\Desktop\pitch-loader.jpg)

​	pitch-loader熔断机制：

​	当我们在某一个pitch-loader进行**return**时，此时，后面的loader以及该pitch-loader所包含的normal-loader不会继续执行，从而达到熔断机制

![image-20220623002609145](C:\Users\BigBanana\AppData\Roaming\Typora\typora-user-images\image-20220623002609145.png)

​	当我们在pitch-loader3进行return，此时，pitch-loader4的normal-loader、pitch-loader以及pitch-loader3的normal-loader也不会执行

![image-20220623002800579](C:\Users\BigBanana\AppData\Roaming\Typora\typora-user-images\image-20220623002800579.png)

![image-20220623002823215](C:\Users\BigBanana\AppData\Roaming\Typora\typora-user-images\image-20220623002823215.png)