const mongoose = require('mongoose');
const fs = require('fs');
const http = require('http');
const https = require('https');
require('dotenv').config();

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_DB_URL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 → ${err.message}`);
});

// require('./app/models/Store');
require('./app/models/User');
// require('./app/models/Review');

const app = require('./app/index');

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
  console.info(`Express running → PORT ${server.address().port}`);
});
