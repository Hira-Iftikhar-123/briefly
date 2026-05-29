const { createApp } = require('./src/app');
const { env } = require('./src/config/env');
const { connectDatabase } = require('./src/config/db');

async function start() {
  await connectDatabase();
  const app = createApp();
  app.listen(env.port, () => {
    console.log(`Briefly API running on http://localhost:${env.port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server\n');
  console.error(error.message || error);
  process.exit(1);
});
