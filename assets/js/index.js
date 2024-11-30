const progress = document.querySelector(".progress");
const progressBar = document.getElementById("progress");
const listButton = document.getElementById("list-button");
const searchButton = document.getElementById("search-button");
const underMenu = document.getElementById("under--menu");
const navbar = document.getElementById("navbar");

// when opening the website, closing loading components
window.onload = () => {
  setTimeout(() => {
    progress.classList.add("close");
  }, 1300);
};

handleOpenAndCloseBtn(listButton);
handleOpenAndCloseBtn(searchButton);

// intervalid, loading progress
const intervalid = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
  if (width >= 100) {
    clearInterval(intervalid);
    return;
  }
  progressBar.style.setProperty("--width", width + 0.5);
}, 0.3);

//  dynamic clicking open and close submenu
function handleOpenAndCloseBtn(btn) {
  btn.addEventListener("click", () => {
    if (underMenu.classList.contains("open")) {
      underMenu.classList.remove("open");
      listButton.classList.remove("icon-remove");
    } else {
      underMenu.classList.add("open");
      listButton.classList.add("icon-remove");
    }
  });
}

// slick slider
$(".slick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,
  slidesToScroll: 2,
  nextArrow: "#next",
  prevArrow: "#prev",
  responsive: [
    {
      breakpoint: 1326,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1011,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 703,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// video js
const video = document.getElementById('my-video');
const videoSrc = "https://live-media-fly.warnermediacdn.com/cmaf/live/2028716/cnnfast-international/VIDEO_4_1064000.m3u8";
videojs('my-video', {
  autoplay: true,
  muted: false,
  loop: true,
  controls: true,
});

// scrolling change navbar's background
window.addEventListener("scroll",() => {
  if(window.scrollY > 0){
    navbar.classList.add("scroll");
  }else{
    navbar.classList.remove("scroll");
  }
});