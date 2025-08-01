// Add a showImage() function to display a larger copy of the image and some text info
// in the details section of the page
function showImage(e) {
    const detailsSection = document.getElementById('details');
    const img = e.target;
    
    // Get the image file name
    const fileName = img.src.split('/').pop();
    
    // Get the image details from data-details attribute
    const imageDetails = img.getAttribute('data-details');
    
    // Create HTML for the details section
    const detailsHTML = `
        <img class="details-image" src="images/${fileName}" alt="${img.alt}">
        <p class="details-caption">${imageDetails}</p>
    `;
    
    // Set the innerHTML of the details section
    detailsSection.innerHTML = detailsHTML;
}

// Add a clearImage() function to clear the details section of the page
function clearImage() {
    const detailsSection = document.getElementById('details');
    detailsSection.innerHTML = '';
}

// onload function to set up event listeners
window.onload = () => {
    // Find img elements on page and loop through them
    for(let image of document.getElementsByTagName("img")) {
        image.addEventListener("click", showImage);
        image.addEventListener("mouseout", clearImage);
    }
}