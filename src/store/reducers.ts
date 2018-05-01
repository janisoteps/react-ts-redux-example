import { combineReducers } from 'redux';
import { Action, handleActions } from 'redux-actions';
import { SET_AUTHORS, SET_STORIES, SET_TOP_STORIES } from './actions';
import { AuthorResponse, StoryResponse, TopStoriesResponse } from './interfaces';

// At this stage separating this data models isn't that useful.
// If was production app would be more useful as there would probably
// be more data complexity as app grew. Also would probably have more
// update/add/delete Actions.

export const initialState = {
    topStories: [],
    stories: [],
    authors: {}
};


const topStories = handleActions<TopStoriesResponse>({
    [SET_TOP_STORIES]: (state, action: Action<any>) => {
        const { payload } = action;

        return payload.topStories
    }
}, []);


const stories = handleActions<StoryResponse[]>({
    [SET_STORIES]: (state, action: Action<any>) => {
        const { payload } = action;

        return payload.stories
    }
}, []);


const authors = handleActions<AuthorResponse[]>({
    [SET_AUTHORS]: (state, action: Action<any>) => {
        const { payload } = action;

        return payload.authors
    }
}, []);


const rootReducer = combineReducers({
    topStories,
    stories,
    authors
});

export default rootReducer;