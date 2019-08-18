import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.socket = io();
    this.addData = this.addData.bind(this);
    this.socket.on("message", (msg) => {
      this.addData(msg);
    });
  }
  addData(msg) {
    let { data } = this.state;
    data = data.concat(msg);
    this.setState({data: data});
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>msg受信</h1>
        {data.map((msg, i) =>{
          return(
            <li key={i}>{msg}</li>
          )
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
