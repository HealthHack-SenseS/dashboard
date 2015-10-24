import React from 'react';

export default class MoodIncorrect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div
        className="page mood-rating"
        onClick={this.props.handleRateMood}
      >
        <div className="mood-rating__smiley">
          <i className="fa fa-smile-o"></i>
        </div>
        <div className="mood-rating__smiley">
          <i className="fa fa-frown-o"></i>
        </div>
      </div>
    );
  }
}