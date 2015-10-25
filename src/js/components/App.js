import React from 'react';

import Page from './Page';
import MoodCorrect from './MoodCorrect';
import MoodIncorrect from './MoodIncorrect';
import HomePage from './HomePage';
import GraphPage from './GraphPage';
import TipsPage from './TipsPage';
import MusicTipPage from './MusicTipPage';
import SettingsPage from './SettingsPage';
import NavBar from './NavBar';

import { httpGET } from '../util/ajax';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Jane',
      activePage: 'home',
      activeNav: 'home',
      stressDataMinutes: [],
      stressDataHours: [],
      moodAssessment: 'bad'
    };

    this.handleRateMood = this.handleRateMood.bind(this);
    this.handleNavHomeClick = this.handleNavHomeClick.bind(this);
    this.handleNavGraphClick = this.handleNavGraphClick.bind(this);
    this.handleNavTipsClick = this.handleNavTipsClick.bind(this);
    this.handleNavSettingsClick = this.handleNavSettingsClick.bind(this);
    this.handleMusicTipClick = this.handleMusicTipClick.bind(this);
    this.handleBackToTipsClick = this.handleBackToTipsClick.bind(this);
    this.handleMoodCorrectClick = this.handleMoodCorrectClick.bind(this);
    this.handleMoodIncorrectClick = this.handleMoodIncorrectClick.bind(this);
    this.handleRateMood = this.handleRateMood.bind(this);
    this.handleMoodFeedback = this.handleMoodFeedback.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleLoadGraphData = this.handleLoadGraphData.bind(this);
    this.handleLoadMinuteData = this.handleLoadMinuteData.bind(this);
    this.handleLoadHourData = this.handleLoadHourData.bind(this);
  }

  setPage(page) {
    this.setState({
      activePage: page,
      activeNav: page
    });
  }

  handleRateMood() {
    this.setPage('home');
  }

  handleNavHomeClick() {
    this.setPage('home');
  }

  handleNavGraphClick() {
    this.setPage('graph');
  }

  handleNavTipsClick() {
    this.setPage('tips');
  }

  handleNavSettingsClick() {
    this.setPage('settings');
  }

  handleMusicTipClick() {
    this.setState({ activePage: 'music-tip' });
  }

  handleBackToTipsClick() {
    this.setPage('tips');
  }

  handleMoodCorrectClick() {
    this.setState({ activePage: 'mood-correct' });
  }

  handleMoodIncorrectClick() {
    this.setState({ activePage: 'mood-incorrect' });
  }

  handleMoodFeedback(feedback) {
    this.setState({
      moodAssessment: feedback,
      activePage: 'mood-correct'
    });
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleLoadGraphData() {
    this.handleLoadMinuteData();
    this.handleLoadHourData();
  }

  handleLoadMinuteData() {
    httpGET(`http://149.171.22.31:8086/query?db=shimmer&q=${encodeURIComponent('SELECT mean(value) FROM /GSR_CAL.*/ WHERE time > now() - 5m GROUP BY time(5s)')}`).then((response) => {
      let stressDataMinutes = JSON.parse(response).results[0].series[0].values;
      this.setState({ stressDataMinutes });
      window.setTimeout(this.handleLoadMinuteData, 5000);
    }).catch((error) => {
      console.error(`Error loading graph minute data: ${error}`);
      window.setTimeout(this.handleLoadMinuteData, 5000);
    });
  }

  handleLoadHourData() {
    httpGET(`http://149.171.22.31:8086/query?db=shimmer&q=${encodeURIComponent('SELECT mean(value) FROM /GSR_CAL.*/ WHERE time > now() - 1h GROUP BY time(1m)')}`).then((response) => {
      let stressDataHours = JSON.parse(response).results[0].series[0].values;
      this.setState({ stressDataHours });
      window.setTimeout(this.handleLoadMinuteData, 60000);
    }).catch((error) => {
      console.error(`Error loading graph hour data: ${error}`);
      window.setTimeout(this.handleLoadMinuteData, 60000);
    });
  }

  render() {
    let page;
    switch (this.state.activePage) {
      case "graph":
        page = (
          <GraphPage
            stressDataMinutes={this.state.stressDataMinutes}
            stressDataHours={this.state.stressDataHours}
            handleLoadGraphData={this.handleLoadGraphData}
          />
        );
        break;
      case "tips":
        page = (
          <TipsPage
            handleMusicTipClick={this.handleMusicTipClick}
            handleBackToTipsClick={this.handleBackToTipsClick}
          />
        );
        break;
      case "music-tip":
        page = (
          <MusicTipPage
            handleBackToTipsClick={this.handleBackToTipsClick}
          />
        );
        break;
      case "settings":
        page = (
          <SettingsPage
            userName={this.state.userName}
            handleUserNameChange={this.handleUserNameChange}
          />
        );
        break;
      case "mood-correct":
        page = (
          <MoodCorrect
            moodAssessment={this.state.moodAssessment}
          />
        );
        break;
      case "mood-incorrect":
        page = (
          <MoodIncorrect
            handleMoodFeedback={this.handleMoodFeedback}
          />
        );
        break;
      case "home":
      default:
        page = (
          <HomePage
            userName={this.state.userName}
            moodAssessment={this.state.moodAssessment}
            handleMoodCorrectClick={this.handleMoodCorrectClick}
            handleMoodIncorrectClick={this.handleMoodIncorrectClick}
          />
        );
        break;
        break;
    }

    return (
      <div className="app">
        <div className="content">
          {page}
        </div>
        <div className="nav">
          <NavBar
            activePage={this.state.activePage}
            activeNav={this.state.activeNav}
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