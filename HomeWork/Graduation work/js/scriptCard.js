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


