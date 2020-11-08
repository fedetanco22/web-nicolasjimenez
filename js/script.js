window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        rewind: true,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: '.carousel__indicadores'
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    });
});


const tabItems = document.querySelectorAll('.tabs__item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const tabContainer = document.querySelector('.container-tab');


document.addEventListener('DOMContentLoaded', createTabs);
// ================= CREAR TAB CONTENT CON FOTOS==================
function createTabs() {
    fotos.forEach(item => {
        const tab = document.createElement('article');
        tab.id = `tab-${
            item.id
        }-content`;
        tab.classList.add('tab-content-item');
        tabContainer.appendChild(tab);

        const content1 = document.createElement('div');
        content1.classList.add(`tab-${
            item.id
        }-content-grid`);
        tab.appendChild(content1)

        // ====== create foto/txt gallery===
        for (let i = 1; i <= 20; i++) {
            // console.log(item.images[i])
            // console.log(item.trabajo[i])
            const article = document.createElement('article');
            article.classList.add('gallery');
            content1.appendChild(article);

            const imgs = document.createElement('picture');
            imgs.classList.add('gallery__pic');
            imgs.innerHTML = `
                            <img class="gallery__pic--img" alt="" src=${
                item.images[i]
            }>`
            article.appendChild(imgs)

            const txts = document.createElement('div');
            txts.classList.add('gallery__txt');
            txts.innerHTML = `
                <a class="gallery__txt--a"> ${
                item.trabajo[i]
            }</a>`
            article.appendChild(txts)
        }
    });
}

// Select tab-content where Grid photos is
function selectItem(e) {
    e.preventDefault()
    removeBorder();
    removeShow();
    // createTabs();
    // Add class with red Border
    this.classList.add('tabs__item--border');
    // Asign the ID to a variable so we can call it back
    const idItem = this.id
    // get item content from DOM
    // console.log("selectItem -> idItem", idItem)
    const tabContentItem = document.querySelector(`#${idItem}-content`);
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


// =====================================================================
// =========================== BOTON SUBIR =============================
// =====================================================================

const mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// ============ MENU HAMBURGUESA =====================

const hambur = document.querySelectorAll('.hamb__button')


hambur.forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        const menu = document.querySelector('.menu')
        menu.classList.add('menu__active')


    });
});
