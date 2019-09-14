import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
import Graph from './graph.jsx'

class App extends React.Component {
  onClickA() {
    console.log("Clicked A.")
  }
  onClickB() {
    console.log("Clicked B.")
  }
  onClickC() {
    console.log("Clicked C.")
  }
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className={styles.mainnav}>
              <li onClick={this.onClickA}>a</li>
              <li onClick={this.onClickB}>b</li>
              <li onClick={this.onClickC}>c</li>
            </ul>
          </nav>
        </header>
        <h1>msg受信</h1>
        <Graph />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
