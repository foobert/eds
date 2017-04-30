//import update from 'react-addons-update';
import * as ActionTypes from './actions';

export default function fileUpload(state = {processed: {}}, action) {
    switch (action.type) {
        case ActionTypes.ADD_JOURNAL_FILE:
            const processed = Object.assign(state.processed, {[action.payload.filename]: true});
            return Object.assign(state, {processed});
        default:
            return state;
    }
}
