import React, { Component } from "react";
import "./Home.css";
import Cases from "../../components/Cases/Cases";
import Recovery from "../../components/Recovery/Recovery";
import CountryList from "../../components/CountryList/CountryList";
import Map2 from "../../components/Map/Map2";
import LatestTweets from "../../components/LatestTweets/LatestTweets";
import SpreadTrends from "../../components/SpreadTrends/SpreadTrends";
import News from "../../components/News/News";

import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { isDark } = this.props;
    return (
      <div
        className="body"
        style={{ background: isDark ? "#100a22" : "#f7f7f7" }}
      >
        <div className="home_container">
          <div className="left_area">
            <div className="cases_container">
              <Cases />
            </div>

            <div className="map_country_row">
              <div className="CountryList_container">
                <CountryList isDark={isDark} />
              </div>
              <div className="Map_container">
                <Map2 isDark={isDark} />
              </div>
            </div>

            <div className="st_news margin_top_20">
              <div className="SpreadTrends_container">
                <SpreadTrends isDark={isDark} />
              </div>
              <div className="News_container">
                <News isDark={isDark} />
              </div>
            </div>
          </div>

          <div className="right_area">
            <div className="recovery_container">
              <Recovery isDark={isDark} />
            </div>
            <div className="latest_tweet">
              <LatestTweets isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDark: state.isDark,
  };
};

export default connect(mapStateToProps)(Home);
