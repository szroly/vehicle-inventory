const mongoose = require('mongoose');
require('dotenv').config()

const username = process.env.DB_USER_NAME
const password = process.env.DB_PASSWORD
const clusterName = process.env.DB_CLUSTER_NAME
const dbName = process.env.DB_NAME

const mongoDB = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });