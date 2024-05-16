let iconsCon = document.querySelector(".icon-container");
let childIcons = iconsCon.children;

// iconsCon.addEventListener("click", () => {
//   for (let i = 0; i < childIcons.length; i++) {
//     if (iconsCon[i].contains.classList("line-1", "line-2", "line-3")) {
//       childIcons[i].classList.remove("line-1", "line-2", "line-3");
//       childIcons[0].classList.add("rotate-line-1");
//       childIcons[1].classList.add("line-2");
//       childIcons[2].classList.add("rotate-line-3");
//       iconsCon.style.transform = "rotate(180deg)";
//     } else {
//       iconsCon.style.transform = "rotate(0deg)";
//       iconsCon[i].classList.add("line-1", "line-2", "line-3");
//     }
//   }
// });

function clasAdd() {
  iconsCon.style.transform = "rotate(180deg)";
  for (let i = 0; i < childIcons.length; i++) {
    childIcons[i].classList.remove("line-1", "line-2", "line-3");
    childIcons[0].classList.add("rotate-line-1");
    childIcons[1].classList.add("line-2");
    childIcons[2].classList.add("rotate-line-3");
  }
}

// adding hover effect on image

let image1;
let image2;
function hoverImg() {
  image1 = document.getElementById("image1");
  image2 = document.getElementById("image2");
  image1.classList.remove("one");
  image2.classList.remove("two");
  image1.classList.add("img-hover-1");
  image2.classList.add("img-hover-2");
}

// adding remove hover function when mouseout

function removeHover() {
  image1.classList.add("one");
  image2.classList.add("two");
  image1.classList.remove("img-hover-1");
  image2.classList.remove("img-hover-2");
}

// on reload scroll back to top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// fixed the navbar on scroll down

let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let scroll = window.scrollY;

  if (scroll >= 100) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// adding animation effects one by one while user scrolling .

window.addEventListener("load", scrollToTop);
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
  var elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach(function(el) {
    if (isElementInViewport(el)) {
      var animation = el.getAttribute("data-caption-animate");
      el.classList.add("animate__animated", "animate__" + animation);
    }
  });
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
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

// add animation effect with using class names and with data caption attribute.

function checkSlide() {
  var elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach(function(el) {
    if (isElementInViewport(el)) {
      var animation = el.getAttribute("data-caption-animate");
      el.classList.add("animate__animated", "animate__" + animation);
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
checkSlide(); // Trigger on page load
