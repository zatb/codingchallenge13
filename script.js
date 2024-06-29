// U36432650

document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://course-api.com/react-store-products';
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const productContainer = document.getElementById('product-container');
    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    let products = [];
    let currentIndex = 0;
    
    async function fetchProducts() {
        try {
            const response = await fetch(API_URL);
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`Network response was not ok, status: ${response.status}`);
            }
            products = await response.json();
            console.log('Fetched products:', products);
            if (products.length === 0) {
                throw new Error('No products found');
            }
            loading.classList.add('hidden');
            productContainer.classList.remove('hidden');
            displayProduct();
        } catch (err) {
            loading.classList.add('hidden');
            error.classList.remove('hidden');
            console.error('Fetch error:', err);
        }
    }
    function displayProduct() {
        const product = products[currentIndex];
        productImage.src = product.image;
        productName.textContent = product.name;
        productPrice.textContent = `$${product.price}`;
        productDescription.textContent = product.description;
    }
})