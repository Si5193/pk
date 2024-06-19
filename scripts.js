document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to section
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Scroll to section
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    };

    // Fade-in effect on scroll
    const sections = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
