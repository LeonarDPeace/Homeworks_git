import React from 'react';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <ProfileCard
        name="Laura Gómez"
        avatar="https://i.pravatar.cc/150?img=32"
        className="size-1"
      />
      <ProfileCard
        name="Carlos Pérez"
        avatar="https://i.pravatar.cc/150?img=12"
        className="size-2"
      />
      <ProfileCard
        name="Ana Ruiz"
        avatar="https://i.pravatar.cc/150?img=45"
        className="size-3"
      />
    </div>
  );
}

export default App;
