// nav links scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});



/* ============================ */
const offerItems = document.querySelector('.offer-items');
const offerBtnLeft = document.querySelector('.offer-btn.left');
const offerBtnRight = document.querySelector('.offer-btn.right');

/* function updateOfferButtons() {
    const scrollLeft = offerItems.scrollLeft;
    const maxScroll = offerItems.scrollWidth - offerItems.clientWidth;

    // hide right when at end
    if (scrollLeft <= 2) {
        offerBtnRight.style.visibility = "hidden";
    } else {
        offerBtnRight.style.visibility = "visible";
    }

    // hide left when at start
    if (scrollLeft >= maxScroll - 2) {
        offerBtnLeft.style.visibility = "hidden";
    } else {
        offerBtnLeft.style.visibility = "visible";
    }
}

// Scroll events
offerItems.addEventListener('scroll', updateOfferButtons);*/

 // Button click events
offerBtnLeft.addEventListener('click', () => {
    offerItems.scrollBy({ left: -350, behavior: 'smooth' });
});
offerBtnRight.addEventListener('click', () => {
    offerItems.scrollBy({ left: 350, behavior: 'smooth' });
}); 

/*// Initial check
window.addEventListener('load', updateOfferButtons);
window.addEventListener('resize', updateOfferButtons); */




const nav = document.querySelector('.menu-nav');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

function updateButtons() {
    const scrollLeft = nav.scrollLeft;
    const maxScroll = nav.scrollWidth - nav.clientWidth;

    if (Math.abs(scrollLeft) <= 2) {
        btnRight.style.visibility = "hidden";
    } else {
        btnRight.style.visibility = "visible";
    }

    if (Math.abs(scrollLeft) >= maxScroll - 2) {
        btnLeft.style.visibility = "hidden";
    } else {
        btnLeft.style.visibility = "visible";
    }
}

// Scroll events
nav.addEventListener('scroll', updateButtons);

// Button click events
btnLeft.addEventListener('click', () => {
    nav.scrollBy({ left: -150, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    nav.scrollBy({ left: 150, behavior: 'smooth' });
});

// Initial check
window.addEventListener('load', updateButtons);
window.addEventListener('resize', updateButtons);




// call button
const callBtn = document.querySelector('.call-btn');
const callOptions = document.querySelector('.call-options');

callBtn.addEventListener('click', () => {
    callOptions.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.call-menu')) {
        callOptions.classList.remove('show');
    }
});