const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

const defaultMongoUri = 'mongodb://127.0.0.1:27017/briefly';

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 4000),
  mongoUri: process.env.MONGO_URI || defaultMongoUri,
  jwtSecret: process.env.JWT_SECRET || 'briefly-dev-secret',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:4200',
};

if (!process.env.MONGO_URI && env.nodeEnv !== 'test') {
  console.warn(
    `MONGO_URI not set; using local default. Copy server/.env.example to server/.env for Atlas.`
  );
}

module.exports = { env };
