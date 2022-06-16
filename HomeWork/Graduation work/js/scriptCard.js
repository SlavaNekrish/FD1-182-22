new Swiper('.image-slider', {
    slidesPerView: 4,
    // quant. visible elements
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // navigation

    pagination: {
        el: '.swiper-pagination',
        // Bullets
        clickable: true,
        //dynamic bullets 
        dynamicBullets: true,
    },
    autoplay: {
        //pause
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
});


// Swiper inicialization 

// var cards3p = [
//     {
//         id: 0,
//         title: 'Подставка для елки Premium L',
//         imgURL: 'img/thing01.jpg',
//         review: '5 отзывов',
//         size: 'Высота елки: от 1.5 до 2.7 м',
//         isLike: false,
//         price: '199,00 руб.'
//       },
//       {
//         id: 1,
//         title: 'Подставка для елки Comfort M',
//         imgURL: 'img/thing02.jpg',
//         review: '29 отзывов',
//         size: 'Высота елки: от 1.5 до 2.5 м',
//         isLike: true,
//         price: '180,00 руб.'
//       },
//       {
//         id: 2,
//         title: 'Подставка для ели GrandSiti 013',
//         imgURL: 'img/thing03.jpg',
//         review: '2 отзыва',
//         size: 'Высота елки: до 2.5 м',
//         isLike: false,
//         price: '12,50 руб.'
//       },
//       {
//         id: 3,
//         title: 'Подставка для ели GrandSiti 012',
//         imgURL: 'img/thing04.jpg',
//         review: '2 отзыва',
//         size: 'Высота елки: до 2 м',
//         isLike: false,
//         price: '10,00 руб.'
//       },
//       {
//         id: 4,
//         title: 'Подставка под елку MetallOFF',
//         imgURL: 'img/thing05.jpg',
//         review: '13 отзыва',
//         size: 'Высота елки: до 2 м',
//         isLike: false,
//         price: '160,90 руб.'
//       },
//       {
//         id: 5,
//         title: 'Подставка для ели GrandSiti 019',
//         imgURL: 'img/thing06.jpg',
//         review: '25 отзывов',
//         size: 'Высота елки: до 2.5 м',
//         isLike: false,
//         price: '140,00 руб.'
//       },
//       {
//         id: 6,
//         title: 'Подставка для ели GrandSiti 010',
//         imgURL: 'img/thing07.jpg',
//         review: '3 отзыва',
//         size: 'Высота елки: до 2 м',
//         isLike: false,
//         price: '20,00 руб.'
//       },
//       {
//         id: 7,
//         title: 'Подставка для ели ОМА',
//         imgURL: 'img/thing08.jpg',
//         review: '21 отзыв',
//         size: 'Высота елки: до 2.5 м',
//         isLike: true,
//         price: '183,00 руб.'
//       },
//       {
//         id: 8,
//         title: 'Подставка для елки Comfort X',
//         imgURL: 'img/thing09.jpg',
//         review: '8 отзывов',
//         size: 'Высота елки: от 1.5 до 2.7 м',
//         isLike: false,
//         price: '191,00 руб.'
//       },
//       {
//         id: 9,
//         title: 'Подставка под елку BelMet',
//         imgURL: 'img/thing10.jpg',
//         review: '10 отзывов',
//         size: 'Высота елки: до 2.5 м',
//         isLike: false,
//         price: '210,00 руб.'
//       },
    
//   ]
  
//cards-list other goods (list)


// var list3p = document.getElementById('cards-list3p');

// var  htmlElems = '';


// for (var i = 0; i<cards3p.length; i++) {
 
//     htmlElems += `
//       <div class="cardColor image-slider_slide swiper-slide>
//       <div class="cardPicture"><img src="${cards3p[i].imgURL}" alt="Tree2p"></div>
//       <div class="stars">
//         <img src="img/StarYellow.png" alt="stYellow">
//         <img src="img/StarYellow.png" alt="stYellow">
//         <img src="img/StarYellow.png" alt="stYellow">
//         <img src="img/StarYellow.png" alt="stYellow">
//         <img src="img/StarYellowLight.png" alt="stYellowLight">
//         <p class="review">${cards3p[i].review}</p>
//       </div>
//       <h3 class="title">${cards3p[i].title}</h3>
//       <p class="size">${cards3p[i].size}</p>
//       <h2 class="price">${cards3p[i].price}</h2>
//       <button class="btnSmall"><img src="img/btnSmall.jpg" alt="BasketSmall"></button>
//       <div class="like ${cards3p[i].isLike?"active":null}"></div>
//     </li>
//     `
// }
// list3p.innerHTML = htmlElems;

//cards auto filling (other goods)

var open = document.getElementById('open');

var close = document.getElementById('close');

var block = document.getElementById('block');

open.addEventListener('click', function(){
    block.style.width = '457px';
    block.style.height = '1843px';
    close.style.display = 'block';
    
    
});

close.addEventListener('click', function(){
    block.style.width = '0';
    block.style.height = '0';
    this.style.display = 'none';
    open.style.display = 'block';

    
});

// left sliding menu


