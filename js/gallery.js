// Add a showImage() function to display a larger copy of the image and some text info
// in the details section of the page




// Add a clearImage() function to clear the details section of the page




// onload function to set up event listeners
window.onload = () => {
    // Find img elements on page and loop through them
    for(let image of document.getElementsByTagName("img")) {
        image.addEventListener("click", showImage)
        image.addEventListener("mouseout", clearImage)
    }
}