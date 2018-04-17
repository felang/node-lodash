/*
*  mocha 测试用例
* */

const arrLodash = require('../lib/array')
const should = require('should')

const isEqual = arrLodash.isEqual
describe('test lodash array function', function () {
	it('chunk function test 1', function () {
		isEqual(arrLodash.chunk([1, 2, 3], 2), [[1, 2], [3]]).should.equal(true);
	});

	it('chunk function test 2', function () {
		isEqual(arrLodash.chunk([1, 2, 3, 4], 3), [[1, 2], [3, 4]]).should.equal(false);
	});

	it('chunk function test 3', function () {
		isEqual(arrLodash.chunk([1, 2, 3], 4), [1, 2, 3]).should.equal(true);
	});

	it('isEqual function test 1', function () {
		isEqual([1, 2, 3], [1, 2, 3]).should.equal(true);
	});

	it('isEqual function test 2', function () {
		isEqual([1, 2, [3, 4]], [1, 2, [3, 4]]).should.equal(true);
	});

	it('isEqual function test 3', function () {
		isEqual([1, 2, 3], [1, 2]).should.equal(false);
	});

	it('compact function test 1', function () {
		isEqual(arrLodash.compact([1, 2, 3]), [1, 2, 3]).should.equal(true);
	});

	it('compact function test 2', function () {
		isEqual(arrLodash.compact([1, 2, '', 0, null], [1, 2]).should.equal(true));
	});

});

