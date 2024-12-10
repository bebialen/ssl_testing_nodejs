const https = require('https');
const fs = require('fs');



// Create an HTTPS server
export default function handler(req, res) {
    if (req.method === 'GET' && req.url === '/') {
      // Respond to GET requests
      res.status(200).send('Hello from the server!');
    } else {
      // Handle other requests or not found
      res.status(404).send('Not Found');
    }
  }
  



// // Create an Express app
// const app = express();
// app.use(bodyParser.json());

// // Middleware to log requests
// app.use((req, res, next) => {
//     console.log(`Received request: ${req.method} ${req.url}`);
//     next();
// });

// // Endpoint to verify certificate
// app.get('/:ipAddress/token=:token&cert=:cert', (req, res) => {
//     const { ipAddress, token, cert } = req.params;

//     // Validate the parameters
//     if (!ipAddress || !token || !cert) {
//         return res.status(400).json({ error: 'Invalid parameters' });
//     }

//     // Perform your certificate validation logic here
//     // Example: Decode and verify the certificate (basic example, use real validation in production)
//     console.log(`Validating request:
//     - IP Address: ${ipAddress}
//     - Token: ${token}
//     - Certificate: ${decodeURIComponent(cert)}`);

//     // Simulate success or failure
//     const isValid = true; // Replace with your validation logic

//     if (isValid) {
//         res.json({ message: 'Certificate and token are valid.' });
//     } else {
//         res.status(401).json({ error: 'Invalid certificate or token.' });
//     }
// });

// // Create an HTTPS server (use self-signed or real certs in production)
// const options = {
//     key: fs.readFileSync('key.pem'), // Replace with your SSL key
//     cert: fs.readFileSync('cert.pem'), // Replace with your SSL cert
// };
// const port = 443;

// https.createServer(options, app).listen(port, () => {
//     console.log(`Secure server running at https://127.0.1.1:${port}`);
// });





// //with normal http hacker may be able to intercept the request and
// //listen to it 


// //computer sends req to server and asks ssl cert
// //the server sends a ssl cert
// //



// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Mock storage for SSL certificates and IP addresses
// const mockSSLData = {
//   bookingid: '12345',
//   token: 'abcdef',
//   cert: 'mock-certificate-data',
//   ipaddress: '127.0.0.1',
// };

// // Endpoint to fetch SSL certificate and IP address
// // app.get('/sup_getbbtoken', (req, res) => {
// //   const { token, bookingid } = req.query;

// //   if (token === 'mock-token' && bookingid === '12345') {
// //     res.status(200).json({
// //       success: true,
// //       data: {
// //         token: mockSSLData.token,
// //         cert: mockSSLData.cert,
// //         ipaddress: mockSSLData.ipaddress,
// //       },
// //     });
// //   } else {
// //     res.status(400).json({ success: false, message: 'Invalid token or bookingid' });
// //   }
// // });

// // Endpoint to process a request with IP and certificate
// app.get('/validate', (req, res) => {
//   const { ipaddress, token, cert } = req.query;

//   if (
//     ipaddress === mockSSLData.ipaddress &&
//     token === mockSSLData.token &&
//     cert === mockSSLData.cert
//   ) {
//     res.status(200).json({
//       success: true,
//       message: 'Request validated successfully',
//     });
//   } else {
//     res.status(400).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Mock backend server running at http://localhost:${PORT}`);
// });
