window.addEventListener('load', function () { new Glider(document.querySelector('.carousel__lista'), { slidesToShow: 1, slidesToScroll: 1, rewind: true, arrows: { prev: '.carousel__anterior', next: '.carousel__siguiente' }, responsive: [{ breakpoint: 567, settings: { slidesToShow: 3, slidesToScroll: 3, dots: '.carousel__indicadores' } }, { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 5 } } ], }); });


const tabItems = document.querySelectorAll('.tabs__item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab-content where Grid photos is
function selectItem(e) {

    removeBorder();
    removeShow();

    // Add class with red Border
    this.classList.add('tabs__item--border');

    // Asign the ID to  avariable so we can call it back
    const idItem = this.id// get item content from DOM
    const tabContentItem = document.querySelector(`#${ idItem }-content`);

    tabContentItem.classList.add('show');
}

// Remove red border when it is not selected
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tabs__item--border'));
}
// Remove SHOW class so we can see the content
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// listen for tab click in icons
tabItems.forEach(item => item.addEventListener('click', selectItem));


// =========== BOTON SUBIR =============

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
