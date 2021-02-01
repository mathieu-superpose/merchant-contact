import React from 'react';
import ReactDOM from 'react-dom';
import Clients from 'components/Clients';
import Client from 'components/Client';
import Colors from 'components/Colors';

const App = () => (
  <div>
    <Colors />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));