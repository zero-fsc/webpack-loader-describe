// 若想要使用webpack打包，则需要在入口引入
import MyFunction from './js/Function'
import {
  sortValue
} from './js/sort'
// import './style/less/index.less'
import './style/css/index.css'

const arr = [1, 3, 4, 5, 0, 2, 55, 36, 98, 45]

console.log(sortValue(arr));

const myFunction = new MyFunction()
console.log(myFunction);