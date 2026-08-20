'use client';

import React from 'react';

export default function DashboardPage() {
  const documents = [
    { id: 1, title: 'Calcul mental et piraterie - CM2', date: '2026-08-20' },
    { id: 2, title: 'Physique quantique pour bébés - Maternelle', date: '2026-08-19' },
    { id: 3, title: 'Grammaire spatiale intersidérale - 6ème', date: '2026-08-15' },
  ];

  return (
    <div>
      <h1 style={{ color: '#ff6ec7' }}>Mon Tableau de Bord Spatial</h1>
      <p>Retrouvez ici vos fiches d'exercices PDF déjà générées ou en cours de cuisson.</p>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '30px' }}>
        {documents.map((doc) => (
          <li
            key={doc.id}
            style={{
              padding: '15px',
              border: '1px solid #39ff14',
              borderRadius: '8px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>📜 <strong>{doc.title}</strong> (Créé le {doc.date})</span>
            <button style={{ backgroundColor: '#ff6ec7', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
              Télécharger
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
