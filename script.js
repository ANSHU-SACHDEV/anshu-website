// Custom hover transitions for cards (for the whole card translation/shadow)
/*document.querySelectorAll('.transform-hover-translate-y').forEach(card => {
    card.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    });
});

// Parallax effect for the features section
const parallaxSection = document.querySelector('.parallax-content');

if (parallaxSection) {
    window.addEventListener('scroll', () => {
        const sectionTop = parallaxSection.getBoundingClientRect().top;
        const parallaxSpeed = 0.02;
        const yOffset = -sectionTop * parallaxSpeed;
        parallaxSection.style.transform = `translateY(${yOffset}px)`;
    });
    // Initial application of parallax in case of page load at a scrolled position
    window.dispatchEvent(new Event('scroll'));
}


// Intersection Observer for "Key Features" heading animation
const featureHeading = document.querySelector('.features-content-bg .animated-heading');

if (featureHeading) {
    const headingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the heading is visible
    });

    headingObserver.observe(featureHeading);
}


// New: Intersection Observer for the entire "features-content-bg" section
const featuresSectionContainer = document.querySelector('.features-content-bg');

if (featuresSectionContainer) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('features-hidden');
                entry.target.classList.add('features-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Initially add the hidden class and then observe
    featuresSectionContainer.classList.add('features-hidden');
    sectionObserver.observe(featuresSectionContainer);
}


// Loader functionality
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    if (loader && mainContent) {
        // Fade out the loader
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        // Make the main content visible after a short delay to allow loader to fade
        setTimeout(() => {
            mainContent.classList.remove('hidden-content');
            mainContent.classList.add('visible-content');
            document.body.style.overflowY = 'auto'; /* Enable scrolling after content appears 
            // Re-dispatch scroll event to ensure parallax is correctly calculated after content becomes visible
            window.dispatchEvent(new Event('scroll'));
        }, 1000); // Match this duration with the CSS transition for opacity
    }
});

// Initially hide the main content until loader is done
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.add('hidden-content');
        document.body.style.overflowY = 'hidden'; /* Prevent scrolling while loader is active 
    }
});
*/
// Custom hover transitions for cards (for the whole card translation/shadow)
document.querySelectorAll('.transform-hover-translate-y').forEach(card => {
    card.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    });
});

// Parallax effect for the features section - Setup moved to loader's completion
const parallaxSection = document.querySelector('.parallax-content');

// Intersection Observer for "Key Features" heading animation
const featureHeading = document.querySelector('.features-content-bg .animated-heading');

if (featureHeading) {
    const headingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the heading is visible
    });

    headingObserver.observe(featureHeading);
}


// Intersection Observer for the entire "features-content-bg" section
const featuresSectionContainer = document.querySelector('.features-content-bg');

if (featuresSectionContainer) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('features-hidden');
                entry.target.classList.add('features-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Initially add the hidden class and then observe
    featuresSectionContainer.classList.add('features-hidden');
    sectionObserver.observe(featuresSectionContainer);
}


// Loader functionality
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    if (loader && mainContent) {
        // Fade out the loader
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        // Make the main content visible after a short delay to allow loader to fade
        setTimeout(() => {
            mainContent.classList.remove('hidden-content');
            mainContent.classList.add('visible-content');
            document.body.style.overflowY = 'auto'; /* Enable scrolling after content appears */

            // NEW: Initialize parallax after content is visible
            if (parallaxSection) {
                // Attach the scroll listener for parallax
                window.addEventListener('scroll', () => {
                    const sectionTop = parallaxSection.getBoundingClientRect().top;
                    const parallaxSpeed = 0.5; // Using the speed from your input
                    const yOffset = -sectionTop * parallaxSpeed;
                    parallaxSection.style.transform = `translateY(${yOffset}px)`;
                });
                // Trigger an initial scroll event to set the correct parallax position
                // if the user has already scrolled a bit during the loading phase
                window.dispatchEvent(new Event('scroll'));
            }

        }, 1000); // Match this duration with the CSS transition for opacity
    }
});

// Initially hide the main content until loader is done
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.add('hidden-content');
        document.body.style.overflowY = 'hidden'; /* Prevent scrolling while loader is active */
    }
});

// Toggle light/dark mode
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("mode-toggle");

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
});


