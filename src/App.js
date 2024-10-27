// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProgressSection from './components/ProgressSection';
import SurahList from './components/SurahList';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <SearchBar />
    <ProgressSection />
    <SurahList />
  </div>
);

export default App;
