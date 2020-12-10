
const menu = document.querySelector('.menu-content');
const closeMenu = document.querySelector('.menu-close');

// // This nav slide is equal to an anonymous function
const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    // Toggle nav
    // When user clicks on the menu it will get the class of 'nav-links'
    menu.addEventListener('click', () => {
        // Run this function toggle now  of nav-active…
        menu.classList.toggle("is-active");

        nav.classList.add('nav-active');
        navLinks.forEach((link, index) => {
            // Run a function…with a delay of 0.3
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;

            }
        });

    });
    // Toggle the menu icon back and forth
    closeMenu.classList.toggle('toggle');
    function close() {
        nav.classList.remove('nav-active');
    }

    closeMenu.addEventListener('click', close);

}

navSlide();

