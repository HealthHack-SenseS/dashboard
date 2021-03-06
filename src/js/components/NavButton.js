import React from 'react';

export default class NavButton extends React.Component {
  render() {
    let navClass = "nav__button";
    if (this.props.activeNav === this.props.navLabel) {
      navClass += "--active";
    }

    return (
      <div
        onClick={this.props.onClick}
        className={navClass}
      >
        <i className={this.props.iconClass}></i>
      </div>
    );
  }
}