import { mapStories } from './mappers';

let mockStory, mockAuthor;

beforeEach(() => {
    const byId = 'Joe';

    mockStory = {
        by: byId,
        descendants: 3,
        id: '123',
        kids: [2, 3],
        score: 23,
        time: 12345677886,
        title: 'SomeTitle',
        type: 'Story',
        url: 'https://google.com'
    };

    mockAuthor = {
        about: 'any',
        created: 2446346346,
        id: byId,
        karma: 23,
        submitted: [2, 3]
    };
});


it('returns empty array if stories and authors are both not set', () => {

    const mappedStories = mapStories([ mockStory ], []);


    expect(mappedStories).toEqual([]);
});


// With typescript these types of tests are less useful if taking full use of interfaces
it('maps all fields correctly', () => {
    const mappedStories = mapStories([ mockStory ], [ mockAuthor ]);


    expect(mappedStories[0]).toEqual({
        id: mockStory.id,
        title: mockStory.title,
        url: mockStory.url,
        timestamp: mockStory.time,
        score: mockStory.score,
        authorId: mockAuthor.id,
        authorKarmaScore: mockAuthor.karma
    });
});