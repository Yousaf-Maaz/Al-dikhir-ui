// src/components/SurahList.js
import React from 'react';

const SurahList = () => {
  const surahs = [
    { number: 1, name: "Al-Fatihah", englishName: "The Opener", ayahs: 7 },
    { number: 2, name: "Al-Baqarah", englishName: "The Cow", ayahs: 286 },
    // Add remaining surahs here
  ];

  return (
    <div className="surah-list">
      {surahs.map(surah => (
        <div key={surah.number} className="surah-card">
          <h4>{surah.number}. {surah.name}</h4>
          <p>{surah.englishName}</p>
          <span>{surah.ayahs} Ayahs</span>
        </div>
      ))}
    </div>
  );
};

export default SurahList;
