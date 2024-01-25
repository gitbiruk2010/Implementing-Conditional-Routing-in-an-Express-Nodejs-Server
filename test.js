const express = require('express');
// Setting up server configs
const app = express();
const port = process.env.PORT || 3000;

// This is the first route handler for /foo
app.get('/foo', (req, res, next) => {
  // Randomly choose between two responses
  const randomResponse = Math.random() < 0.5 ? "sometimes this" : null;
  if (randomResponse) {
    res.send(randomResponse);
  } else {
    // Pass control to the next route handler
    next();
  }
});

// This is the second route handler for /foo
app.get('/foo', (req, res) => {
  res.send("and sometimes that");
});

// Setting up the 404 error handler
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server and add a console log message
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
