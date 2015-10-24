import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let moodAssessment;
    switch (this.props.moodAssessment) {
      case "good":
        moodAssessment = (
          <div className="home-page__mood-assessment">
            <h4>Looks like you're having a really good day</h4>
            <div className="home-page__mood-rating">
              <i className="fa fa-smile-o"></i>
            </div>
          </div>
        );
        break;
      case "ok":
        moodAssessment = (
          <div className="home-page__mood-assessment">
            <h4>Looks like you're having an ok day</h4>
            <div className="home-page__mood-rating">
              <i className="fa fa-meh-o"></i>
            </div>
          </div>
        );
        break;
      case "bad":
        moodAssessment = (
          <div className="home-page__mood-assessment">
            <h4>Looks like you're having a bit of a bad day</h4>
            <div className="home-page__mood-rating">
              <i className="fa fa-frown-o"></i>
            </div>
          </div>
        );
        break;
    }

    return (
      <div className="page home-page">
        <h1 className="home-page__title">Hi there, Jane</h1>
        {moodAssessment}
        <div className="home-page__mood-feedback">
          Is this is a reasonable assessment?
          <div className="home-page__mood-feedback-buttons">
            <div className="button home-page__mood-correct">Yes</div>
            <div className="button home-page__mood-incorrect">No</div>
          </div>
        </div>
      </div>
    );
  }
}