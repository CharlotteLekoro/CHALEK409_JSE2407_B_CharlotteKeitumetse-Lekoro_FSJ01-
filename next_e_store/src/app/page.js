import React from 'react';

// This is an async function that fetches data on the server-side
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

// React Server Component that fetches data
const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1>First 20 Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
