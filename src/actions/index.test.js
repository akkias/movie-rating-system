import * as actions from './index';

it('fetchs all movies', () => {
    const movies = {'movies': []};
    const expectedAction = {type: 'GET_MOVIES', payload:{movies}};
    expect(actions.getMovies(movies)).toEqual(expectedAction);
})

it('sets movie rating', () => {
    const expectedAction = {type: 'SET_RATING', payload:{id:1,index:2,rating:3}};
    expect(actions.setRating(3,2,1)).toEqual(expectedAction);
})