// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Array of blog posts with category, title, content, and image
    const blogData = [
        { title: 'How to Bake the Perfect Chocolate Cake', category: 'recipes', content: 'Learn how to make the best chocolate cake ever with our step-by-step guide.', img: 'images/chocolate cake.jpg' },
        { title: '5 Essential Baking Tips', category: 'tips', content: 'Discover essential tips to improve your baking game and achieve perfect results every time.', img: 'images/red-velvet-cakes.jpg' },
        { title: 'New Flavors Coming to Our Shop', category: 'news', content: 'Exciting news! We are introducing new flavors to our cake shop this season.', img: 'images/fruit-muffins.jpg' },
        { title: 'Delicious Lemon Tart Recipe', category: 'recipes', content: 'Try out our zesty lemon tart recipe that will leave your taste buds tingling.', img: 'images/lemon-tart.jpg' },
        { title: 'Baking with Seasonal Fruits', category: 'tips', content: 'Make the most out of seasonal fruits with these amazing baking ideas.', img: 'images/strawberry-tart.jpg' }
    ];

    // Function to render blog posts dynamically based on the array
    function renderBlogs(blogs) {
        const blogsContainer = document.querySelector('.blogs');
        blogsContainer.innerHTML = '';  // Clear previous blogs

        blogs.forEach(blog => {
            const blogDiv = document.createElement('div');
            blogDiv.classList.add('blog');
            blogDiv.setAttribute('data-category', blog.category);
            blogDiv.innerHTML = `
                <img src="${blog.img}" alt="${blog.title}">
                <h3>${blog.title}</h3>
                <p class="description">${blog.content}</p>
            `;
            blogsContainer.appendChild(blogDiv);
        });
    }

    // Call the render function initially to display all blog posts
    renderBlogs(blogData);

    // Filter functionality
    const allButton = document.getElementById('show-all');
    const recipesButton = document.getElementById('show-recipes');
    const tipsButton = document.getElementById('show-tips');
    const newsButton = document.getElementById('show-news');

    function filterBlogs(category) {
        const filteredBlogs = category === 'all' ? blogData : blogData.filter(blog => blog.category === category);
        renderBlogs(filteredBlogs); // Re-render blog posts based on filter
    }

    allButton.addEventListener('click', () => filterBlogs('all'));
    recipesButton.addEventListener('click', () => filterBlogs('recipes'));
    tipsButton.addEventListener('click', () => filterBlogs('tips'));
    newsButton.addEventListener('click', () => filterBlogs('news'));

    // Hover effect: Show blog title and content in an alert box
    document.querySelector('.blogs').addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'IMG') {
            const blogDiv = event.target.closest('.blog');
            const blogTitle = blogDiv.querySelector('h3').textContent;
            alert(`Blog: ${blogTitle}`);
        }
    });
});
