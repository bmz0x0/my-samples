import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import styles from './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0
    };

    this.socket = io();
    this.addData = this.addData.bind(this);
    this.socket.on("message", (msg) => {
      this.addData(msg);
    });
  }
  addData(msg) {
    let { data, index} = this.state;
    let temp;
    temp = {cpu: msg, index: index};
    data = data.concat(temp);
    index++;
    if ( data.length > 20 ) {
      data.shift();
    }
    this.setState({data: data, index: index});
  }
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
    const { data } = this.state;
    console.log(data);
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
        <LineChart width={400} height={400} data={data}>
          <Line dataKey="cpu" stroke="#888888" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
        </LineChart>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
