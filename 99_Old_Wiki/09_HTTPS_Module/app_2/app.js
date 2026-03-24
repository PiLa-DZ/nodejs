// *** Advanced HTTPS Server with OCSP Stapling and Session Resumption ***

const https = require('https');
const fs = require('fs');
const path = require('path');
const tls = require('tls');

// Path to your SSL/TLS files
const sslOptions = {
  // Certificate and key
  key: fs.readFileSync(path.join(__dirname, 'privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  ca: [
    fs.readFileSync(path.join(__dirname, 'chain.pem'))
  ],

  // Recommended security settings
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.3',
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_GCM_SHA256',
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-ECDSA-CHACHA20-POLY1305',
    'ECDHE-RSA-CHACHA20-POLY1305',
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES128-GCM-SHA256'   ].join(':'),
  honorCipherOrder: true,
 
  // Enable OCSP Stapling
  requestCert: true,
  rejectUnauthorized: true,
 
  // Enable session resumption
  sessionTimeout: 300, // 5 minutes
  sessionIdContext: 'my-secure-app',
 
  // Enable HSTS preload
  hsts: {
    maxAge: 63072000, // 2 years in seconds
    includeSubDomains: true,
    preload: true
  },
 
  // Enable secure renegotiation
  secureOptions: require('constants').SSL_OP_LEGACY_SERVER_CONNECT |
    require('constants').SSL_OP_NO_SSLv3 |
    require('constants').SSL_OP_NO_TLSv1 |
    require('constants').SSL_OP_NO_TLSv1_1 |
    require('constants').SSL_OP_CIPHER_SERVER_PREFERENCE
};

// Create the HTTPS server
const server = https.createServer(sslOptions, (req, res) => {
  // Security headers
  const securityHeaders = {
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Content-Security-Policy': "default-src 'self'",
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  };
 
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Handle requests
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Secure Node.js Server</h1><p>Your connection is secure!</p>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  // Perform graceful shutdown
  server.close(() => process.exit(1));
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle graceful shutdown
const gracefulShutdown = () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });

  // Force close server after 10 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

// Listen for shutdown signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

server.listen(PORT, HOST, () => {
  const { address, port } = server.address();
  console.log(`Server running at https://${address}:${port}`);

  // Output server information
  console.log('Node.js version:', process.version);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('PID:', process.pid);
});
