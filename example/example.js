/*
*  lodash example
* */
const arrLodash = require('../lib/array')

const isEqual = function(arr1, arr2) {
	if (typeof arr1 !== typeof arr2) {
		return false
	}
	if(arr1.length !== arr2.length) {
		return false
	}
	else {
		let len = arr1.length
		for (let i = 0; i < len; i++) {
			let t1 = typeof arr1
			let t2 = typeof arr2
			if (t1 !== t2) {
				return false
			}
			if (Array.isArray(arr1[i])) {
				if (!isEqual(arr1[i], arr2[i])) {
					return false
				}
			}
			else {
				if (arr1[i] !== arr2[i]) {
					return false
				}
			}
		}
		return true
	}
}

function insEqual(obj1, obj2) {
	let keys1 = Object.keys(obj1)
	let keys2 = Object.keys(obj2)
	if (keys1.length !== keys2.length) {
		return false
	}
	else {
		for (let i = 0; i < keys1.length; i++) {
			if (obj1[keys1[i]] !== obj2[keys1[i]]) {
				return false
			}
		}
		return true
	}
}

const main = function() {
	// let array1 = [1, 2, 0, '', null]
	// let result = arrLodash.compact(array1)
	// let e = isEqual(result, [1, 2])
	// console.log('test result', result, e)
	// let a = arrLodash.differenceBy([1.2, 2.3, 4.3], [2.1, 3.2], Math.floor)
	let ex = [1, 2, 3]
	console.log('debug', arrLodash.fill(ex, 2, 1))

}

main()