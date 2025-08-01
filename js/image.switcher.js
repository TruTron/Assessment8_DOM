/* JavaScript for the week 8 index.html file. The images that the script should cycle through
   are images/banner1.jpg, images/banner2.jpg, and images/banner3.jpg
 */

// Function to preload the images
function preloadImages(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
        const img = new Image();
        img.src = imageArray[i];
    }
}

// Function to switch the image
function startImageSwitcher(imageArray) {
    let currentIndex = 0;
    const imageElement = document.querySelector('#main-image img');
    
    return function() {
        currentIndex = (currentIndex + 1) % imageArray.length;
        imageElement.src = imageArray[currentIndex];
    };
}

// This will run when the page is done loading
window.onload = function() {
    // Array of images to cycle through
    const imageArray = [
        'images/banner1.jpg',
        'images/banner2.jpg',
        'images/banner3.jpg'
    ];
    
    // Preload the images
    preloadImages(imageArray);
    
    // Create the switcher function
    const switchImage = startImageSwitcher(imageArray);
    
    // Start switching images every 3 seconds
    setInterval(switchImage, 3000);
}