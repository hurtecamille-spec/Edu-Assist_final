'use client';

import React from 'react';
import MagicButton from '../components/ui/Button';

export default function HomePage() {
  const enterOrbit = () => {
    alert("Préparez-vous à l'hyper-espace éducatif ! Redirection imaginaire...");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff6ec7' }}>Bienvenue dans Edu-Assist Final</h1>
      <p style={{ fontSize: '1.25rem', margin: '20px 0' }}>
        L'outil ultime pour générer des fiches d'exercices scolaires à la vitesse de la lumière.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
        <MagicButton variant="cosmic" onClick={enterOrbit}>
          Lancer l'Éditeur Spatial
        </MagicButton>
        <MagicButton variant="rainbow" onClick={() => console.log('Rainbow vibes activated')}>
          Activer les licornes
        </MagicButton>
      </div>
    </div>
  );
}
