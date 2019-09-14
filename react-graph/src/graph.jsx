import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0,
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
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <LineChart width={400} height={400} data={data}>
        <Line dataKey="cpu" stroke="#888888" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
      </LineChart>
    );
  }
}

export default Graph;
