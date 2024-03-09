import React, { Component } from 'react';
import Classprops from './Classprops';
import Functionprops from './Functionprops';

class App extends Component {
  render() {
    return (
      <div>
        <Classprops name="Learner 1" place="LA"/>
        <Classprops name="Learner 2"/>
        <Classprops name="Learner 3">
          <button>Click</button>
        </Classprops>
        <Functionprops name="Learner 4" />{" "}
      </div>
    )
  }
}

export default App