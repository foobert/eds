import { ADD_JOURNAL_FILE, ADD_JOURNAL_ENTRY } from 'file-upload/actions';

function filterAndSum(entries, eventType, selector) {
    return entries
        .filter(e => e.event === eventType)
        .map(selector)
        .reduce((s, x) => s + x, 0);
}

export default function bounty(state = {rewarded: 0, collected: 0, timeline: []}, action) {
    switch (action.type) {
        case ADD_JOURNAL_FILE:
            const bountyEntries = action.payload.entries
                .filter(e => e.event === 'Bounty' || e.event === 'RedeemVoucher');
            if (bountyEntries.length === 0) {
                return state;
            }

            const rewarded = filterAndSum(bountyEntries, 'Bounty', e => e.TotalReward);
            const collected = filterAndSum(bountyEntries, 'RedeemVoucher', e => e.Amount);

            console.log('TOTAL REWARDS', rewarded);
            console.log('TOTAL COLLECTED', collected);

            let timeline = state.timeline.slice();
            const timestamp = new Date(bountyEntries[0].timestamp);
            const datestamp = new Date(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate());
            const timelineIndex = timeline.findIndex(day => day.datestamp === datestamp);
            if (timelineIndex === -1) {
                timeline.push({
                    datestamp,
                    rewarded,
                    collected,
                });
                timeline.sort((a, b) => a.datestamp - b.datestamp);
            } else {
                const oldTimelineEntry = timeline[timelineIndex];
                timeline[timelineIndex] = {
                    datestamp,
                    rewarded: oldTimelineEntry.rewarded + rewarded,
                    collected: oldTimelineEntry.collected + collected,
                };
            }

            return {
                rewarded: state.rewarded + rewarded,
                collected: state.collected + collected,
                timeline,
            };
        default:
            return state;
    }
}
