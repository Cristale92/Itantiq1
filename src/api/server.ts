
import express from 'express';
import cors from 'cors';
import { query } from '../db';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const productsResult = await query(`
      SELECT p.*, 
             (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = true LIMIT 1) as image
      FROM products p
      ORDER BY p.created_at DESC
    `);
    
    res.json(productsResult.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get product by ID with details and images
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get product details
    const productResult = await query('SELECT * FROM products WHERE id = $1', [id]);
    
    if (productResult.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const product = productResult.rows[0];
    
    // Get product images
    const imagesResult = await query('SELECT * FROM product_images WHERE product_id = $1', [id]);
    
    // Get product details
    const detailsResult = await query('SELECT detail_text FROM product_details WHERE product_id = $1', [id]);
    
    res.json({
      ...product,
      images: imagesResult.rows.map(img => img.image_url),
      details: detailsResult.rows.map(detail => detail.detail_text)
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server running on port ${PORT}`);
});
