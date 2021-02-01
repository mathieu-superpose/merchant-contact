import React from 'react';
import ReactDOM from 'react-dom';
import Clients from 'components/Clients';
import Client from 'components/Client';

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <Clients />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));