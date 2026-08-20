import React from 'react';
import { PDFMagicSpecs } from '../../types';

interface CanvasProps {
  specs: PDFMagicSpecs;
  content: string;
}

export default function WorksheetsCanvas({ specs, content }: CanvasProps) {
  return (
    <div
      style={{
        border: '3px dashed #ff6ec7',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#333333',
        width: '595px', // Standard A4 width in pixels at 72dpi
        height: '842px', // Standard A4 height in pixels
        margin: '20px auto',
        position: 'relative',
        transform: `scale(${specs.gravityFactor ? 9.81 / specs.gravityFactor : 1})`,
      }}
    >
      <div style={{ position: 'absolute', top: 10, right: 10, fontSize: '12px', color: '#999' }}>
        Educational Canvas Level: {specs.nonsenseRatio > 0.8 ? 'Extremely Absurd' : 'Quite Sensible'}
      </div>
      
      <h1 style={{ color: '#4a0e4e' }}>Mon PDF Éducatif Magique</h1>
      
      <p style={{ marginTop: '50px', fontSize: '18px' }}>
        {content || "Rédigez quelque chose d'intelligent... ou pas ! Le générateur de devoirs s'occupe du reste."}
      </p>

      {specs.rainbowsEnabled && (
        <div
          style={{
            height: '10px',
            background: 'linear-gradient(to right, red, orange, yellow, green, blue, purple)',
            marginTop: '100px',
          }}
        />
      )}
    </div>
  );
}
