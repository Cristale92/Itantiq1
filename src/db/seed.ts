import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool, query } from './index.js';

// Make sure to use .js extension for imports

async function seed() {
  try {
    console.log('Starting database seed process...');

    // Seed users
    console.log('Seeding users...');
    await query(`
      INSERT INTO users (name, email, password_hash, active) 
      VALUES 
        ('John Doe', 'john@example.com', '$2b$10$1XsAHfPVKUHQz.1/7Xwz3.3QbANZZOvEDmONe8FAWNhMBxIoxRQjm', true),
        ('Jane Smith', 'jane@example.com', '$2b$10$1XsAHfPVKUHQz.1/7Xwz3.3QbANZZOvEDmONe8FAWNhMBxIoxRQjm', true)
      ON CONFLICT (email) DO NOTHING;
    `);

    // Seed products
    console.log('Seeding products...');
    await query(`
      INSERT INTO products (name, description, price, category, era) 
      VALUES 
        ('Antique Oak Chair', 'Beautiful oak chair from the Victorian era', 1299.99, 'furniture', 'Victorian'),
        ('Brass Chandelier', 'Elegant brass chandelier with crystal accents', 2499.99, 'lighting', 'Art Deco'),
        ('Vintage Bronze Statue', 'Bronze statue depicting Greek mythology', 899.99, 'decor', 'Classical'),
        ('Mahogany Side Table', 'Exquisite mahogany side table with intricate carvings', 1599.99, 'furniture', 'Georgian')
      ON CONFLICT DO NOTHING;
    `);

    // Seed product images
    console.log('Seeding product images...');
    await query(`
      INSERT INTO product_images (product_id, image_url, is_primary)
      VALUES
        (1, 'https://images.unsplash.com/photo-1617364652572-d9865e101a8f', true),
        (1, 'https://images.unsplash.com/photo-1593194632209-fe229b657a11', false),
        (2, 'https://images.unsplash.com/photo-1578767800197-651cc9e1d819', true),
        (3, 'https://images.unsplash.com/photo-1577083552431-6e5fd01988a5', true),
        (4, 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8', true)
      ON CONFLICT DO NOTHING;
    `);

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection when done
    await pool.end();
  }
}

// Execute the seed function
seed();

export default seed;