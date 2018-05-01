import { createSelector } from 'reselect';
import { State } from './interfaces';
import { mapStories } from './mappers';

const getStories = (state: State) => state.stories;
const getAuthors = (state: State) => state.authors;


// In this case using reselect is probably not needed but it
// can become handy as app grows more complex.
export const getMappedStories = createSelector(
    [ getStories, getAuthors ], mapStories
);
