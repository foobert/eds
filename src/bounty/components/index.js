import React from 'react';

export default function Bounty(props) {
    return (
        <div>
            <p>Rewarded: {props.bounty.rewarded}</p>
            <p>Collected: {props.bounty.collected}</p>
        </div>
    );
}
