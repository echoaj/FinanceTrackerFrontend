import React, { Component } from 'react';
import DataLoadTable from './DataLoadTable';


class App extends Component {

  render() {
    return (
      <div>
        <h1>WELCOME</h1>
        <DataLoadTable refreshRate={60} />
      </div>
    );
  }

}

export default App;
