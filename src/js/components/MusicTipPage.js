import React from 'react';

export default class MusicTipPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="music-tip-page">
        <div className="tip-page__back-button" onClick={this.props.handleBackToTipsClick}>
          <i className="fa fa-chevron-left"></i> Back
        </div>
        <div className="tip-page__content">
          <h4 className="tip-page__title"><i className="fa fa-music"></i> Listen to music</h4>
          <p>Certain types of music (such as classical) have been proven to have a calming effect on people experiencing significant stress.</p>
          <p>It might make a big difference, give it a shot!</p>
          <div className="tip-page__button-container">
            <div className="button tip-page__start-button">Start Activity</div>
          </div>
        </div>
      </div>
    );
  }
}