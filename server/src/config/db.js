const mongoose = require('mongoose');
const { env } = require('./env');

const ATLAS_OPTIONS = {
  serverSelectionTimeoutMS: 10_000,
  connectTimeoutMS: 10_000,
  maxPoolSize: 10,
};

const ATLAS_CHECKLIST = `
Atlas setup (https://cloud.mongodb.com):
  1. Network Access → Add IP Address → "Add Current IP Address" (or 0.0.0.0/0 for local dev only)
  2. Database Access → confirm user/password; reset password if unsure
  3. Clusters → ensure cluster is Active (Resume if Paused)
  4. Connect → Drivers → copy Node.js connection string into MONGO_URI
  5. URL-encode password special characters (@ → %40, # → %23, / → %2F, : → %3A)
  6. Set database name in path: ...mongodb.net/briefly?retryWrites=true&w=majority
`;

function maskMongoUri(uri) {
  return uri.replace(/\/\/([^:@/]+):([^@/]+)@/, '//$1:****@');
}

function looksLikeUnencodedPassword(uri) {
  const withoutProtocol = uri.replace(/^mongodb(\+srv)?:\/\//, '');
  return (withoutProtocol.match(/@/g) || []).length > 1;
}

function isAtlasUri(uri) {
  return uri.startsWith('mongodb+srv://') || uri.includes('.mongodb.net');
}

function buildConnectionHelp(error) {
  const lines = [`MongoDB connection failed: ${error.message}`];

  const isSelectionError =
    error.name === 'MongooseServerSelectionError' ||
    error.name === 'MongoServerSelectionError';

  if (isSelectionError) {
    lines.push('');
    lines.push('On Windows + Atlas, this pattern usually means Atlas or the network blocked the handshake:');
    lines.push('  • IP not on Network Access allowlist (most common)');
    lines.push('  • Wrong username/password, or password not URL-encoded in MONGO_URI');
    lines.push('  • Cluster paused (free tier) — resume in Atlas UI');
    lines.push('  • VPN, proxy, or firewall blocking TLS to *.mongodb.net');
    lines.push(ATLAS_CHECKLIST);
  }

  if (isAtlasUri(env.mongoUri)) {
    lines.push('');
    lines.push(`Using: ${maskMongoUri(env.mongoUri)}`);
    if (looksLikeUnencodedPassword(env.mongoUri)) {
      lines.push('Hint: multiple "@" in MONGO_URI often means the password needs URL-encoding.');
    }
  }

  return lines.join('\n');
}

async function connectDatabase() {
  try {
    await mongoose.connect(env.mongoUri, ATLAS_OPTIONS);
    console.log('MongoDB connected');
  } catch (error) {
    const help = new Error(buildConnectionHelp(error));
    help.cause = error;
    throw help;
  }
}

module.exports = { connectDatabase };
