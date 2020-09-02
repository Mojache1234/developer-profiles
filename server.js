const express = require('express');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Database

// Routers
app.get('/', (req, res) => {
  res.send('API running');
});

// Listen on env or port 5000
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
