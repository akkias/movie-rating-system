import * as func from './functionUtils';

describe('sortDesc', () => {
    const givenArr = [{"rating": 4},{"rating": 2},{"rating": 5},{"rating": 1}];
    const expectedArr = [{"rating": 5},{"rating": 4},{"rating": 2},{"rating": 1}];
    describe('given an array', () => {
        it('returns the sorted array in desc order', () => {
            expect(func.sortDesc(givenArr)).toEqual(expectedArr);
        });
    });
})

describe('getRandomNum', () => {
    it('returns a random number', () => {
        expect(func.getRandomNum(2)).toEqual(expect.any(Number));
    });
})
