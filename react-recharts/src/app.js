import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class App extends React.Component {
  render() {
    const data = [
      { name: 'a', uv: 12, pv: 5 },
      { name: 'b', uv: 13, pv: 3 },
      { name: 'c', uv: 19, pv: 9 },
      { name: 'd', uv: 11, pv: 10 },
      { name: 'e', uv: 9, pv: 12 },
      { name: 'f', uv: 22, pv: 13 },
    ];
    return (
      <div className="App">
        <LineChart width={400} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" stroke="black" />
        </LineChart>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
