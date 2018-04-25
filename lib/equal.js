/*
*  判断是否相等. 包括数组, 对象等
* */

function isObjEqual(a, b) {
	function isInsEqual(obj1, obj2) {
		let keys1 = Object.keys(obj1)
		let keys2 = Object.keys(obj2)
		if (keys1.length !== keys2.length) {
			return false
		}
		else {
			for (let i = 0; i < keys1.length; i++) {
				if (!equal(obj1[keys1[i]], obj2[keys1[i]])) {
					return false
				}
			}
			return true
		}
	}

	if (a === null) {
		return b === null
	}
	else if (Array.isArray(a)) {
		return isArrEqual(a, b)
	}
	else {
		return isInsEqual(a, b)
	}
}

function isArrEqual(a, b) {
	let len1 = a.length
	let len2 = b.length
	if(len1 !== len2) {
		return false
	}
	else {
		for (let i = 0; i < len1; i++) {
			if (!equal(a[i], b[i])) {
				return false
			}
		}
		return true
	}
}

function isEequal(a, b) {
	let ta = typeof a
	let tb = typeof b
	if (ta !== tb) {
		return false
	}
	if (ta === 'object') {
		return isObjEqual(a, b)
	}
	else {
		return a === b
	}
}

module.exports = isEequal

