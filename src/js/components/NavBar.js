import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="navbar">
        <div
          className="nav__button"
          onClick={this.props.handleNavHomeClick}
        >
          <i className="fa fa-home"></i>
        </div>
        <div
          className="nav__button"
          onClick={this.props.handleNavGraphClick}
        >
          <i className="fa fa-line-chart"></i>
        </div>
        <div
          className="nav__button"
          onClick={this.props.handleNavTipsClick}
        >
          <i className="fa fa-lightbulb-o"></i>
        </div>
        <div
          className="nav__button"
          onClick={this.props.handleNavSettingsClick}
        >
          <i className="fa fa-cog"></i>
        </div>
      </div>
    );
  }
}