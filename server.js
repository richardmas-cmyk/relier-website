const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Specific routes for compliance pages
app.get('/terms.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/privacy.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/aml-policy.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'aml-policy.html'));
});

app.get('/kyc-policy.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'kyc-policy.html'));
});

// Route all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 RELIER GROUP website running on port ${PORT}`);
  console.log(`📋 Compliance pages available:`);
  console.log(`   - Terms & Conditions: http://localhost:${PORT}/terms.html`);
  console.log(`   - Privacy Policy: http://localhost:${PORT}/privacy.html`);
  console.log(`   - AML Policy: http://localhost:${PORT}/aml-policy.html`);
  console.log(`   - KYC Policy: http://localhost:${PORT}/kyc-policy.html`);
});
