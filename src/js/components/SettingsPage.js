import React from 'react';

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="page settings-page">
        <div className="setting">
          Your personal stress assistant <input type="text" placeholder="Mr. Roboto"/>
        </div>
        <div className="setting">
          Your name <input type="text" value={this.props.userName} onChange={this.props.handleUserNameChange}/>
        </div>
        <div className="setting">
          Notifications <input type="checkbox"/>
        </div>
      </div>
    );
  }
}