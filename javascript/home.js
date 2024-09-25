document.addEventListener('DOMContentLoaded', () => {
    // Welcome message
    alert("Welcome to EVET’s Cake Shop! Explore our delicious range of treats.");

    // Image Slider functionality
    const images = [
        'images/home.jpg',
        'images/vanilla-cakes.jpg',
        'images/variety-of-cakes.jpg',
        'images.red-velvet-cakes.jpg'
    ];
    let currentImageIndex = 0;
    const homeImage = document.querySelector('.home-image');

    // Function to change image automatically every 3 seconds
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        homeImage.src = images[currentImageIndex];
    }

    // Set interval to change image every 3 seconds
    const sliderInterval = setInterval(changeImage, 3000);

    // Back button functionality
    const prevBtn = document.querySelector('#prevBtn');
    prevBtn.addEventListener('click', () => {
        clearInterval(sliderInterval);  // Stop the automatic slider when manually navigating
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        homeImage.src = images[currentImageIndex];
    });

    // Next button functionality
    const nextBtn = document.querySelector('#nextBtn');
    nextBtn.addEventListener('click', () => {
        clearInterval(sliderInterval);  // Stop the automatic slider when manually navigating
        currentImageIndex = (currentImageIndex + 1) % images.length;
        homeImage.src = images[currentImageIndex];
    });

    // Additional JS functionality
    const shopName = "EVET's Cake Shop";
    let cakesAvailable = 20;

    console.log(`Welcome to ${shopName}, we have ${cakesAvailable} cakes available.`);

    // Specialties array and logging them
    const specialties = ['Chocolate Cake', 'Vanilla Cake', 'Red Velvet Cake', 'Tarts', 'Muffins'];

    specialties.forEach(specialty => {
        console.log(`We offer: ${specialty}`);
    });

    // Function for calculating a discount
    function calculateDiscount(price, discountPercentage) {
        const discount = (price * discountPercentage) / 100;
        return price - discount;
    }

    let cakePrice = 15;
    let discountedPrice = calculateDiscount(cakePrice, 10);
    console.log(`The discounted price for a cake is $${discountedPrice}`);
});
