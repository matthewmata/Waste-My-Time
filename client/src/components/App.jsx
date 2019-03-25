import React from 'react';
import List from './List.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <List />
        </div>
      </div>
    )
  }
}

export default App;