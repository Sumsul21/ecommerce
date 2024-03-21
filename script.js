document.addEventListener('DOMContentLoaded', function () {
    // copy menu for mobile
    function copyMenu() {
        // copy inside .dpt.cat to .department
        var dptCategory = document.querySelector('.dpt-cat');
        var dptPlace = document.querySelector('.departments');
        dptPlace.innerHTML = dptCategory.innerHTML

        //copy inside nav to nav
        var mainNav = document.querySelector('.header-nav nav');
        var navPlace = document.querySelector('.off-canvas nav');
        navPlace.innerHTML = mainNav.innerHTML

        // copy .header-top .wrapper to .the top-nav
        var topNav = document.querySelector('.header-top .wrapper');
        var topPlace = document.querySelector('.off-canvas .thetop-nav');
        topPlace.innerHTML = topNav.innerHTML
    }

    copyMenu();

    const menuButton = document.querySelector('.trigger');
    const closeButton = document.querySelector('.t-close');
    const siteElement = document.querySelector('.site');

    menuButton.addEventListener('click', function (e) {
        e.preventDefault();
        siteElement.classList.toggle('showmenu');
    });
    closeButton.addEventListener('click', function () {
        siteElement.classList.remove('showmenu');
    });

    // show sub-menu on mobile
    const submenu = document.querySelectorAll('.has-child .icon-small');
    submenu.forEach((menu) => menu.addEventListener('click', toggle));

    function toggle(e) {
        e.preventDefault();

        submenu.forEach((item) => {
            if (item !== this) {
                item.closest('.has-child').classList.remove('expand');
            }
        });

        const parent = this.closest('.has-child');

        if (!parent.classList.contains('expand')) {
            parent.classList.add('expand');
        } else {
            parent.classList.remove('expand');
        }
    }

    const searchButton = document.querySelector('.t-search'); // Selecting the search button element
    const tClose = document.querySelector('.search-close'); // Selecting the close button element
    const showClass = document.querySelector('.site'); // Selecting the element to which the 'showsearch' class will be added or removed

// Adding a click event listener to the search button
    searchButton.addEventListener('click', function() {
        // Toggling the 'showsearch' class on the selected element
        showClass.classList.toggle('showsearch');
    });

// Adding a click event listener to the close button
    tClose.addEventListener('click', function() {
        // Removing the 'showsearch' class from the selected element
        showClass.classList.remove('showsearch');
    });
// Show dep menu//
    const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
          dptClass = document.querySelector('.site');
    dptButton.addEventListener('click',function (){
        event.preventDefault();
        dptClass.classList.toggle('showdpt')
    })

// stock products Bar width percentage
    var stocks = document.querySelectorAll('.products .stock');

    for (let x = 0; x < stocks.length; x++) {
        let stockElement = stocks[x].querySelector('.qty-available');
        let soldElement = stocks[x].querySelector('.qty-solid');

        // Check if both elements are found before proceeding
        if (stockElement && soldElement) {
            let stock = parseInt(stocks[x].dataset.stock),
                available = parseInt(stockElement.innerHTML),
                sold = parseInt(soldElement.innerHTML),
                percent = (sold * 100) / stock;

            stocks[x].querySelector('.available').style.width = percent + '%';
        } else {
            console.error('One or more elements not found in stock element at index ' + x);
        }
    }


});


// Initialize Swiper inside the DOMContentLoaded event
var mySwiper = new Swiper('.myslider', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// product image slide

var productThumb = new Swiper('.small-image',{
    loop: true,
    spaceBetween:10,
    slidesPerView:3,
    freeMode:true,
    watchSlidesProgress:true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});
var productBig = new Swiper('.big-image',{
    loop:true,
    autoHeight :true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    thumbs: {
        swiper:productThumb,
    }

});




// const dptButton = document.querySelector('.dpt-cat .dpt-trigger');
// const dptClass = document.querySelector('.site');
//
// if (dptButton && dptClass) {
//     dptButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default behavior of the anchor link
//         dptClass.classList.toggle('showdpt');
//     });
// } else {
//     console.error("One or more elements not found.");
// }






