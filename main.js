// Initialize Lucide Icons
lucide.createIcons();

// Sample Data - Monochromatic Marketplace Items
const products = [
    {
        id: 1,
        name: "Ethereal White Lilies",
        category: "Flowers",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1595123550441-d3784b66bd9a?q=80&w=800&auto=format&fit=crop",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Minimalist Velvet Cake",
        category: "Cakes",
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop",
        tag: "Signature"
    },
    {
        id: 3,
        name: "Pearl Anniversary Set",
        category: "Anniversary",
        price: "$250.00",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
        tag: "Limited"
    },
    {
        id: 4,
        name: "Royal White Orchids",
        category: "Luxe Flowers",
        price: "$195.00",
        image: "https://images.unsplash.com/photo-1516589174184-c68d8e5f44df?q=80&w=800&auto=format&fit=crop",
        tag: "Premium"
    },
    {
        id: 5,
        name: "Sculptural Snake Plant",
        category: "Birthday Plants",
        price: "$75.00",
        image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop",
        tag: "Best Seller"
    },
    {
        id: 6,
        name: "Nocturnal Essence No. 1",
        category: "Perfume",
        price: "$140.00",
        image: "https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?q=80&w=800&auto=format&fit=crop",
        tag: "New"
    },
    {
        id: 7,
        name: "Shadow Bloom Bouquet",
        category: "Flowers",
        price: "$95.00",
        image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
        tag: "New"
    },
    {
        id: 8,
        name: "Ebony Marble Cake",
        category: "Cakes",
        price: "$145.00",
        image: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?q=80&w=800&auto=format&fit=crop",
        tag: "Artisanal"
    },
    {
        id: 9,
        name: "Silk Ribbon Gift Box",
        category: "Anniversary",
        price: "$55.00",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
        tag: "Classic"
    },
    {
        id: 10,
        name: "Majestic Calla Lilies",
        category: "Luxe Flowers",
        price: "$220.00",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop",
        tag: "Exclusive"
    },
    {
        id: 11,
        name: "Minimalist Zen Monstera",
        category: "Birthday Plants",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
        tag: "Trending"
    },
    {
        id: 12,
        name: "Monochrome Oud Perfume",
        category: "Perfume",
        price: "$165.00",
        image: "https://images.unsplash.com/photo-1585120819147-11181f477667?q=80&w=800&auto=format&fit=crop",
        tag: "Signature"
    }
];

// DOM Elements
const productContainer = document.getElementById('product-container');
const filterBtns = document.querySelectorAll('.filter-btn');

// Function to Render Products
function renderProducts(filter = 'All') {
    productContainer.innerHTML = '';
    
    const filteredProducts = filter === 'All' 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <div class="placeholder-box">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">${product.price}</span>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

// Initial Render
renderProducts();

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter products
        renderProducts(btn.textContent);
    });
});

// Simple Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        header.style.padding = '0';
        header.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle (Simplified)
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    alert('Mobile menu feature would open a minimalist overlay here.');
});
