import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbDir = join(__dirname);
if (!existsSync(dbDir)) {
  mkdirSync(dbDir, { recursive: true });
}

const dbPath = join(dbDir, 'stock-diagnosis.db');

let db;
try {
  db = new DatabaseSync(dbPath);
  db.exec('PRAGMA journal_mode = WAL');
  db.exec('PRAGMA foreign_keys = ON');
  console.log(`✅ SQLite database initialized at: ${dbPath}`);
} catch (error) {
  console.error('❌ Failed to initialize SQLite database:', error);
  throw error;
}

export function checkDatabaseHealth() {
  try {
    const result = db.prepare('SELECT 1 as health').get();
    return result && result.health === 1;
  } catch (error) {
    console.error('Database health check failed:', error);
    return false;
  }
}

export default db;
