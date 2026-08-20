export type CoffeeLevel = 'empty' | 'half' | 'overflowing' | 'jittery';

export interface DeveloperBrain {
  coffeeIntake: CoffeeLevel;
  brainFogDegree: number; // 0 to 100
  favoriteColorOfPDF: string;
  hasUnicornEngine: boolean;
}

export interface PDFMagicSpecs {
  pageCount: number;
  rainbowsEnabled: boolean;
  gravityFactor: number;
  nonsenseRatio: number;
}

export type MagicSpell = 'lorem-ipsum' | 'wingardium-leviosa' | 'pdf-us-maxim-us';
