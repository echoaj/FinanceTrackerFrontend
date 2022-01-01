import React, { Component } from 'react';
import DataLoadTable from './DataLoadTable';


class App extends Component {

  render() {
    return <DataLoadTable refreshRate={60}/>
  }

}

export default App;
