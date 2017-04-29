import { ADD_JOURNAL_ENTRY } from 'file-upload/actions';

export default function bounty(state = {rewarded: 0, collected: 0}, action) {
    switch (action.type) {
        case ADD_JOURNAL_ENTRY:
            switch (action.payload.entry.event) {
                case 'Bounty':
                    return {rewarded: state.rewarded, collected: state.collected + action.payload.entry.TotalReward};
                case 'RedeemVoucher':
                    return {rewarded: state.rewarded + action.payload.entry.Amount, collected: state.collected};
                default:
                    return state;
            }
        default:
            return state;
    }
}
