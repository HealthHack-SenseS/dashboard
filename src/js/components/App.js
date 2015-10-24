import React from 'react';

import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };

    this.handleNavHomeClick = this.handleNavHomeClick.bind(this);
    this.handleNavGraphClick = this.handleNavGraphClick.bind(this);
    this.handleNavTipsClick = this.handleNavTipsClick.bind(this);
    this.handleNavSettingsClick = this.handleNavSettingsClick.bind(this);
  }

  handleNavHomeClick() {
    console.log('home');
  }

  handleNavGraphClick() {
    console.log('graph');
  }

  handleNavTipsClick() {
    console.log('tips');
  }

  handleNavSettingsClick() {
    console.log('settings');
  }

  render() {
    return (
      <div className="app">
        <div className="body">Body</div>
        <div className="nav">
          <NavBar
            handleNavHomeClick={this.handleNavHomeClick}
            handleNavGraphClick={this.handleNavGraphClick}
            handleNavTipsClick={this.handleNavTipsClick}
            handleNavSettingsClick={this.handleNavSettingsClick}
          />
        </div>
      </div>
    );
  }
}