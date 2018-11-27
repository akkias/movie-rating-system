import * as actions from './index';

it('Creates an action to fetch all movies', () => {
    const movies = {'movies': []};
    const expectedAction = {type: 'GET_MOVIES', payload:{movies}};
    expect(actions.getMovies(movies)).toEqual(expectedAction);
})