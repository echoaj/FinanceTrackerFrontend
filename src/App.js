import React, { Component } from 'react';
import DataLoadTable from './DataLoadTable';
import logger from './logger';


class App extends Component {

  render() {
    logger.debug("Test Successfull");
    return <div className="App">
              <h2><b>Finance Tracker</b></h2>
              <DataLoadTable refreshRate={60} />
            </div>;
  }

}

export default App;
