import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 1,
    };
  }
  componentDidMount() {
    this.socket = io();
    this.socket.on("message", (msg) => {
      this.addData(msg);
    });
  }
  componentWillUnmount() {
    this.socket.off("message");
    this.socket.disconnect(true);
    delete this.socket;
  }
  addData(msg) {
    let { data, count} = this.state;
    let temp;
    temp = {cpu: msg, count: count};
    data = data.concat(temp);
    count++;
    if ( data.length > 20 ) {
      data.shift();
    }
    this.setState({data: data, count: count});
  }
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <AreaChart width={400} height={400} data={data}>
        <Area dataKey="cpu" stroke="#888888" />
        <XAxis dataKey="count"/>
        <YAxis domain={[0, 100]}/>
      </AreaChart>
    );
  }
}

export default Graph;
