import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PROCESS_FILE_UPLOAD, addJournalFile, addJournalEntry } from './actions';

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const entries = reader.result
                .split("\n")
                .filter((line) => line.length > 0)
                .map(JSON.parse);
            resolve({
                filename: file.name,
                entries,
            });
        };
        reader.onerror = (err) => {
            reject({
                filename: file.name,
                entries: [],
                error: err,
            });
        }
        reader.readAsText(file);
    });
}

function* processFileUpload(action) {
    try {
        const files = action.payload.files;
        const alreadyProcessed = yield select(state => state.fileUpload.processed);
        const parsedFiles = yield files
            .filter(file => !alreadyProcessed[file.name])
            .map(file => call(readFileAsync, file));
        for (let parsedFile of parsedFiles) {
            yield put(addJournalFile(parsedFile.entries, parsedFile.filename));
            //for (let entry of parsedFile.entries) {
                //yield put(addJournalEntry(entry, parsedFile.filename));
            //}
        }
    } catch (err) {
        console.log(err);
        //yield put(fetchMarkersError(err));
    }
}

export default function* watchFileUpload() {
    yield takeLatest(PROCESS_FILE_UPLOAD, processFileUpload);
}
