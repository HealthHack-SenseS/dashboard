import React from 'react';

import TipPreview from './TipPreview';

export default class TipsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="tips-page">
        <TipPreview
          title="Listen to music"
          iconClass="fa fa-music"
          onClick={this.props.handleMusicTipClick}
        />
        <TipPreview
          title="Watch some videos"
          iconClass="fa fa-television"
        />
        <TipPreview
          title="Connect with friends"
          iconClass="fa fa-users"
        />
        <TipPreview
          title="Read"
          iconClass="fa fa-book"
        />
        <TipPreview
          title="Get active"
          iconClass="fa fa-futbol-o"
        />
      </div>
    );
  }
}