document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(50px)";
    
    setTimeout(() => {
        heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 500);
});
