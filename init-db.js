
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

// Now we can import the TypeScript file
import('./src/db/seed.ts')
  .then(() => {
    console.log('Database seeding completed successfully.');
  })
  .catch((error) => {
    console.error('Failed to import seed script:', error);
    process.exit(1);
  });
