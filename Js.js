
/* --- Show & Hidden Menu ---*/

let BtnMenu = document.querySelector('.menu');
let navList = document.querySelector('.nav__list');
let BtnMenuClose = document.querySelector('.menu__close');

BtnMenu.onclick = function () {
    navList.classList.add('menu');
};

BtnMenuClose.onclick = function () {
    navList.classList.remove('menu')
};

/* --- btn sociaux ---*/

const contact = document.querySelector('.contact__btn');

contact.addEventListener('click', () => {
    contact.classList.toggle('show');
});

/* --- Contact --- */

let FormContact = document.querySelector('.contact__grid');
let BtnContact = document.querySelector('.icon__contact')
let CloseContact = document.querySelector('.contact__close')

BtnContact.onclick = function () {
    FormContact.classList.add('show__contact');
};

CloseContact.onclick = function () {
    FormContact.classList.remove('show__contact')
};

/* --- Send Message --- */

let submitButton = document.getElementById("Btnsubmit");
let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Envoi...";
        submitButton.disabled = true;
    }, 1);
});

/* --- Slide / Carousel ---*/

var swiperContent = new Swiper(".content__card", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* --- Warning ---*/

let warning = document.querySelector('.warning');
let BtnWarning = document.querySelector('.btn__warning')

BtnWarning.onclick = function () {
    warning.classList.add('show__warning');

    setTimeout(() => {
        warning.classList.remove('show__warning');
    }, 5000);
};

/* --- Rate ---*/

let NoteSend = document.querySelectorAll('.note__send')
let SendReview = document.querySelectorAll('.reviews__submit');
let ReviewStars = document.querySelectorAll('.review__star');
let BtnEdit = document.querySelectorAll('.edit');

SendReview.onclick = () =>{
    ReviewStars.style.display = "none";
    NoteSend.style.display = "block";

    BtnEdit.onclick = () =>{
        ReviewStars.style.display = "block";
        NoteSend.style.display = "none";
    }
            
    return false;
};

/* --- Notification ---*/

let Notif = document.querySelector('.notif');
let BtnNotif = document.querySelector('.btn__notif');
    
setTimeout(() => {
    Notif.classList.add('notif__On');
}, 5000);
        
setTimeout(() => {
    Notif.classList.remove('notif__On');
}, 30000);

BtnNotif.onclick = function () {
    Notif.classList.add('notif__On');

    setTimeout(() => {
        warning.classList.remove('notif__On');
    }, 10000);
};