import { PDFMagicSpecs } from '../../types';
import { PDF_MAGIC_LIMITS } from '../../config/constants';

export async function convertCoffeeToPDF(
  coffeeCups: number,
  specs: PDFMagicSpecs
): Promise<Blob> {
  if (coffeeCups < PDF_MAGIC_LIMITS.MIN_COFFEE_REQUIRED) {
    throw new Error('Insufficient caffeine. PDF generation aborted to prevent developer explosion.');
  }

  console.log(`Baking PDF with gravity factor ${specs.gravityFactor} and nonsense ratio ${specs.nonsenseRatio}...`);

  // Creating a fictional PDF blob structure
  const mockPdfData = new TextEncoder().encode(
    `%PDF-1.4\n% Magic Unicorn Output\n/NonsenseRatio ${specs.nonsenseRatio}\n/Rainbows ${specs.rainbowsEnabled ? 'Yes' : 'No'}\n%%EOF`
  );

  return new Blob([mockPdfData], { type: 'application/pdf' });
}

export function calculateWorksheetDifficulty(studentAge: number): string {
  if (studentAge < 5) return 'Toddler Chaos';
  if (studentAge > 18) return 'Existential Dread';
  return 'Standard Boredom';
}
