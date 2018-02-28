import React, { Component } from 'react';
import Header from './Header';
import SearchBarContainer from '../containers/SearchBarContainer';
import ItemsContainer from '../containers/ItemsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBarContainer />
        <ItemsContainer />
      </div>
    );
  }
}

export default App;
