import React from 'react';

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
    return (
      <div className="page graph-page">
        Graph
      </div>
    );
  }
}
        // <iframe src="http://149.171.22.31:3000/dashboard-solo/db/new-dashboard?panelId=3&fullscreen&from=1445660848302&to=1445661148302" width="100%" height="200" frameBorder="0"></iframe>