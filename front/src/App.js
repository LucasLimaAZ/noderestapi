import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
