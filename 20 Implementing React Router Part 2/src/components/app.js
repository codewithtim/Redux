import React from 'react';

const App = (props) => (
  <div>
    <div>
      <h1>This is our app component</h1>
      {props.children}
    </div>
  </div>
)

export default App;