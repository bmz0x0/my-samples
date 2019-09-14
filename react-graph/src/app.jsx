"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
import Graph from './graph.jsx'
import About from './about.jsx'

const pageGraph = 0;
const pageAbout = 1;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedPage: pageGraph,
    };
  }
  onClickMenu(page) {
    console.log("Clicked Page: " + page);
    this.setState({selectedPage: page});
  }

  render() {
    let mainView;
    let {selectedPage} = this.state;
    switch (selectedPage) {
      case pageGraph:
        mainView = <Graph />;
        break;
      case pageAbout:
        mainView = <About />;
        break;
      default:
        break;
    }
    return (
      <div>
        <header>
          <nav>
            <ul className={styles.mainnav}>
              <li key={pageGraph} onClick={(p) => this.onClickMenu(pageGraph)}>グラフ</li>
              <li key={pageAbout} onClick={(p) => this.onClickMenu(pageAbout)}>about</li>
            </ul>
          </nav>
        </header>
        {mainView}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
