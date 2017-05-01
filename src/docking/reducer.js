import { ADD_JOURNAL_FILE } from 'file-upload/actions';

export default function docking(state = {durations: []}, action) {
    let requestedTimestamp = null;
    switch (action.type) {
        case ADD_JOURNAL_FILE:
            const dockingEntries = action.payload.entries.filter(e => e.event.startsWith('Dock'));
            if (dockingEntries.length === 0) {
                return state;
            }
            let durations = [];
            for (let entry of dockingEntries) {
                switch (entry.event) {
                    case 'DockingRequested':
                        requestedTimestamp = new Date(entry.timestamp);
                        break;
                    case 'DockingCancelled':
                    case 'DockingTimeout':
                    case 'DockingDenied':
                        requestedTimestamp = null;
                        break;
                    case 'Docked':
                        if (requestedTimestamp) {
                            const duration = (new Date(entry.timestamp) - requestedTimestamp) / 1000;
                            durations.push(duration);
                        }
                        break;
                }
            }
            return Object.assign(state, {durations: state.durations.concat(durations)});
        default:
            return state;
    }
}
