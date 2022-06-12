var cards1p = [
  {
    id: 0,
    title: 'Пихта Нордмана (в кадках)',
    artcl: 'Артикул №256985',
    imgURL: 'img/Tree11.png',
    rating: 4.0,
    review: '150 отзывов',
    size: '80 - 100 см',
    partic: 'да',
    isLike: false,
    price: '125,52 руб.'
  },
  {
    id: 1,
    title: 'Пихта Нордмана (срезанная)',
    artcl: 'Артикул №256969',
    imgURL: 'img/Tree12.png',
    rating: 4.2,
    review: '29 отзывов',
    size: '100 - 125 см',
    partic: 'нет',
    isLike: false,
    price: '55,60 руб.'
  },  
  { 
    id: 2,
    title: 'Пихта Нордмана (срезанная)',
    artcl: 'Артикул №256859',
    imgURL: 'img/Tree13.png',
    rating: 2.2,
    review: '2 отзыва',
    size: '80 - 100 см',
    partic: 'нет',
    isLike: false,
    price: '50,20 руб.'
  },
  {
    id: 3,
    title: 'Пихта Нордмана (срезанная)',
    artcl: 'Артикул №256256',
    imgURL: 'img/Tree14.png',
    rating: 4.3,
    review: '70 отзывов',
    size: '150 - 175 см',
    partic: 'нет',
    isLike: true,
    price: '80,99 руб.'
  },
  { 
    id: 4,
    title: 'Пихта Простоцветы (в кадках)',
    artcl: 'Артикул №256985',
    imgURL: 'img/Tree15.png',
    rating: 4.9,
    review: '62 отзыва',
    size: '100 - 125 см',
    partic: 'да',
    isLike: false,
    price: '150,80 руб.'
  },
  { 
    id: 5,
    title: 'Пихта 7 цветов (срезанная)',
    artcl: 'Артикул №2989825',
    imgURL: 'img/Tree16.png',
    rating: 2.4,
    review: '2 отзыва',
    size: '80 - 100 см',
    partic: 'нет',
    isLike: false,
    price: '50,52 руб.'
  },
  {
    id: 6,
    title: 'Пихта Нью Елки (в кадках)',
    artcl: 'Артикул №256985',
    imgURL: 'img/Tree17.png',
    rating: 4.1,
    review: '50 отзывов',
    size: '150 - 175 см',
    partic: 'да',
    isLike: true,
    price: '180,00 руб.'
  }
]

//cards-list (list)

var list1p = document.getElementById('cards-list1p');

var  htmlElems = '';
var quantityElems = '';

for (var i = 0; i<cards1p.length; i++) {
  if (i == 3) {
    var Adv = '';
    Adv = `
    <div class="advertBanner">
    <h1>Новогодние игрушки</h1>
    <a href="#"><button class="btn">Посмотреть товары</button></a>
    </div>
    `
    htmlElems += Adv;
    }
  htmlElems += `
    <li class="cardColor">
    <img src="${cards1p[i].imgURL}" alt="Tree1p" class="imgURL">
    <div class="cardInfo">
      <h2 class="title">${cards1p[i].title}</h2>
      <p class="artcl">${cards1p[i].artcl}</p> 
      <div class="stars">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellowLight.png" alt="stYellowLight">
      <p class="rating">${cards1p[i].rating}</p>
      <p class="review">${cards1p[i].review}</p>
      </div>
      <p><span>Тип товара: </span>пихта</p>
      <p class="size partic"><span>Размер:  </span>${cards1p[i].size}</p>
      <p class="partic"><span>В кадке (горшке):  </span>${cards1p[i].partic}</p>
      <div class="Delivery"><img src="img/DeliveryIcon.jpg" alt="Delivery">
        Бесплатная доставка
      </div>
    </div>
    <div>
      <div class="like ${cards1p[i].isLike?"active":null}"></div>
      <img src="img/shareIcon.png" alt="Share">
      <h2 class="price">${cards1p[i].price}</h2>
      <button class="btn" onclick=""><img src="img/Basket.png" alt="Basket"><span>Добавить в корзину</span></button>
    </div>
  </li>
  `
}
list1p.innerHTML = htmlElems;

// cards auto filling (default load site)

var cards2p = [
  {
    id: 0,
    title: 'Пихта Нордмана (в кадках)',
    imgURL: 'img/Tree21.png',
    review: '150 отзывов',
    size: '80 - 100 см',
    isLike: false,
    price: '125,52 руб.'
  },
  {
    id: 1,
    title: 'Пихта Нордмана (срезанная)',
    imgURL: 'img/Tree22.png',
    review: '29 отзывов',
    size: '100-125 см',
    isLike: true,
    price: '55,60 руб.'
  },
  {
    id: 2,
    title: 'Пихта Нордмана (срезанная)',
    imgURL: 'img/Tree23.png',
    review: '2 отзыва',
    size: '80-100 см',
    isLike: false,
    price: '50,20 руб.'
  },
  {
    id: 3,
    title: 'Пихта Нордмана (срезанная)',
    imgURL: 'img/Tree24.png',
    review: '70 отзывов',
    size: '150-175 см',
    isLike: false,
    price: '80,99 руб.'
  },
  {
    id: 4,
    title: 'Пихта Простоцветы (в кадках)',
    imgURL: 'img/Tree25.png',
    review: '62 отзыва',
    size: '100-125 см',
    isLike: false,
    price: '150,80 руб.'
  },
  {
    id: 5,
    title: 'Пихта 7 цветов (срезанная)',
    imgURL: 'img/Tree26.png',
    review: '2 отзыва',
    size: '180-100 см',
    isLike: false,
    price: '50,52 руб.'
  },
  {
    id: 6,
    title: 'Пихта Нью Елки (в кадках)',
    imgURL: 'img/Tree27.png',
    review: '50 отзывов',
    size: '150-175 см',
    isLike: false,
    price: '180,00 руб.'
  },
  {
    id: 7,
    title: 'Пихта HD Nordic Trees (в кадках)',
    imgURL: 'img/Tree28.png',
    review: '35 отзывов',
    size: '80-100 см',
    isLike: true,
    price: '199,00 руб.'
  },
  {
    id: 8,
    title: 'Пихта HD Nordic Trees (в кадках)',
    imgURL: 'img/Tree29.png',
    review: '20 отзывов',
    size: '150-175 см',
    isLike: false,
    price: '205,00 руб.'
  },
  {
    id: 9,
    title: 'Пихта Простоцветы (в кадках)',
    imgURL: 'img/Tree30.png',
    review: '3 отзыва',
    size: '150-175 см',
    isLike: false,
    price: '180,00 руб.'
  },
  {
    id: 10,
    title: 'Пихта Нордмана (в кадках)',
    imgURL: 'img/Tree31.png',
    review: '5 отзывов',
    size: '200-210 см',
    isLike: false,
    price: '200,20 руб.'
  },
  {
    id: 11,
    title: 'Пихта Датская (срезанная)',
    imgURL: 'img/Tree32.png',
    review: '5 отзывов',
    size: '80-100 см',
    isLike: false,
    price: '150,52 руб.'
  },
  {
    id: 12,
    title: 'Пихта Фразера (в кадках)',
    imgURL: 'img/Tree33.png',
    review: '12 отзывов',
    size: '80-100 см',
    isLike: false,
    price: '110,60 руб.'
  },
  {
    id: 13,
    title: 'Пихта Фразера (срезанная)',
    imgURL: 'img/Tree34.png',
    review: '0 отзывов',
    size: '100-150 см',
    isLike: false,
    price: '85,20 руб.'
  },
  {
    id: 14,
    title: 'Пихта Нордмана (в кадках)',
    imgURL: 'img/Tree35.png',
    review: '150 отзывов',
    size: '80-100 см',
    isLike: true,
    price: '125,52 руб.'
  },
  {
    id: 15,
    title: 'Пихта Датская (срезанная)',
    imgURL: 'img/Tree36.png',
    review: '45 отзывов',
    size: '125-150 см',
    isLike: false,
    price: '60,00 руб.'
  },
  {
    id: 16,
    title: 'Пихта Нордмана (в кадках)',
    imgURL: 'img/Tree37.png',
    review: '2 отзыва',
    size: '120-140 см',
    isLike: false,
    price: '50,00 руб.'
  },
  {
    id: 17,
    title: 'Пихта Нордмана (в кадках)',
    imgURL: 'img/Tree38.png',
    review: '0 отзывов',
    size: '200-210 см',
    isLike: false,
    price: '210,00 руб.'
  },
  {
    id: 18,
    title: 'Пихта Датская (в кадках)',
    imgURL: 'img/Tree39.png',
    review: '12 отзывов',
    size: '80-100 см',
    isLike: true,
    price: '125,52 руб.'
  },
  {
    id: 19,
    title: 'Пихта Простоцветы (в кадках)',
    imgURL: 'img/Tree40.png',
    review: '10 отзывов',
    size: '80-100 см',
    isLike: false,
    price: '60,00 руб.'
  },
  
]

//cards-list (table)

var list2p = document.getElementById('cards-list2p');
var tileBTN = document.getElementById('tile');
var listBTN = document.getElementById('list');
var quantity = document.getElementById('pages');



tileBTN.addEventListener('click', function() {
  htmlElems = '';
  quantityElems = '';
  for (var i = 0; i<cards2p.length; i++) {
    if (i == 8) {
      var Adv = '';
      Adv = `
      <div class="advertBanner">
      <h1>Новогодние игрушки</h1>
      <a href="#"><button class="btn">Посмотреть товары</button></a>
      </div>
      `
      htmlElems += Adv;
      }
      htmlElems += `
      <li class="cardColor">
      <div class="cardPicture"><img src="${cards2p[i].imgURL}" alt="Tree2p"></div>
      <div class="stars">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellowLight.png" alt="stYellowLight">
        <p class="review">${cards2p[i].review}</p>
      </div>
      <h3 class="title">${cards2p[i].title}</h3>
      <p class="size">${cards2p[i].size}</p>
      <h2 class="price">${cards2p[i].price}</h2>
      <button class="btnSmall"><img src="img/btnSmall.jpg" alt="BasketSmall"></button>
      <div class="like ${cards2p[i].isLike?"active":null}"></div>
    </li>
    `
  }
  quantityElems = `<div class="pages">Отображается 20 из 96</div>`;
  quantity.innerHTML = quantityElems;
  list2p.innerHTML = htmlElems;
  list2p.style.display = 'flex';
  list1p.style.display = 'none';
})

listBTN.addEventListener('click', function() {
  htmlElems = '';
  quantityElems = '';
  for (var i = 0; i<cards1p.length; i++) {
    if (i == 3) {
      var Adv = '';
      Adv = `
      <div class="advertBanner">
      <h1>Новогодние игрушки</h1>
      <a href="#"><button class="btn">Посмотреть товары</button></a>
      </div>
      `
      htmlElems += Adv;
      }
    htmlElems += `
      <li class="cardColor">
      <img src="${cards1p[i].imgURL}" alt="Tree1p" class="imgURL">
      <div class="cardInfo">
        <h2 class="title">${cards1p[i].title}</h2>
        <p class="artcl">${cards1p[i].artcl}</p> 
        <div class="stars">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellow.png" alt="stYellow">
        <img src="img/StarYellowLight.png" alt="stYellowLight">
        <p class="rating">${cards1p[i].rating}</p>
        <p class="review">${cards1p[i].review}</p>
        </div>
        <p><span>Тип товара: </span>пихта</p>
        <p class="size partic"><span>Размер:  </span>${cards1p[i].size}</p>
        <p class="partic"><span>В кадке (горшке):  </span>${cards1p[i].partic}</p>
        <div class="Delivery"><img src="img/DeliveryIcon.jpg" alt="Delivery">
          Бесплатная доставка
        </div>
      </div>
      <div>
        <div class="like ${cards1p[i].isLike?"active":null}"></div>
        <img src="img/shareIcon.png" alt="Share">
        <h2 class="price">${cards1p[i].price}</h2>
        <button class="btn" onclick=""><img src="img/Basket.png" alt="Basket"><span>Добавить в корзину</span></button>
      </div>
    </li>
    `
  }
 
  quantityElems = `<div class="pages">Отображается 7 из 96</div>`;
  quantity.innerHTML = quantityElems;
  list1p.innerHTML = htmlElems;
  list1p.style.display = 'flex';
  list2p.style.display = 'none';
})

// cards auto filling (with two buttons)




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



