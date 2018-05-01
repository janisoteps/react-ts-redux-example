import * as React from 'react';
import * as Enzyme from 'enzyme'
const Adapter = require('enzyme-adapter-react-16');
import Story from './Story';


// Just add this here but should be in config file
Enzyme.configure({ adapter: new Adapter() })

let mappedStory;


beforeEach(() => {

    mappedStory = {
        id: '123',
        title: 'Mock title',
        url: 'https://google.com',
        timestamp: 123456,
        score: 23,
        authorId: '1245',
        authorKarmaScore: 34
    }
});


it('has correct title', () => {
    const component = Enzyme.shallow(<Story story={mappedStory} />);
    const title = component.find('#Story__url').text();

    expect(title).toEqual(mappedStory.title);
});


it('has correct score text', () => {
    const component = Enzyme.shallow(<Story story={mappedStory} />);
    const score = component.find('#Story__score').text();

    expect(score).toEqual(`Score: ${mappedStory.score}`);
});