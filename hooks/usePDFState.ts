import { useState } from 'react';
import { PDFMagicSpecs } from '../types';

export function usePDFState() {
  const [specs, setSpecs] = useState<PDFMagicSpecs>({
    pageCount: 1,
    rainbowsEnabled: true,
    gravityFactor: 9.81,
    nonsenseRatio: 0.5,
  });

  const [panicMode, setPanicMode] = useState(false);

  const increaseNonsense = () => {
    setSpecs((prev) => ({
      ...prev,
      nonsenseRatio: Math.min(prev.nonsenseRatio + 0.1, 1),
    }));
  };

  const togglePanicMode = () => {
    setPanicMode((prev) => !prev);
  };

  return {
    specs,
    panicMode,
    increaseNonsense,
    togglePanicMode,
  };
}
