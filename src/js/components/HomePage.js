import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: `I sense that you are feeling a bit stressed`
    };
  }

  componentDidMount() {
    let stressLevel;
    let level = this.props.moodFeedbackLevel;
    if (level >= 0 && level < 20) {
      stressLevel = 'not at all';
    } else if (level >= 20 && level < 40) {
      stressLevel = 'a bit';
    } else if (level >= 40 && level < 60) {
      stressLevel = 'moderately';
    } else if (level >= 60 && level < 80) {
      stressLevel = 'quite a bit';
    } else if (level >= 80) {
      stressLevel = 'very';
    }
    let message = `I sense that you are feeling ${stressLevel} stressed`;
    this.setState({ message })
  }

  render() {
    let stressLevel;
    let message;
    let level = this.props.moodFeedbackLevel;
    let stressedMessagePart1 = "You're not alone!";
    let stressedMessagePart2 = "Try our quick tips to relax";
    if (level >= 0 && level < 20) {
      stressLevel = 'not at all';
      message = 'Glad to hear it, keep it up!';
    } else if (level >= 20 && level < 40) {
      stressLevel = 'a bit';
      message = <span>{stressedMessagePart1}<br/>{stressedMessagePart2}</span>;
    } else if (level >= 40 && level < 60) {
      stressLevel = 'moderately';
      message = <span>{stressedMessagePart1}<br/>{stressedMessagePart2}</span>;
    } else if (level >= 60 && level < 80) {
      stressLevel = 'quite a bit';
      message = <span>{stressedMessagePart1}<br/>{stressedMessagePart2}</span>;
    } else if (level >= 80) {
      stressLevel = 'very';
      message = <span>{stressedMessagePart1}<br/>{stressedMessagePart2}</span>;
    }


    return (
      <div className="page home-page">
        <h1 className="home-page__title">Hi {this.props.userName}</h1>
        <h4>{this.state.message}</h4>
        <div className="home-page__inputs">
          <h4>Rate your level of stress</h4>
          <div>
            <div className="mood-incorrect__input mood-incorrect__input--good">
              <i className="fa fa-smile-o"></i>
            </div>
            <div className="mood-incorrect__input mood-incorrect__input--ok">
              <i className="fa fa-meh-o"></i>
            </div>
            <div className="mood-incorrect__input mood-incorrect__input--bad">
              <i className="fa fa-frown-o"></i>
            </div>
          </div>
          <div className="home-page__range">
            <input type="range" value={this.props.moodFeedbackLevel} onChange={this.props.handleMoodFeedbackChange} step="25" list="steplist"/>
            <datalist id="steplist">
              <option>0</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </datalist>
          </div>
          <span>{stressLevel[0].toUpperCase() + stressLevel.substr(1)} stressed</span>
          <span className="home-page__tip-suggestion">{message}</span>
        </div>
      </div>
    );
  }
}