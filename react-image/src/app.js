import React from 'react';
import ReactDOM from 'react-dom'

import sea from './images/sea_image.jpg'

class App extends React.Component {
  render() {
    return (
      <img src={sea} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
