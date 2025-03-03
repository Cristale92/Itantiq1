import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create connection pool
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/itantiq',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Query helper function
export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

// Initialize the database with the schema
export const initializeDatabase = async () => {
  try {
    const fs = await import('fs');
    const path = await import('path');

    const schemaPath = path.resolve('./src/db/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    await pool.query(schema);
    console.log('Database schema initialized successfully');

    return true;
  } catch (error) {
    console.error('Error initializing database schema:', error);
    return false;
  }
};

export { pool, initializeDatabase };