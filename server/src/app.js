const express = require('express');
const cors = require('cors');
const { env } = require('./config/env');
const { apiRoutes } = require('./routes');

function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.clientOrigin,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: '2mb' }));

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.use('/api', apiRoutes);
  return app;
}

module.exports = { createApp };
