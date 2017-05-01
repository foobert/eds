import React from 'react';

export default class Bounty extends React.Component {
    componentDidMount() {
        this.updatePlot();
    }

    componentDidUpdate() {
        this.updatePlot();
    }

    updatePlot() {
        const rewarded = {
            x: this.props.bounty.timeline.map(data => data.datestamp.toString()),
            y: this.props.bounty.timeline.map(data => data.rewarded),
            name: 'Rewarded',
            type: 'bar',
        };
        const collected = {
            x: this.props.bounty.timeline.map(data => data.datestamp.toString()),
            y: this.props.bounty.timeline.map(data => data.collected),
            name: 'Collected',
            type: 'bar',
        };
        const data = [rewarded, collected];
        Plotly.newPlot('plot', data, {});
    }

    render() {
        return (
            <div>
                <h2>Bounty Statistics</h2>
                <p>Rewarded: {this.props.bounty.rewarded}</p>
                <p>Collected: {this.props.bounty.collected}</p>
                <div id='plot'></div>
            </div>
        );
    }
}
