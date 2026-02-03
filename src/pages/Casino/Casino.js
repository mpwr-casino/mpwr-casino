import React from 'react';

const Casino = () => {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fbbf24', minHeight: '100vh', padding: '20px' }}>
      <h1>🎰 MPWR Casino Originals</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1-fr 1-fr', gap: '15px' }}>
        <div style={{ border: '2px solid #fbbf24', padding: '20px', borderRadius: '10px' }}>💣 Mines Game</div>
        <div style={{ border: '2px solid #fbbf24', padding: '20px', borderRadius: '10px' }}>🎡 Roulette</div>
      </div>
    </div>
  );
};

export default Casino;
