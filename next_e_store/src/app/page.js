import React from 'react';

// Fetch products including images
const fetchProducts = async () => {
  try {
    const response = await fetch('https://next-ecommerce-api.vercel.app/products?limit=20', {
      next: { revalidate: 60 }, // Optional: set revalidation time (in seconds)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array in case of an error
  }
};

// React Server Component
const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1>First 20 Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px', listStyleType: 'none' }}>
            <div>
              <img 
                src={product.images[0]} // Use the first image from the 'images' array
                alt={product.name} 
                style={{ 
                  width: '50px', 
                  height: '100px',
                  objectFit: 'cover', // Maintains aspect ratio and fills the container
                  borderRadius: '8px' // Optional: adds rounded corners to the image
                }} 
              />
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
