import * as React from 'react';
import { MappedStory, State } from '../store/interfaces';
import Story from './Story/Story';
import './Stories.css';
import { connect, Dispatch } from 'react-redux';
import { getMappedStories } from '../store/selectors';
import { fetchRandomStories } from '../store/actions';
import { LoadingAnimation } from '../common/LoadingAnimation';

type Props = {
    stories: MappedStory[],
    fetchRandomStories: () => void
};


class Stories extends React.Component<Props, {}> {


    componentDidMount() {
        this.props.fetchRandomStories();
    }


    _renderStories() {
        const { stories } = this.props;

        if (stories.length) {
            return stories.map(story => <Story key={story.id} story={story}/>);
        }
        else {
            return <LoadingAnimation />;
        }
    }

    render() {

        return (
            <div className='Stories'>

                <h2 className='Stories__header'>10 Random Top Stories</h2>

                { this._renderStories() }
            </div>
        );
    }
}


function mapStateToProps(state: State) {

    return {
        stories: getMappedStories(state)
    };
}

function mapDispatchToProps(dispatch: Dispatch<State>): { fetchRandomStories: () => void } {

    return {
        fetchRandomStories: () => dispatch(fetchRandomStories())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);