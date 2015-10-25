import React from 'react';

export default class MoodCorrect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let message;
    switch (this.props.moodAssessment) {
      case 'good':
        message = "Glad to hear it! Thanks for the feedback, hope things keep going well"
        break;
      case 'ok':
        message = "Thanks for the feedback, and hang in there. If you're worried, try some of the tips listed in this app"
        break;
      case 'bad':
        message = "We're sorry to hear that, but thank you for the feedback. Take a break and try some of the tips listed in this app"
        break;
    }

    return (
      <div className="page mood-correct">
        <h4>{message}</h4>
      </div>
    );
  }
}