import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let moodAssessment;
    let message;
    let icon;
    switch (this.props.moodAssessment) {
      case "good":
        message = "I sense that you are feeling just right";
        icon = <i className="home-page__mood-good fa fa-smile-o"></i>;
        break;
      case "ok":
        message = "I sense that you are feeling alright";
        icon = <i className="home-page__mood-ok fa fa-meh-o"></i>;
        break;
      case "bad":
        message = "I sense that you are feeling stressed";
        icon = <i className="home-page__mood-bad fa fa-frown-o"></i>;
        break;
    }

    return (
      <div className="page home-page">
        <h1 className="home-page__title">Hi {this.props.userName}</h1>
        <h4>{message}</h4>
        <div className="home-page__mood-rating">
          {icon}
        </div>
        <div className="home-page__mood-feedback">
          Is this true?
          <div className="home-page__mood-feedback-buttons">
            <div className="button home-page__mood-correct" onClick={this.props.handleMoodCorrectClick}>Yes</div>
            <div className="button home-page__mood-incorrect" onClick={this.props.handleMoodIncorrectClick}>No</div>
          </div>
        </div>
      </div>
    );
  }
}