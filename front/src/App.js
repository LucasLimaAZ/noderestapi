import React from 'react';
import './App.css';
import api from './services/api'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'

import Header from './components/Header'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
