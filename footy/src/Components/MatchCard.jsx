import React from 'react';

const MatchCard = ({ date, opponent, url }) => {
  return (
    <div className="card">
      <div className="card-header">{date}</div>
      <div className="card-body">{opponent}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="card-button">
        View Details
      </a>
    </div>
  );
};

export default MatchCard;
