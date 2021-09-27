/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const all_sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function NewNavList(s1) {
    const li = document.createElement('li');
    li.id = s1 + 1;
    li.innerText = all_sections[s1].getAttribute('data-nav');
    li.classList = 'menu__link';
    return li;
}

function SelectNavLink(li) {
    li.classList.remove("menu__link")
    li.classList.add("menu__link__selected");
}

function UnSelectNavLink(li) {
    li.classList.add("menu__link")
    li.classList.remove("menu__link__selected");
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function navBuilder() {
    const nav = document.getElementById('navbar__list');

    for (var i = 0; i < all_sections.length; i++) {
        var li = NewNavList(i);
        if (i == 0) {
            SelectNavLink(li);
        }
        nav.appendChild(li);
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.y > -170 &&
        rect.y < 470
    );
}

// build the nav
navBuilder();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function () {
    for (var i = 0; i < all_sections.length; i++) {
        var id = i + 1;
        var li = document.getElementById(id);
        if (isInViewport(all_sections[i])) {
            all_sections[i].classList.add("your-active-class");
            SelectNavLink(li);
        } else {
            all_sections[i].classList.remove("your-active-class");
            UnSelectNavLink(li);
        }
    }
});

// Scroll to anchor ID using scrollTO event
function respondToTheClick(evt) {
    var str = evt.target.textContent;
    const sec_Name = str.replace("Section ", "");
    const target_sec = document.getElementById("section" + sec_Name);
    const dim = target_sec.getBoundingClientRect();
    const nav = document.getElementById("navbar__menu").getBoundingClientRect();
    window.scrollTo({
        top: (dim.top - nav.height) + window.scrollY,
        left: dim.left + window.scrollX,
        behavior: 'smooth'
    });
}

const ul = document.getElementById("navbar__list");
ul.addEventListener('click', respondToTheClick);

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active