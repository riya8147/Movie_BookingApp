// Import required modules
const http = require('http');
const db = require('./app/models');

// Connect to MongoDB
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Create a server and define request handling
const server = http.createServer((req, res) => {
  // Extract the URL and method from the request
  const { url, method } = req;

  // Handle GET requests for different APIs
  if (method === 'GET') {
    // Handle /movies API
    if (url === '/movies') {
      // Your existing logic for handling /movies API
    }
    // Handle /genres API
    else if (url === '/genres') {
      // Your existing logic for handling /genres API
    }
    // Handle /artists API
    else if (url === '/artists') {
      // Your existing logic for handling /artists API
    }
    // Handle invalid routes
    else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not Found' }));
    }
  } else {
    // Handle non-GET requests
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
});

// Set the server to listen on a specific port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
