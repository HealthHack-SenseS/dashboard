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
        message = "Awesome! Keep it up. If you are looking for something to do, try one of our proven relaxation tips."
        break;
      case 'ok':
        message = "If you're looking to relax, try one of our tips"
        break;
      case 'bad':
        message = "I'm sorry to hear that. Try one of our proven relaxation tips"
        break;
    }

    return (
      <div className="page mood-correct">
        <h4 className="mood-correct__message">{message}</h4>
      </div>
    );
  }
}