document.addEventListener("wheel", function(event) {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY * 1.5,  // Increase multiplier for faster scroll
        left: 0,
        behavior: "instant" // Remove built-in delay
    });
}, { passive: false });
