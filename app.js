function clock() {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let year = today.getFullYear();

    let hour = today.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }

    let minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }

    let second = today.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }

    document.querySelectorAll(".center")[3].innerHTML =
        day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;

    setTimeout("clock()", 1000);
}

clock();

$(document).ready(function () {
    let NavY = $('.menu').offset().top;

    let stickyNav = function () {
        let ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.menu').addClass('sticky');
        } else {
            $('.menu').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });
});

function countUp() {
    $('.count').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });
}

const showProducts = document.querySelectorAll(".vertical-products")[0];
const showProducts1 = document.querySelectorAll(".vertical-products")[1];

showProducts.addEventListener("click", ProductsShow);
showProducts1.addEventListener("click", DeXMarkShow);

function ProductsShow() {
    const itemsList = document.querySelectorAll(".items")[0];
    itemsList.classList.toggle("show-list");
}

function DeXMarkShow() {
    const itemsList = document.querySelectorAll(".items")[1];
    itemsList.classList.toggle("show-list");
}
const vericalNav = document.querySelector(".nav-vertical");
const burger = document.querySelector(".fa-bars");
const adImg = document.querySelector(".ad-img");
const adSlogan = document.querySelector(".ad-slogan");
const slogan = document.querySelector(".slogan");
const slogan1 = document.querySelector(".slogan1");
const price = document.querySelector(".price");
const adButton = document.querySelector(".ad-button");
let tl = new TimelineMax({
    reversed: true,
    paused: true,
});
tl.fromTo(vericalNav, 0.4, {
        left: "300%"
    }, {
        left: "0"
    })

    .fromTo(showProducts, 0.4, {
        left: "300%"
    }, {
        left: "0"
    }, "-0.3s")

    .fromTo(showProducts1, 0.5, {
        left: "300%"
    }, {
        left: "0"
    }, "-0.3s")

    .fromTo(burger, 0.3, {
        top: "50%"
    }, {
        top: "-120%"
    })

const tl1 = new TimelineMax()
tl1.repeat(Infinity);
tl1.repeatDelay(2);
tl1.to(adImg, 1, {
        right: "25px"
    })
    .to(adSlogan, 1.5, {
        right: "0"
    })
    .to(slogan, 1.5, {
        right: "0"
    })
    .to(slogan, 1, {
        right: "150%"
    }, 5)
    .to(slogan1, 1, {
        right: "5px"
    }, 6)
    .to(slogan1, 2, {
        right: "150%"
    }, 9)
    .to(adSlogan, 1, {
        height: "260px"
    }, 10)
    .to(adSlogan, 1, {
        autoAlpha: "1"
    }, 10.2)
    .to(price, 1, {
        right: "0"
    }, 10.5)
    .to(adButton, 1, {
        right: "28%"
    }, 10.8)
const listIteamProductsAll = document.querySelector(".items-list");
const listIteamProducts = document.querySelectorAll(".items-list")[0];
const listIteamProducts1 = document.querySelectorAll(".items-list")[1];
const listIteamProducts2 = document.querySelectorAll(".items-list")[2];
const listIteamProducts3 = document.querySelectorAll(".items-list")[3];
const listIteamProducts4 = document.querySelectorAll(".items-list")[4];
const listIteamProducts5 = document.querySelectorAll(".items-list")[5];
const listIteamProducts6 = document.querySelectorAll(".items-list")[6];
const tl2 = new TimelineMax({
    paused: true,
    reversed: true
});
tl2.fromTo(listIteamProducts, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 0.2)
    .fromTo(listIteamProducts1, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 0.5)
    .fromTo(listIteamProducts2, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 0.8)
    .fromTo(listIteamProducts3, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 1)
const showProductsItems = document.querySelectorAll(".main-item")[1];

showProductsItems.addEventListener("click", function () {
    tl2.reversed() ? tl2.play() : tl2.reverse();
})

const tl3 = new TimelineMax({
    paused: true,
    reversed: true
})

tl3.fromTo(listIteamProducts4, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 0.2)
    .fromTo(listIteamProducts5, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 0.4)
    .fromTo(listIteamProducts6, 0.5, {
        autoAlpha: "0",
        pointerEvents: "none"
    }, {
        autoAlpha: "1",
        pointerEvents: "all"
    }, 0.6)
const showProductsItems1 = document.querySelectorAll(".main-item")[3];
showProductsItems1.addEventListener("click", function () {
    tl3.reversed() ? tl3.play() : tl3.reverse();

})

const listIteamDeoxmark = document.querySelectorAll(".items")[1];

let counter1 = 1;
burger.addEventListener("click", function () {
    tl.reversed() ? tl.play() : tl.reverse();

    counter1++;
})
const $scroll = $(document);
const verticalMenuRight = document.querySelector(".fa-arrow-circle-right");
const verticalMenuLeft = document.querySelector(".fa-arrow-circle-left");
const verticalMenuNav = document.querySelector(".nav");
const $countUp = $(".count");
const tl5 = new TimelineMax({
    reversed: true
})
$scroll.on("scroll", function scrollNav() {
    const scrollPos = $scroll.scrollTop();
    vericalNav.style.top = scrollPos + "px";

    if (scrollPos >= 30) {

        burger.style.top = "50%";

    } else if (scrollPos < 30) {
        burger.style.top = "50%";

        if (scrollPos < 30 && counter1 % 2 == 0) {
            burger.style.top = "-120%";
        }
    }
    if (scrollPos >= 1000) {
        countUp();
    }
    if (scrollPos > 175) {
        verticalMenuNav.style.top = "10%";
        verticalMenuLeft.style.top = "13%";

    } else if (scrollPos < 100 || scrollPos <= 0) {

        verticalMenuNav.style.top = "-5px";
        verticalMenuLeft.style.top = "280px";
    }
})

window.sr = ScrollReveal();
sr.reveal('.info,.count,.social-media', {
    delay: 300
})

const arrow = document.querySelector(".fa-arrow-alt-circle-up");

$(function ($) {
    $.scrollTo(0);
    $(arrow).click(function () {
        $.scrollTo($('body'), 600);
    });
});

$(document).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $(arrow).fadeIn(400);
    } else {
        $(arrow).fadeOut(400);
    }
});

const tl4 = new TimelineMax({
    paused: true,
    reversed: true
})

tl4.to(verticalMenuNav, 0.6, {
        left: "0"
    })
    .fromTo(verticalMenuRight, 0.3, {
        opacity: "1",
        pointerEvents: "all"
    }, {
        opacity: "0",
        pointerEvents: "none"
    }, 0.3)
    .fromTo(verticalMenuLeft, 0.3, {
        opacity: "0",
        left: "-100%",
        pointerEvents: "none"
    }, {
        opacity: "0.9",
        left: "40%",
        pointerEvents: "all"
    }, "=-0.2")

verticalMenuRight.addEventListener("click", function () {
    tl4.reverse() ? tl4.play() : tl4.reversed();
})
verticalMenuLeft.addEventListener("click", function () {
    tl4.reversed() ? tl4.play() : tl4.reverse();
})