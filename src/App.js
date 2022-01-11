import React, { Component } from 'react';
import DataLoadTable from './DataLoadTable';
import log from './logger';


class App extends Component {

  render() {
    log("App Started");
    return <div className="App">
              <h2><b>Finance Tracker</b></h2>
              <DataLoadTable refreshRate={60} />
            </div>;
  }

}

export default App;
