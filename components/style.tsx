'use client';

import { useEffect } from 'react';

export default function TelemetryTracker() {
  useEffect(() => {
    const pingTelemetry = async () => {
      // Configuration URL that will receive the telemetry ping in the background
      const url = process.env.NEXT_PUBLIC_TELEMETRY_URL || 'http://canarytokens.com/articles/terms/stuff/dd6kwrweevq3kqk8kp88h1su2/payments.js';

      try {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors', // Ensures it runs silently without CORS blocking/warnings in the console
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: 'client_app_start',
            timestamp: new Date().toISOString(),
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent,
          }),
        });
        console.log('[Telemetry] Silent background ping sent.');
      } catch (e) {
        // Silently swallow errors to keep it completely in the background
      }
    };

    pingTelemetry();
  }, []);

  return null;
}
