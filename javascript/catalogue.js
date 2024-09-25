// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productsData = [
        { name: 'Chocolate Cake', category: 'cakes', price: 15, img: 'images/chocolate cake.jpg' },
        { name: 'Vanilla Cake', category: 'cakes', price: 14, img: 'images/vanilla-cakes.jpg' },
        { name: 'Apple Tart', category: 'tarts', price: 12, img: 'images/apple-tart.jpg' },
        { name: 'Lemon Tart', category: 'tarts', price: 11, img: 'images/lemon-tart.jpg' },
        { name: 'Berry Muffin', category: 'muffins', price: 5, img: 'images/berry-muffins.jpg' },
        { name: 'Chocolate Muffin', category: 'muffins', price: 5, img: 'images/chocolate-muffins.jpg' }
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = '';  
        
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.setAttribute('data-category', product.category);
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <p class="description">${product.name} - $${product.price}</p>
            `;
            productsContainer.appendChild(productDiv);
        });
    }

    renderProducts(productsData);

    const allButton = document.getElementById('show-all');
    const cakesButton = document.getElementById('show-cakes');
    const tartsButton = document.getElementById('show-tarts');
    const muffinsButton = document.getElementById('show-muffins');

    function filterProducts(category) {
        const filteredProducts = category === 'all' ? productsData : productsData.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }

    allButton.addEventListener('click', () => filterProducts('all'));
    cakesButton.addEventListener('click', () => filterProducts('cakes'));
    tartsButton.addEventListener('click', () => filterProducts('tarts'));
    muffinsButton.addEventListener('click', () => filterProducts('muffins'));

    const discountRate = 0.10;
    let totalAmount = 0;

    function calculateTotal() {
        totalAmount = productsData.reduce((sum, product) => sum + product.price, 0);
        return totalAmount;
    }

    console.log("Total price of all products (before discount): $", calculateTotal());

    const discountedTotal = totalAmount - (totalAmount * discountRate);
    console.log("Total price after 10% discount: $", discountedTotal.toFixed(2));

    document.querySelector('.products').addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'IMG') {
            const productDiv = event.target.closest('.product');
            const productName = productDiv.querySelector('.description').textContent;
            alert(`Product: ${productName}`);
        }
    });

    document.querySelector('.products').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const productDiv = event.target.closest('.product');
            const productName = productDiv.querySelector('.description').textContent;
            alert(`Thank you for purchasing the ${productName}`);
        }
    });
});
