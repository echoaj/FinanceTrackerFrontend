import React, { Component } from 'react';
import DataLoadTable from './DataLoadTable';


class App extends Component {

  render() {
    return <div class="App">
              <h1><b>Finance Tracker</b></h1>
              <DataLoadTable refreshRate={60} />
            </div>;
  }

}

export default App;
