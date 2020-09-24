// load in the imports
const error = require('debug')('api:error');
const express = require('express');
const morganDebug = require('morgan-debug');
const cors = require('cors');
const path = require('path');

// create an express application
const app = express();

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  console.log('******* RENDERING SITE *********');
  // Serve any static files
  // app.use(express.static(path.join(__dirname, '../reactjs/build')));
  // // Handle React routing, return all requests to React app
  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
  // });
  const root = require('path').join(__dirname, '../../reactjs', 'build');
  app.use(express.static(root));
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
  });
}

// export the express app
module.exports = app;
