//import update from 'react-addons-update';
import * as ActionTypes from './actions';

export default function fileUpload(state = {processed: {}, todo: 0, processing: false}, action) {
    switch (action.type) {
        case ActionTypes.ADD_JOURNAL_FILE:
            const processed = Object.assign(state.processed, {[action.payload.filename]: true});
            return Object.assign(state, {processed});
        case ActionTypes.PROCESS_FILE_UPLOAD_START:
            return Object.assign(state, {processing: true, todo: action.payload.todo});
        case ActionTypes.PROCESS_FILE_UPLOAD_COMPLETE:
            return Object.assign(state, {processing: false, todo: 0});
        default:
            return state;
    }
}
