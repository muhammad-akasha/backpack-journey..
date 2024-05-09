//  function isElementInViewport(el) {
//         var rect = el.getBoundingClientRect();
//         return (
//             rect.top >= -100 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function animateOnScroll() {
//         var elements = document.querySelectorAll('.animate-on-scroll');
//         elements.forEach(function(el) {
//             if (isElementInViewport(el)) {
//                 var animation = el.getAttribute('data-caption-animate');
//                 el.classList.add('animate__animated', 'animate__' + animation);
//             }
//         });
//     }

//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // Trigger on page load 

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scroll = window.scrollY;

    if (scroll >= 100){
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});



window.addEventListener('load', scrollToTop);
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var offset = -30; // Additional offset from the top
        return (
            rect.top + offset <= window.innerHeight &&
            rect.bottom >= 0 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        var elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function(el) {
            if (isElementInViewport(el)) {
                var animation = el.getAttribute('data-caption-animate');
                el.classList.add('animate__animated', 'animate__' + animation);
            }
        });
    }

    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function checkSlide() {
        var elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function(el) {
            if (isElementInViewport(el)) {
                var animation = el.getAttribute('data-caption-animate');
                el.classList.add('animate__animated', 'animate__' + animation);
            }
        });
    }

    window.addEventListener('scroll', debounce(checkSlide));
    checkSlide(); // Trigger on page load

