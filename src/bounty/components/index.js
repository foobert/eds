import React from 'react';
import moment from 'moment';

export default class Bounty extends React.Component {
    componentDidMount() {
        this.updatePlot();
    }

    componentDidUpdate() {
        this.updatePlot();
    }

    updatePlot() {
        const x = this.props.bounty.timeline.map(data => moment(data.datestamp).format('ddd, YYYY-MM-DD'));
        const rewarded = {
            x,
            y: this.props.bounty.timeline.map(data => data.rewarded),
            name: 'Rewarded',
            type: 'bar',
        };
        const collected = {
            x,
            y: this.props.bounty.timeline.map(data => data.collected),
            name: 'Collected',
            type: 'bar',
        };
        const data = [rewarded, collected];
        Plotly.newPlot('plot', data, {
            yaxis: {
                title: 'Credits',
            },
            xaxis: {
                title: 'Day',
            },
        });
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
