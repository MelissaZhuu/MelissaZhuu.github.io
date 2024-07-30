
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'home') {
                    homeLink.style.visibility = 'hidden';
                } else {
                    homeLink.style.visibility = 'visible';
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});