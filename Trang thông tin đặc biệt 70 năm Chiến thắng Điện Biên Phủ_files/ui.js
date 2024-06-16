// INFO : ============= global =============

// get scroll
const scroll = window.innerWidth - window.visualViewport.width;
document.documentElement.setAttribute("style", "--widthScroll:" + scroll);

// gallery ( content bài viết)
if ($(".article").length) {
  var swiper = new Swiper(".article__slider", {
    autoHeight: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// copy-source
if ($(".article__source .getlink").length > 0) {
  $(".article__source .btn").on("click", function () {
    $(".article__source .source-toggle").toggleClass("show");
  });

  var $temp = $("<input>");
  var $url = $(".article__source .source-toggle a").attr("href");
  $(".article__source .getlink").on("click", function () {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $(".article__source .getlink").html("Đã copy");
  });
}

// modal
$("body").append("<div class='modal-backdrop'></div>");
$(".btn-modal").on("click", function () {
  $("body").addClass("modal-open");
  $(".modal-backdrop").fadeIn();
  var id = $(this).data("target");
  $('.modal[data-target="' + id + '"]').fadeIn();
  $(".navigation.sticky.fixed").addClass("show-modal");
});

$(".modal-backdrop").on("click", function () {
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $(".modal-backdrop").fadeOut();
  $(".modal").fadeOut();
});

$(".btn-close").on("click", function () {
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $(".modal-backdrop").fadeOut();
  $(".modal").fadeOut();
});

// audio
$(".audio .right .select-voice").click(function (e) {
  e.preventDefault();
  $(".audio .right .voice-board").toggle();
});

$(".audio .play-button").click(function (e) {
  e.preventDefault();
  $(".audio .ic-audio-pause").toggleClass("ic-audio-play");
});

$(".audio .mute-wrap").click(function (e) {
  e.preventDefault();
  $(".audio .ic-audio-volume").toggleClass("ic-audio-volume-slash");
});

$(".modal-body .ic-eye").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("slash");
});

// back to top
var backToTop = $(".back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    backToTop.addClass("show");
  } else {
    backToTop.removeClass("show");
  }
});

backToTop.click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

// INFO : ============= dbp =============


// 22-3-2024
function showHideItem(elm, param) {
    if ($(elm + ".show").length) {
        $(elm).removeClass("show");
    } else {
        $(elm).addClass("show");
        $(param).removeClass("show");
    }
}

var showSearch = $(".site-header .btn-search");
var showLanguage = $(".site-header .btn-language");

// show search on header
showSearch.click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass("active");
    if ($(".btn-search.active").length) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
    showHideItem(".search-wrap", ".language-wrap");
});

// show language on header
showLanguage.click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass("active");
    if ($(".btn-language.active").length) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
    showHideItem(".language-wrap", ".search-wrap");
});

