// Use ts-node/esm loader for TypeScript files
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Register ts-node with SWC transpiler
require('ts-node').register({
  swc: true,
  transpileOnly: true,
  esm: true,
  experimentalSpecifierResolution: 'node'
});

// Import database modules
import('./src/db/index.js')
  .then(({ query, pool }) => {
    // Test connection
    console.log('Testing database connection...');
    return query('SELECT NOW()')
      .then(connectionTest => {
        console.log('✅ Database connection successful!', connectionTest.rows[0].now);

        // Test querying users
        console.log('\nFetching users:');
        return query('SELECT id, name, email, active FROM users')
          .then(users => {
            console.log(`Found ${users.rows.length} users:`);
            console.table(users.rows);

            // Test querying products
            console.log('\nFetching products:');
            return query('SELECT id, name, price, category, era FROM products')
              .then(products => {
                console.log(`Found ${products.rows.length} products:`);
                console.table(products.rows);

                // Test a more complex query - products with images
                console.log('\nFetching products with their primary images:');
                return query(`
                  SELECT p.id, p.name, p.price, p.category, i.image_url 
                  FROM products p
                  LEFT JOIN product_images i ON p.id = i.product_id
                  WHERE i.is_primary = true
                  LIMIT 5
                `)
                  .then(productsWithImages => {
                    console.log(`Found ${productsWithImages.rows.length} products with images:`);
                    console.table(productsWithImages.rows);
                    return pool.end();
                  });
              });
          });
      })
      .then(() => console.log('\nDatabase connection closed.'))
      .catch(error => {
        console.error('❌ Database test failed:', error);
        process.exit(1);
      });

  })
  .catch(error => {
    console.error('Database test failed:', error);
    process.exit(1);
  });