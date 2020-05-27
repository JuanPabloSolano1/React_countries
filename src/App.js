import React from 'react';
import './App.css';
import { Countries } from './Countries/Countries';
import { SearchAppBar } from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div className="App">
        <header className="App-header">
          <SearchAppBar />
          <Countries />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
