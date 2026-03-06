alert("WELCOME! View with a desktop for better experience")

function showMessage() {
    prompt("IF YOU CLICK 'OK' YOU WILL DOWNLOAD THE COE's CV!");
}

let currentIndex = 0;
let images = document.querySelectorAll(".images img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}