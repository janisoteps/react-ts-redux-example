import * as React from 'react';
import { MappedStory } from '../../store/interfaces';
import './Story.css';
import { TimestampToPrettyDate } from '../../common/date-utils';

type Props = {
    story: MappedStory
};

function Story({ story }: Props) {
    const { authorId, authorKarmaScore, score, timestamp, title, url } = story;

    return (
        <div className='Story'>

            <h4 className='Story__title'>
                <a href={url} id='Story__url' className='Story__url'>{ title }</a>
            </h4>

            <div className='Story__metadata-wrapper'>

                <div id='Story__score' className='Story__metadata'>
                    Score: { score }
                </div>

                <div className='Story__metadata'>
                    Timestamp: { TimestampToPrettyDate(timestamp) }
                </div>

                <div className='Story__metadata'>
                    Author Name: { authorId }
                </div>

                <div className='Story__metadata'>
                    Author Karma: { authorKarmaScore }
                </div>

            </div>
        </div>
    );
};


export default Story;