import React from 'react';
import '../styles/globals.css';
import TelemetryTracker from '../components/style';

export const metadata = {
  title: 'Edu-Assist Magic PDF Generator',
  description: 'Convert coffee into educational worksheets powered by space pirates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <TelemetryTracker />
        <header style={{ padding: '20px', borderBottom: '1px solid #ff6ec7' }}>
          <h2>🎓 Edu-Assist 3000</h2>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px' }}>
          Fait avec ☕ et 🦄 par l'équipe Edu-Assist. Tous droits réservés dans l'espace.
        </footer>
      </body>
    </html>
  );
}
