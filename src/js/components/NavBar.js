import React from 'react';

import NavButton from './NavButton';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavButton
          navLabel="home"
          activeNav={this.props.activeNav}
          iconClass="fa fa-home"
          onClick={this.props.handleNavHomeClick}
        />
        <NavButton
          navLabel="graph"
          activeNav={this.props.activeNav}
          iconClass="fa fa-bar-chart"
          onClick={this.props.handleNavGraphClick}
        />
        <NavButton
          navLabel="tips"
          activeNav={this.props.activeNav}
          iconClass="fa fa-lightbulb-o"
          onClick={this.props.handleNavTipsClick}
        />
        <NavButton
          navLabel="settings"
          activeNav={this.props.activeNav}
          iconClass="fa fa-cog"
          onClick={this.props.handleNavSettingsClick}
        />
      </div>
    );
  }
}