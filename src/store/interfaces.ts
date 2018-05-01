

export interface MappedStory {
    id: string,
    title: string,
    url: string,
    timestamp: number,
    score: number,
    authorId: string,
    authorKarmaScore: number
}


export type TopStoriesResponse = string[];

export interface StoryResponse {
    by: string;
    descendants: number;
    id: string,
    kids: number[],
    score: number,
    time: number,
    title: string,
    type: string,
    url: string
}


export interface AuthorResponse {
    about: string,
    created: number,
    id: string,
    karma: number,
    submitted: number[]
}



export interface State {
    topStories: TopStoriesResponse;
    stories: StoryResponse[];
    authors: AuthorResponse[];
}