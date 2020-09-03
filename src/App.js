import React from 'react';
import logo from './logo.svg';
import './App.css';
import MOVIELIST from './compoenets/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Movies List
        <MOVIELIST />
      </header>
    </div>
  );
}

export default App;
