import React from 'react';
import rd3 from 'react-d3';

export default class GraphPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.handleLoadGraphData();
  }

  render() {
    let LineChart = rd3.LineChart;

    let minuteValues = this.props.stressDataMinutes.filter((dataPoint) => {
      return dataPoint[1] !== null;
    }).map((dataPoint, index) => {
      return {
        x: index,
        y: dataPoint[1] || 260
      }
    });
    minuteValues = minuteValues.length > 0 ? minuteValues : [ { x: 0, y: 20 }, { x: 12, y: 18 }, { x: 24, y: 10 } ];
    let lineMinuteData = [{
      values: minuteValues,
      strokeWidth: 1
    }];

    let hourValues = this.props.stressDataHours.filter((dataPoint) => {
      return dataPoint[1] !== null;
    }).map((dataPoint, index) => {
      if (dataPoint[1] > 310) {
        dataPoint[1] = 310;
      }
      return {
        x: index,
        y: dataPoint[1] || 260
      }
    });
    hourValues = hourValues.length > 0 ? hourValues : [ { x: 0, y: 20 }, { x: 12, y: 18 }, { x: 24, y: 10 } ];
    let lineHourData = [{
      values: hourValues,
      strokeWidth: 1
    }];

    return (
      <div className="page graph-page">
        <h4 className="graph-page__title">Your stress data</h4>
        <LineChart
          data={lineMinuteData}
          width='100%'
          height={150}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 300,
            height: 200
          }}
        />
        <span className="graph-page__x-label">The last 5 minutes</span>
        <LineChart
          data={lineHourData}
          width='100%'
          height={150}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 300,
            height: 200
          }}
        />
        <span className="graph-page__x-label">The last hour</span>
      </div>
    );
  }
}