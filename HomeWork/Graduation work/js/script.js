var cards = [
  {
    id: 0,
    title: 'Пихта Нордмана (в кадках)',
    artcl: 'Артикул №256985',
    imgURL: 'img/Tree01.png',
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
    imgURL: 'img/Tree02.png',
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
    imgURL: 'img/Tree03.png',
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
    imgURL: 'img/Tree04.png',
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
    imgURL: 'img/Tree05.png',
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
    imgURL: 'img/Tree06.png',
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
    imgURL: 'img/Tree07.png',
    rating: 4.1,
    review: '50 отзывов',
    size: '150 - 175 см',
    partic: 'да',
    isLike: true,
    price: '180,00 руб.'
  }
]

//cards-list

var list = document.getElementById('cards-list');

var  htmlElems = '';

for (var i = 0; i<cards.length; i++) {
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
    <img src="${cards[i].imgURL}" alt="Tree" class="imgURL">
    <div class="cardInfo">
      <h2 class="title">${cards[i].title}</h2>
      <p class="artcl">${cards[i].artcl}</p> 
      <div class="stars">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellow.png" alt="stYellow">
      <img src="img/StarYellowLight.png" alt="stYellowLight">
      <p class="rating">${cards[i].rating}</p>
      <p class="review">${cards[i].review}</p>
      </div>
      <p><span>Тип товара: </span>пихта</p>
      <p class="size partic"><span>Размер:  </span>${cards[i].size}</p>
      <p class="partic"><span>В кадке (горшке):  </span>${cards[i].partic}</p>
      <div class="Delivery"><img src="img/DeliveryIcon.jpg" alt="Delivery">
        Бесплатная доставка
      </div>
    </div>
    <div>
      <div class="like ${cards[i].isLike?"active":null}"></div>
      <img src="img/shareIcon.png" alt="Share">
      <h2 class="price">${cards[i].price}</h2>
      <button class="btn" onclick=""><img src="img/Basket.png" alt="Basket"><span>Добавить в корзину</span></button>
    </div>
  </li>
  `
}
list.innerHTML = htmlElems;

// cards auto filling



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

