import React from 'react';

import Page from './Page';
import MoodRating from './MoodRating';
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
      stressData: {}
    };

    this.handleRateMood = this.handleRateMood.bind(this);
    this.handleNavHomeClick = this.handleNavHomeClick.bind(this);
    this.handleNavGraphClick = this.handleNavGraphClick.bind(this);
    this.handleNavTipsClick = this.handleNavTipsClick.bind(this);
    this.handleNavSettingsClick = this.handleNavSettingsClick.bind(this);
    this.handleMusicTipClick = this.handleMusicTipClick.bind(this);
    this.handleBackToTipsClick = this.handleBackToTipsClick.bind(this);
    this.handleGoToMoodPage = this.handleGoToMoodPage.bind(this);
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

  handleGoToMoodPage() {
    this.setPage(null);
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
      case "home":
        page = (
          <HomePage
            moodAssessment="good"
            handleGoToMoodPage={this.handleGoToMoodPage}
          />
        );
        break;
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
      default:
        page = "mood";
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