import { call, put, takeLatest } from 'redux-saga/effects';
import { PROCESS_FILE_UPLOAD, addJournalEntry } from './actions';

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
        const parsedFiles = yield files.map(file => call(readFileAsync, file));
        console.log(parsedFiles);
        for (let parsedFile of parsedFiles) {
            for (let entry of parsedFile.entries) {
                yield put(addJournalEntry(entry, parsedFile.filename));
            }
        }
    } catch (err) {
        console.log(err);
        //yield put(fetchMarkersError(err));
    }
}

export default function* watchFileUpload() {
    yield takeLatest(PROCESS_FILE_UPLOAD, processFileUpload);
}
