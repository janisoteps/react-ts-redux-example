import * as moment from 'moment';


export function TimestampToPrettyDate(timestamp: number) {

    // For a project this small moment is somewhat overkill
    return moment(timestamp).format('MMM Do YYYY');
}