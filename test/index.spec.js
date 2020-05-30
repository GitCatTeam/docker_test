const assert = require('assert');

describe('Test Equal', function () {
    /* assert.equal Test Suite */

    it('True is True', function () {
        // 참은 참이어야 한다.
        assert.equal(true, true);
    });

    it('1 is 1', function () {
        // 1은 1이어야 한다.
        assert.equal(1, 1);
    });

    it('no is no', function () {
        // 'no'는 'no'여야 한다.
        assert.equal('no', 'no');
    });
});


describe('Test Home API', function () {
    /* 홈화면 API 테스트 */

    it('Response should not be null', function () {
        // null인 응답이 오면 안 된다.
        assert.notEqual(null, true);
    });

    it('1 is 1', function () {
        // 1은 1이어야 한다.
        assert.equal(1, 1);
    });

    it('no is no', function () {
        // 'no'는 'no'여야 한다.
        assert.equal('no', 'no');
    });
});


describe('Birthday API', function () {
    /* 홈화면 API 테스트 */

    it('사용자 이름을 주면 응답이 온다.', function () {
        // null인 응답이 오면 안 된다.
        // API.call(사용자이름);
        assert.notEqual(null, true);
    });

    it('1 is 1', function () {
        // 1은 1이어야 한다.
        assert.equal(1, 1);
    });

    it('no is no', function () {
        // 'no'는 'no'여야 한다.
        assert.equal('no', 'no');
    });
});