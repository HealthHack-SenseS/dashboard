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
      activePage: 'home',
      activeNav: 'home',
      stressData: {},
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

  handleLoadGraphData() {
    // httpGET('http://149.171.22.31:8083/query?db=shimmer&q=SELECT value FROM GSR_CAL').then((response) => {
    //   let stressData = JSON.parse(response).results[0].series[0].values;
    //   this.setState({ stressData });
    // });
  }

  render() {
    let page;
    switch (this.state.activePage) {
      case "graph":
        page = (
          <GraphPage
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
        page = <SettingsPage/>;
        break;
      case "mood-correct":
        page = (
          <MoodCorrect/>
        );
        break;
      case "mood-incorrect":
        page = (
          <MoodIncorrect/>
        );
        break;
      case "home":
      default:
        page = (
          <HomePage
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