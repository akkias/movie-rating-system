import React, { Component } from 'react';
import Movies from './Movies'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies store={this.props.store} />
      </div>
    );
  }
}

export default App;
