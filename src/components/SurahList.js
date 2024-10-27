import React from 'react';

export default function SurahList() {
  const surahs = [
    { number: 1, name: 'Al-Fatihah', translation: 'The Opener', ayahs: 7 },
    { number: 2, name: 'Al-Baqarah', translation: 'The Cow', ayahs: 286 },
    // Add more surahs as needed
  ];

  return (
    <section className="surah-list">
      {surahs.map(surah => (
        <div key={surah.number} className="surah">
          <div className="surah-number">{surah.number}</div>
          <div className="surah-info">
            <h4>{surah.name}</h4>
            <p>{surah.translation}</p>
            <span>{surah.ayahs} Ayahs</span>
          </div>
        </div>
      ))}
    </section>
  );
}