const MyFunction = new Function()
MyFunction.prototype.myCall = function (context) {
  console.log(context)
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  context = context || window
  context.fn = this
  const args = [...arguments].splice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

MyFunction.prototype.myApply = function (context) {
  if (typeof this !== 'function') return new TypeError('')

  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result
}

MyFunction.prototype.myBind = function (context) {
  if (typeof this !== 'function') return new TypeError('')

  const _this = this

  const args = [...arguments].splice(1)

  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }

    return _this.apply(context, args.concat(...arguments))
  }
}

export default MyFunction