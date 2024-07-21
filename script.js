document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('main').innerHTML = '<h1>Loading...</h1>';
            fetch(link.getAttribute('href'))
                .then(response => response.text())
                .then(data => {
                    document.querySelector('main').innerHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('main').innerHTML;
                });
        });
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});
