import React, { Component } from 'react';
import DataLoadTable from './DataLoadTable';


class App extends Component {

  render() {
    return <div className="App">
              <h2><b>Finance Tracker</b></h2>
              <DataLoadTable refreshRate={60} />
            </div>;
  }

}

export default App;
