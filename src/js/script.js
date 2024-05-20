// JavaScript to change navbar background on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > 50) { // Adjust the scroll value to your preference
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
        // You can add further processing here, like uploading the file
    }
});
