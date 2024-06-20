(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 60 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" + $(this).find(selectors.img).attr("src") + ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();

(function () {
  let bgImg = document.querySelector(".bg-img");
  let underSmoke = document.getElementById("under-smoke");
  let topSmoke = document.getElementById("top-smoke");
  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    if (value >= 750 && value <= 3000) {
      // Adjust the value as needed
      var scale = 0.9 + value / 5000; // Adjust the scaling factor as needed
      bgImg.style.transform = "scale(" + scale + ")";
      underSmoke.style.marginTop = value * 0.2 + "px";
      topSmoke.style.marginTop = -value * 0.2 + "px";
    } else {
      bgImg.style.transform = "scale(1)";
      
    }
  });
})();
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 3,
      },
      950: {
          slidesPerView: 6,
      }
  },
  on: {
      init: function () {
          adjustTranslate(this);
      },
      slideChangeTransitionEnd: function () {
          adjustTranslate(this);
      }
  }
});

var swiperContent = new Swiper(".content-slider", {
  speed: 1500,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  allowTouchMove: false,
  autoHeight: true,
});

function syncContent(index) {
  swiperContent.slideTo(index);
}

document.querySelector('.swiper-button-next').addEventListener('click', function () {
  var activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) {
      var ariaLabel = activeSlide.getAttribute('aria-label');
      var numberBeforeSlash = ariaLabel.split('/')[0];
      syncContent(numberBeforeSlash-1);
  }
});

document.querySelector('.swiper-button-prev').addEventListener('click', function () {
  var activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) {
      var ariaLabel = activeSlide.getAttribute('aria-label');
      var numberBeforeSlash = ariaLabel.split('/')[0];
      syncContent(numberBeforeSlash-1);
  }
});

function adjustTranslate(swiper) {
  const wrapper = swiper.wrapperEl;
  const currentTransform = wrapper.style.transform;
  const translateXMatch = currentTransform.match(/translate3d\(([-\d.]+)px,/);
  let currentTranslateX = translateXMatch ? parseFloat(translateXMatch[1]) : 0;
  currentTranslateX -= 81;
  wrapper.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`;
  wrapper.style.transition = `transform 0.5s ease`;
}