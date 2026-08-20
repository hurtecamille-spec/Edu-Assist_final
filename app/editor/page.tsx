'use client';

import React, { useState } from 'react';
import { usePDFState } from '../../hooks/usePDFState';
import MagicButton from '../../components/ui/Button';
import WorksheetsCanvas from '../../components/editor/Canvas';

export default function EditorPage() {
  const { specs, panicMode, increaseNonsense, togglePanicMode } = usePDFState();
  const [inputText, setInputText] = useState('');

  return (
    <div style={{ display: 'flex', gap: '40px', minHeight: '80vh' }}>
      {/* Sidebar Controls */}
      <div style={{ width: '300px', borderRight: '1px solid #ff6ec7', paddingRight: '20px' }}>
        <h3>Contrôles de la Fiche</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <label>Texte de la fiche :</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ width: '100%', height: '100px', marginTop: '5px' }}
            placeholder="Entrez vos questions ou exercices..."
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <MagicButton variant="cosmic" onClick={increaseNonsense}>
            Ajouter de l'absurdité ({Math.round(specs.nonsenseRatio * 100)}%)
          </MagicButton>

          <MagicButton variant="boring" onClick={togglePanicMode}>
            {panicMode ? "Désactiver la Panique" : "Activer la Panique"}
          </MagicButton>
        </div>

        {panicMode && (
          <div style={{ color: 'red', marginTop: '20px', fontWeight: 'bold', animation: 'spin 1s linear infinite' }}>
            ⚠️ LE DÉVELOPPEUR PANIQUE ⚠️
          </div>
        )}
      </div>

      {/* Editor Main Canvas */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <WorksheetsCanvas specs={specs} content={inputText} />
      </div>
    </div>
  );
}
