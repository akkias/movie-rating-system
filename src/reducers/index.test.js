import {moviesData} from './index';

describe('getAllMovies', () => {
    const movies = [];
    const expectedAction = {type: 'GET_MOVIES', payload:movies};

    it('Gets all the movies', () => {
        expect(moviesData([], {expectedAction})).toEqual(movies);
    });
});