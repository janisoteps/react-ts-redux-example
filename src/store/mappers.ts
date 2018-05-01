import { AuthorResponse, MappedStory, StoryResponse } from './interfaces';
import * as _ from 'lodash';

// Combines data from stories response and authors response for use in ui components
export function mapStories(stories: StoryResponse[], authors: AuthorResponse[]): MappedStory[] {

    if (stories.length && authors.length) {
        const authorsObj = _.keyBy(authors, 'id');

        return stories.map(story => {
            const author = authorsObj[story.by];

            return {
                id: story.id,
                title: story.title,
                url: story.url,
                timestamp: story.time,
                score: story.score,
                authorId: story.by,
                authorKarmaScore: author.karma
            }
        });
    }
    else {
        return [];
    }
}