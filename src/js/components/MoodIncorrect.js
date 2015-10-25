import React from 'react';

export default class MoodIncorrect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackGiven: false
    };

    this.handleMoodFeedback = this.handleMoodFeedback.bind(this);
  }

  handleMoodFeedback(feedback) {
    this.setState({ feedbackGiven: true });
    this.props.handleMoodFeedback(feedback);
  }

  render() {
    let feedbackMessage;
    if (this.state.feedbackGiven) {
      feedbackMessage = "Thanks for the feedback, I promise I'll get better over time!";
    }

    return (
      <div className="page mood-incorrect">
        <h3>Sorry about that!</h3>
        <p>So that we can help you better in the future, how are you feeling at the moment?</p>
        <div className="mood-incorrect__inputs">
          <div
            className="mood-incorrect__input mood-incorrect__input--bad"
            onClick={this.handleMoodFeedback.bind(this, 'bad')}
          >
            <i className="fa fa-frown-o"></i>
          </div>
          <div
            className="mood-incorrect__input mood-incorrect__input--ok"
            onClick={this.handleMoodFeedback.bind(this, 'ok')}
          >
            <i className="fa fa-meh-o"></i>
          </div>
          <div
            className="mood-incorrect__input mood-incorrect__input--good"
            onClick={this.handleMoodFeedback.bind(this, 'good')}
          >
            <i className="fa fa-smile-o"></i>
          </div>
        </div>
        <h5>{feedbackMessage}</h5>
      </div>
    );
  }
}