export const PROCESS_FILE_UPLOAD = 'PROCESS_FILE_UPLOAD';

export function processFileUpload(files) {
    return {
        type: PROCESS_FILE_UPLOAD,
        payload: {
            files,
        },
    };
}

export const ADD_JOURNAL_FILE = 'ADD_JOURNAL_FILE';

export function addJournalFile(entries, filename) {
    return {
        type: ADD_JOURNAL_FILE,
        payload: {
            entries,
            filename,
        },
    };
}

export const ADD_JOURNAL_ENTRY = 'ADD_JOURNAL_ENTRY';

export function addJournalEntry(entry, filename) {
    return {
        type: ADD_JOURNAL_ENTRY,
        payload: {
            entry,
            filename,
        },
    };
}
