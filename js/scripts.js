const slides = document.querySelectorAll(".slider-item"),
    buttons = document.querySelectorAll(".slider-btn"),
    menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu-item"),
    menuOpen = document.querySelector(".menu-btn"),
    menuClose = document.querySelector(".menu-btn-close"),
    menuOverlay = document.querySelector(".menu-overlay");

// Menu

menuOpen.addEventListener("click", () => {
    menu.style.width = "250px";
    menu.style.padding = "35px 40px 0px";
    menuItem.forEach((item, i) => {
        item.style.display = "block";
    });
    menuOverlay.style.display = "block";
    document.body.classList.add("lock");
});

menuClose.addEventListener("click", () => {
    menu.style.width = "0px";
    menu.style.padding = "0px";
    menu.style.paddingTop = "35px";
    menuOverlay.style.display = "none";
    document.body.classList.remove("lock");
    let timerMenuClose = setTimeout(() => {
        menuItem.forEach((item, i) => {
            item.style.display = "none";
        });
    }, 750);
});

menuOverlay.addEventListener("click", () => {
    menu.style.width = "0px";
    menu.style.padding = "0px";
    menu.style.paddingTop = "35px";
    menuOverlay.style.display = "none";
    document.body.classList.remove("lock");
    let timerMenuClose = setTimeout(() => {
        menuItem.forEach((item, i) => {
            item.style.display = "none";
        });
    }, 750);
});

// Slider

let index = 0;

const removeSliderClasses = () => {
    for (slide of slides) {
        slide.classList.remove("slider-item_active");
    }
    for (btn of buttons) {
        btn.classList.remove("slider-btn_active");
    }
};

const addSliderClasses = () => {
    slides[index].classList.add("slider-item_active");
    buttons[index].classList.add("slider-btn_active");
};

const nextSlide = () => {
    if (index === slides.length - 1) {
        removeSliderClasses();
        index = 0;
        addSliderClasses();
    } else {
        removeSliderClasses();
        index++;
        addSliderClasses();
    }
};

const clickSlide = (ind) => {
    removeSliderClasses();
    index = ind;
    addSliderClasses();
};

buttons.forEach((item, i) => {
    item.addEventListener("click", () => {
        clickSlide(i);
        clearInterval(sliderTimer);
        sliderTimer = setInterval(() => {
            nextSlide();
        }, 4000);
    });
});

let sliderTimer = setInterval(() => {
    nextSlide();
}, 4000);
