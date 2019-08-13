import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  onClickButton() {
    alert("alert!");
  }
  render() {
    return <button onClick={this.onClickButton}>Press</button>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
