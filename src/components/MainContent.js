import React from 'react';
import ProgressSection from './ProgressSection';
import SurahList from './SurahList';

export default function MainContent() {
  return (
    <main className="main-content">
      <ProgressSection />
      <SurahList />
    </main>
  );
}