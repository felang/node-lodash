/*
* 数组相关 lodash 函数
* */
const checkParam = function(array) {
	if (!Array.isArray(array)) {
		throw new Error("pram must be array")
	}
}

exports.chunk = function(array, num) {
	checkParam(array)

	let len = array.length
	let result = []
	for (let i = 0; i < len; i += num) {
		let ch = array.slice(i, i+num)
		result.push(ch)
	}
	return result
}

exports.compact = function(array) {
	checkParam(array)

	let result = []
	for (let i = 0; i < array.length; i++) {
		if(Boolean(array[i])) {
			result.push(array[i])
		}
	}
	return result
}

exports.contact = function() {
	let arg = Array.prototype.slice.call(arguments)
	let result = []
	for (let i = 0; i < arg.length; i++) {
		if (Array.isArray(arg[i])) {
			result = result.concat(arg[i])
		}
		else {
			result.push(arg[i])
		}
	}
	return result
}


exports.difference = function(insArr, difArr) {
	checkParam(insArr)
	checkParam(difArr)

	let length = insArr.length
	let result = []
	for (let i = 0; i < length; i++) {
		let obj = insArr[i]
		if(difArr.indexOf(obj) === -1) {
			result.push(obj)
		}
	}
	return result
}

exports.differenceBy = function(insArr, difArr, fn) {
	checkParam(insArr)
	checkParam(difArr)

	function format(arr, fn) {
		if (typeof fn === 'function') {
			return arr.map(element => fn(element))
		}
		else {
			return arr.map(element => element[fn])
		}
	}

	let fInsArr = format(insArr, fn)
	let fDifArr = format(difArr, fn)
	// console.log("debug fInsArr", fInsArr, fDifArr)
	let length = fInsArr.length
	let result = []
	for (let i = 0; i < length; i++) {
		let obj = fInsArr[i]
		if(fDifArr.indexOf(obj) === -1) {
			result.push(insArr[i])
		}
	}
	return result
}

exports.drop = function(array, num) {
	if (num !== undefined) {
		return array.slice(num)
	}
	else {
		return array.slice(1)
	}
}

exports.dropRight = function(array, num) {
	let len = array.length
	if (num !== undefined) {
		if (num === 0) {
			return array
		}
		else {
			return array.slice(0, len-num)
		}
	}
	else {
		return array.slice(0, len-1)
	}
}

exports.dropRightWhile = function(array, predicate) {
	let len = array.length
	for (let i = 0; i < len; i++) {
		let x = array[i]
		if (!predicate(x)) {
			return array.slice(0, len-i)
		}
	}
	return array
}

exports.fill = function(array, value, start, end) {
	let len = array.length
	let s = start || 0
	let e = end || len
	return array.fill(value, s, e)
}

exports.findIndex = function(array, predicate) {
	for (let i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			return i
		}
	}
	return -1
}

exports.findLastIndex = function(array, predicate) {
	for (let i = array.length; i < 0; i--) {
		if (predicate(array[i])) {
			return i
		}
	}
	return -1
}

exports.head = function(array) {
	return array[0]
}

exports.indexOf = function(array, value, fromIndex=0) {
	for (let i = fromIndex; i < array.length; i++) {
		if (array[i] === value) {
			return i
		}
	}
	return -1
}

exports.flatten = function() {

}