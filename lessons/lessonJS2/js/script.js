console.log(1);

var cards =[ 
    {
        imgUrl: "img/skis0.png",
        title: "Фотоаппарат Cannon",
        rating: "4.8",
        countReview: 35,
        currentPrice: "4555",
        oldPrice: "66600",
    }

]


var ul = document.querySelector('.cards ul');

var htmlStr = "";
for(var i=0; i<cards.length; i++){
    htmlStr += `
    
    <li class="goodPhoto greyline"><img src="${cards[i].imgUrl}" alt="skis0">
    <p class="fadeText1"><span>${cards[i].title}</p>
    <p class="price">${cards[i].currentPrice}</p>
    <p class="discountPrice">${cards[i].oldPrice}</p>
    <img src="img/stars.png" alt="stars" class="stars"></li>
     `
}

ul.innerHTML = htmlStr;

