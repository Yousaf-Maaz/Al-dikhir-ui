import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;