import React from 'react';

export default class TipsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="tip-preview" onClick={this.props.onClick}>
        <h4 className="tip-preview__title">
          <i className={this.props.iconClass}></i> {this.props.title}<i className="tip-preview__chevron fa fa-chevron-right"></i>
        </h4>
      </div>
    );
  }
}