document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.header-buttons a');
    const headerHeight = document.querySelector('.header').offsetHeight; // Adjust this selector if your header has a different class

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
