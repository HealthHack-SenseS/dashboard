import React from 'react';

export default class TipsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let iconClass = this.props.iconClass ? `tip-preview__icon ${this.props.iconClass}` : "tip-preview__icon";
    return (
      <div className="tip-preview" onClick={this.props.onClick}>
        <h4 className="tip-preview__title">
          <i className={iconClass}></i> {this.props.title}<i className="tip-preview__chevron fa fa-chevron-right"></i>
        </h4>
      </div>
    );
  }
}