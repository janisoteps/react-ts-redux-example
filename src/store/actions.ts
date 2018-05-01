import axios from 'axios';
import { BASE_ENDPOINT } from '../common/constants';
import {
    AuthorResponse,
    State,
    StoryResponse,
    TopStoriesResponse
} from './interfaces';
import * as _ from 'lodash';
import { Dispatch } from 'redux';

export const SET_TOP_STORIES = 'SET_TOP_STORIES';
export const SET_STORIES = 'SET_STORIES';
export const SET_AUTHORS = 'SET_AUTHORS';
export const FETCH_RESOURCE_FAILURE = 'FETCH_RESOURCE_FAILURE';


function fetchResourceFailure(payload: { errorMessage: string }) {

    return {
        type: FETCH_RESOURCE_FAILURE,
        payload
    };
}


function setStories(payload: { stories: StoryResponse[] }) {

    return {
        type: SET_STORIES,
        payload
    };
}

function setTopStories(payload: { topStories: TopStoriesResponse }) {

    return {
        type: SET_TOP_STORIES,
        payload
    };
}


function setAuthors(payload: { authors: AuthorResponse[] }) {

    return {
        type: SET_AUTHORS,
        payload
    };
}



export function fetchRandomStories() {

    // When just doing GET requests axios is probably overkill but
    // useful when doing more advanced requests like POST with headers
    // and things
    return async function(dispatch: Dispatch<State>, getState: () => State) {

        try {
            let { topStories } = getState();

            if (!topStories.length) {
                const response = await axios.get(`${BASE_ENDPOINT}/topstories.json`);
                topStories = response.data;

                dispatch(setTopStories({ topStories }));
            }

            dispatch(fetchStoriesById());
        }
        catch (error) {
            dispatch(fetchResourceFailure({ errorMessage: error }));
        }
    };
}


function fetchStoriesById() {

    return async function(dispatch: Dispatch<State>, getState: () => State) {

        try {
            let { topStories } = getState();

            const randomStories = _.sampleSize(topStories, 10);

            const storiesPromises = randomStories.map(storyId => axios.get(`${BASE_ENDPOINT}/item/${storyId}.json`));
            const storiesResponses = await Promise.all(storiesPromises);
            const stories: StoryResponse[] = storiesResponses.map(response => response.data);

            dispatch(setStories({ stories }));
            dispatch(fetchAuthorsById());
        }
        catch (error) {
            dispatch(fetchResourceFailure({ errorMessage: error }));
        }
    };
}


function fetchAuthorsById() {

    return async function(dispatch: Dispatch<State>, getState: () => State) {

        try {
            const { stories } = getState();
            const authorIds = _.uniq(stories.map(story => story.by));
            const authorsPromises = authorIds.map(authorId => axios.get(`${BASE_ENDPOINT}/user/${authorId}.json`));
            const authorsResponses = await Promise.all(authorsPromises);
            const authors: AuthorResponse[] = authorsResponses.map(response => response.data);

            dispatch(setAuthors({ authors }));
        }
        catch (error) {
            dispatch(fetchResourceFailure({ errorMessage: error }));
        }
    }
}