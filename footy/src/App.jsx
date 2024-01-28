import React from 'react';
import './index.css';
import MatchCard from './Components/MatchCard';

const matches = [
  // Add your match data here
  { date: 'February 4, 2024', opponent: 'Al Hilal vs Miami', url: 'https://www.intermiamicf.com/' },
  { date: 'February 1 , 2024', opponent: 'Al Nassr vs Miami ', url: 'https://www.intermiamicf.com/' },
  { date: 'February 7, 2024', opponent: 'Vissel Kobe vs Miami ', url: 'https://www.intermiamicf.com/' },
  { date: 'February 11, 2024', opponent: 'Real Madrid vs Las Palmas', url: 'https://www.realmadrid.com/en-US' },
  { date: 'February 4, 2024', opponent: 'Real Madrid vs Getafe', url: 'https://www.realmadrid.com/en-US' },
  { date: 'February 11, 2024', opponent: 'Real Madrid vs Atletico Madrid', url: 'https://www.realmadrid.com/en-US' },
  { date: 'February 6, 2024', opponent: 'Barcelona vs Villareal', url: 'https://www.fcbarcelona.com/en/' },
  { date: 'February 13, 2024', opponent: 'Barcelona vs Alves', url: 'https://www.fcbarcelona.com/en/' },
  { date: 'February 16, 2024', opponent: 'Barcelona vs Osasuna', url: 'https://www.fcbarcelona.com/en/' },
  { date: 'February 6, 2024', opponent: 'Barcelona vs Napoli', url: 'https://www.fcbarcelona.com/en/' },
  // ... add more matches
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Upcoming Football Fixtures</h1>
      </header>
      <div className="card-container">
        {matches.map((match, index) => (
          <MatchCard
            key={index}
            date={match.date}
            opponent={match.opponent}
            url={match.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

