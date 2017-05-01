import React from 'react';

export default class Docking extends React.Component {
    componentDidMount() {
        this.updatePlot();
    }

    componentDidUpdate() {
        this.updatePlot();
    }

    updatePlot() {
        const data = [{
            x: this.props.docking.durations,
            type: 'histogram',
            autobinx: false,
            xbins: {
                start: 0,
                end: 300,
                size: 5,
            },
        }];
        Plotly.newPlot('plot2', data, {
            xaxis: {
                title: 'Seconds to dock',
            },
            yaxis: {
                title: 'Count',
            },
        });
    }

    render() {
        return (
            <div>
                <h2>Docking Statistics</h2>
                <div>Completed Dockings: {this.props.docking.durations.length}</div>
                <div id='plot2'/>
            </div>
        );
    }
}
