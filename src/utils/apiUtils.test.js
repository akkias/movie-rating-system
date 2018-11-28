import {get, handleRatingChange} from './apiUtils';
const fetchMock = require('fetch-mock');

const MOVIES_URL = "https://movies-dbase.herokuapp.com/movies";


describe('fires the function to update the rating', async () => {
    var res = null;
    beforeAll(() => handleRatingChange(3,0,1).then(response => response.json())
    .then(response => {
        res = response.id;
    }));
    it('Check whether call gets successfully posted', () => expect(res).toEqual(expect.any(Number)))
    fetchMock.restore();
});


describe('get()', async () => {
    var res = null;
    beforeAll(() => get(MOVIES_URL).then(response => {
        res = response[0].id;
    }));
    it('fires the function to get the all response from the provided URL/API', () => expect(res).toEqual(expect.any(Number)))
    fetchMock.restore();
});