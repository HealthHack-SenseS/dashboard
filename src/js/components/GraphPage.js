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

    let numDataPoints = this.props.stressData.length;
    let values = this.props.stressData.map((dataPoint, index) => {
      return {
        x: dataPoint[1],
        y: index / numDataPoints
      }
    });
    values = values.length > 0 ? values : [ { x: 0, y: 20 }, { x: 12, y: 18 }, { x: 24, y: 10 } ];
    let lineData = [
      {
        values,
        strokeWidth: 1
      }
    ]
    return (
      <div className="page graph-page">
        <LineChart
          data={lineData}
          width='100%'
          height={300}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 300,
            height: 200
          }}
        />
      </div>
    );
  }
}