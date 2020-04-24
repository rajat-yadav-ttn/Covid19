import React, { Component } from "react";
import {Line} from "react-chartjs-2";
import "./SpreadTrends.css";


const Confirmed = (props) => (
  <div>
    <Line
      data={props.cnfData}
      options={{
        responsive: true,
        title: {
          display: true,
          text: "Confirmed Cases",
          fontSize: 18,
        },
        legend: {
          display: false,
        },
      }}
    />
  </div>
);

const Recovered = (props) => (
  <div>
    {" "}
    <Line
      data={props.recData}
      options={{
        responsive: true,
        title: {
          display: true,
          text: "Recovered Cases",
          fontSize: 18,
        },
        legend: {
          display: false,
        },
      }}
    />
  </div>
);

const Deceased = (props) => (
  <div>
    <Line
      data={props.deathData}
      options={{
        responsive: true,
        title: {
          display: true,
          text: "Deceased Cases",
          fontSize: 18,
        },
        legend: {
          display: false,
        },
      }}
    />
  </div>
);

class SpreadTrends extends Component {
  state = {
    datesLabel: null,
    showCnf: true,
    cnfCases: [],
    showRec: false,
    recCases: [],
    showDec: false,
    decCases: [],

    casesInc: false,
    deathsInc: false,
    recoveredInc: false,
  };

  cnfHandler = (e) => {
    e.preventDefault();
    this.setState({
      showCnf: true,
      showRec: false,
      showDec: false,
    });
  };

  recHandler = (e) => {
    e.preventDefault();
    this.setState({
      showCnf: false,
      showRec: true,
      showDec: false,
    });
  };

  decHandler = (e) => {
    e.preventDefault();
    this.setState({
      showCnf: false,
      showRec: false,
      showDec: true,
    });
  };

  componentDidMount() {
    this.fetchHistoryData();
  }

  async fetchHistoryData() {
    let cases = [];

    await fetch("https://corona.lmao.ninja/v2/historical/all")
      .then((res) => res.json())
      .then((res) => {
        cases = res;
      });

    // objects into array of objects
    let casesArr = Object.keys(cases).map((key) => cases[key]);

    let confirmed = casesArr[0];
    let casesKeys = Object.keys(confirmed)
      .reverse()
      .slice(0, 7)
      .reverse();
    this.setState({ datesLabel: casesKeys });

    // getting  Cases of 7 days
    let cnfCases = Object.values(confirmed)
      .reverse()
      .slice(0, 7)
      .reverse();
    this.setState({ cnfCases: cnfCases });

    let recovered = casesArr[2];
    let recCases = Object.values(recovered)
      .reverse()
      .slice(0, 7)
      .reverse();
    this.setState({ recCases: recCases });

    let deceased = casesArr[1];
    let decCases = Object.values(deceased)
      .reverse()
      .slice(0, 7)
      .reverse();
    this.setState({ decCases: decCases });
  }

  render() {
    const cnfData = {
      labels: this.state.datesLabel,
      datasets: [
        {
          label: "Confirmed Cases",
          backgroundColor: "transparent",
          borderColor: "rgba(255,0,0,1)",
          borderWidth: 2,
          data: this.state.cnfCases,
        },
      ],
    };
    const recData = {
      labels: this.state.datesLabel,
      datasets: [
        {
          label: "Recovered Cases",
          backgroundColor: "transparent",
          borderColor: "rgba(0,255,0,1)",
          borderWidth: 2,
          data: this.state.recCases,
        },
      ],
    };
    const deathData = {
      labels: this.state.datesLabel,
      datasets: [
        {
          label: "Deceased Cases",
          backgroundColor: "transparent",
          borderColor: "rgba(255,0,0,1)",
          borderWidth: 2,
          data: this.state.decCases,
        },
      ],
    };

    let { showCnf, showRec, showDec } = this.state;
    const renderTab = () => {
      if (showCnf) {
        return <Confirmed cnfData={cnfData} />;
      } else if (showRec) {
        return <Recovered recData={recData} />;
      } else if (showDec) {
        return <Deceased deathData={deathData} />;
      }
    };
    return (
      <div
        className="spread_trends_container"
        style={{ background: this.props.isDark ? "#25274b" : "#fff" }}
      >
        <div className="heading_tab_row">
          <h3 style={{ color: this.props.isDark ? "#ccccea" : "#30313A" }}>
            Spread Trends
          </h3>

          <ul className="tabs">
            <li className="tab_btn">
              <button
                onClick={this.cnfHandler}
                style={{
                  backgroundColor: showCnf
                    ? "#52586A"
                    : this.props.isDark
                    ? "#7e83c2"
                    : "#F5F5F5",
                  color: showCnf ? "#FFFFFF" : "#30313A",
                }}
              >
                Confirmed
              </button>
            </li>

            <li className="tab_btn">
              <button
                onClick={this.recHandler}
                style={{
                  backgroundColor: showRec
                    ? "#52586A"
                    : this.props.isDark
                    ? "#7e83c2"
                    : "#F5F5F5",
                  color: showRec ? "#FFFFFF" : "#30313A",
                }}
              >
                Recovered
              </button>
            </li>

            <li className="tab_btn">
              <button
                onClick={this.decHandler}
                style={{
                  backgroundColor: showDec
                    ? "#52586A"
                    : this.props.isDark
                    ? "#7e83c2"
                    : "#F5F5F5",
                  color: showDec ? "#FFFFFF" : "#30313A",
                }}
              >
                Deceased
              </button>
            </li>
          </ul>
        </div>

        <div>{renderTab()}</div>
      </div>
    );
  }
}

export default SpreadTrends;
