// Animation
AOS.init({
    duration: 1200,
});

// video
$(document).ready(function() {
    $(".jquery-background-video").hide();
    $(".video_image").show();
    setTimeout(function() {
      $(".jquery-background-video").show();
      $(".video_image").hide();
    }, 13000);
});

// Sticky
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
			$('.header__sec').addClass("sticky");
	}
	else{
			$('.header__sec').removeClass("sticky");
	}
});

// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {     
        $('#return-to-top').fadeIn(200); 
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {   
    $('body,html').animate({
        scrollTop : 0                    
    }, 500);
});

// Offcanvas
$(document).ready(function () {
  var offcanvasEl = $('#offcanvasExample');
  offcanvasEl.on('show.bs.offcanvas', function () {
    $('html').css({
      'overflow': 'hidden',
      'padding-right': '0px'
    });
  });
  offcanvasEl.on('hidden.bs.offcanvas', function () {
    $('html').css({
      'overflow': '',
      'padding-right': ''
    });
  });
});

// Datepicker
$(function(){
    $('#datepicker1,#datepicker2').datepicker();
});

$(document).ready(function () {
    $('#availability-calendar').datepicker({
      format: 'mm/dd/yyyy',
      todayHighlight: true,
      defaultViewDate: { year: 2025, month: 7, day: 14 },
      inline: true,
    }).datepicker('setDate', new Date(2025, 7, 14));
});

// Dropdown with Twin qty fields
const buttons = document.querySelectorAll(".adult_btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        // Close any previously open options
        buttons.forEach(function(otherBtn) {
            if (otherBtn !== btn) {
                const otherOptions = otherBtn.nextElementSibling;
                otherOptions.classList.remove("open");
            }
        });

        const options = btn.nextElementSibling;
        options.classList.toggle("open");
        e.preventDefault();
    });

    const options = btn.nextElementSibling;
    const valueSpan = options.querySelector(".guests-input__value span");

    const updateCount = () => {
        const count = parseInt(valueSpan.textContent, 10);
        // const label = options.closest(".guests-input2") ? "COPIL" : "Adults";
        const label = options.closest(".guests-input2") ? "" : "";
        btn.textContent = `${count} ${label}`;
    };

    options.querySelector(".plus").addEventListener("click", function () {
        let count = parseInt(valueSpan.textContent, 10);
        if (count < 15) {
            count++;
            valueSpan.textContent = count;
            updateCount();
        }
    });

    options.querySelector(".minus").addEventListener("click", function () {
        let count = parseInt(valueSpan.textContent, 10);
        if (count > 1) {
            count--;
            valueSpan.textContent = count;
            updateCount();
        }
    });

    updateCount();
});

// Testimonial
document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('.testi_main-slider', {
    type      : 'fade',
    pagination: false,
    arrows    : false,
    cover     : true,
  });

  var thumbs = new Splide('.testi_thumbnail-slider', {
    fixedWidth  : 150,
    fixedHeight  : 150,
    isNavigation: true,
    gap         : 0,
    direction   : 'ttb',
    pagination  : false,
    arrows      : true,
    type        : 'loop',
    focus  : 'center',
    perPage: 3,
    perMove: 1,
    height      : 470,
    breakpoints : {
      1199: {
        fixedWidth  : 100,
    		fixedHeight  : 100,
				height      : 330,
      },
      767: {
        direction   : 'ltr',
				perPage: 3,
				fixedWidth  : 80,
    		fixedHeight  : 80,
				width      : 260,
      },
    }
  });

  main.sync(thumbs);
  main.mount();
  thumbs.mount();
});

// Gallery
document.addEventListener('DOMContentLoaded', function () {
	new Splide('#Gallerymarqee1', {
		type   : 'loop',
		drag   : 'free',
		focus  : 'false',
		gap  : 20,
		arrows: false,
		pagination:false,
		autoWidth: true,
		autoScroll: {
			speed: 1,
			pauseOnHover: true,
			pauseOnFocus: true,
		},
		breakpoints: {
		1199: {
			gap  : 20,
		},
		767: {
			gap  : 10,
		},
	},
	}).mount( window.splide.Extensions );
});

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#Gallerymarqee2', {
		type   : 'loop',
		drag   : 'free',
		focus  : 'false',
		gap  : 20,
    direction: 'rtl',
		arrows: false,
		pagination:false,
		autoWidth: true,
		autoScroll: {
			speed: 1,
			pauseOnHover: true,
			pauseOnFocus: true,
		},
		breakpoints: {
		1199: {
			gap  : 20,
		},
		767: {
			gap  : 10,
		},
	},
	}).mount( window.splide.Extensions );
});

// Blog
document.addEventListener('DOMContentLoaded', function () {
	new Splide('.blog-slider', {
		arrows: true,
		pagination:false,
		type: 'loop',
		perPage: 4,
		perMove: 1,
		gap: '16px',
		breakpoints: {
			1579: {
				perPage: 3,
				perMove: 1,
			},
			1199: {
				perPage: 3,
				perMove: 1,
			},
			991: {
				perPage: 2,
				perMove: 1,
				arrows: false,
				pagination:true,
			},
			767: {
				perPage: 2,
				perMove: 1,
				gap:'10px',
			},
			575: {
				perPage: 1,
				perMove: 1,
			},
		},
	}).mount();
});

// Reviews
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.reviews-slider').forEach(function (el) {
    new Splide(el, {
      arrows: true,
      pagination: false,
      type: 'loop',
      autoplay: true,
      perPage: 1,
      perMove: 1,
      gap: '10px',
      breakpoints: {
        991: {
          arrows: true,
        }
      },
    }).mount();
  });
});

// Accomod
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accomodation-slider').forEach(function(wrapper) {
    const mainSlider = wrapper.querySelector('.accomod_main-slider');
    const thumbSlider = wrapper.querySelector('.accomod_thumb-slider');

    const main = new Splide(mainSlider, {
      type       : 'loop',
      pagination : false,
      arrows     : false,
      cover      : true,
      autoplay   : true,
      fixedHeight: 550,
      breakpoints  : {
        1199: {
          fixedHeight: 400,
        },
        600: {
          fixedHeight: 220,
        },
      }
    });

    const thumbs = new Splide(thumbSlider, {
      fixedWidth   : 190,
      fixedHeight  : 130,
      isNavigation : true,
      gap          : '10px',
      direction    : 'ttb',
      pagination   : false,
      arrows       : false,
      cover        : true,
      type         : 'slide',
      perPage      : 4,
      perMove      : 1,
      height       : 550,
      breakpoints  : {
        1199: {
          direction  : 'ltr',
          perPage    : 3,
          fixedWidth : false,
          fixedHeight: 140,
          width      : '100%',
        },
        767: {
          perPage    : 4,
          fixedHeight: 100,
        },
        600: {
          perPage    : 3,
          fixedHeight: 80,
        },
      }
    });

    main.sync(thumbs);
    main.mount();
    thumbs.mount();
  });
});

// FAQ Accordion
$(document).ready(function () {
  $('.accordion').on('show.bs.collapse', function (e) {
    $(e.target).closest('.accordion-item').addClass('active');
  });

  $('.accordion').on('hide.bs.collapse', function (e) {
    $(e.target).closest('.accordion-item').removeClass('active');
  });
});

// Selectpicker
document.addEventListener('DOMContentLoaded', function () {
  $('.selectpicker').selectpicker();
});

// Fancybox
$(function () {
  var $grid = $('.gallery-container');
  var $buttons = $('.gallery-filter button');
  var $allItems;
  var msnryReady = false;
  $buttons.prop('disabled', true);
  function initMasonry() {
    $grid.imagesLoaded(function () {
      $grid.masonry({
        itemSelector: '.gallery-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
      $allItems = $grid.find('.gallery-item');
      msnryReady = true;
      $buttons.prop('disabled', false);
      console.log('Masonry initialized, items found:', $allItems.length);
    });
  }
  if (typeof imagesLoaded === 'undefined') {
    console.error('imagesLoaded not found — make sure the script is included BEFORE this script.');
    $grid.masonry({
      itemSelector: '.gallery-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
    $allItems = $grid.find('.gallery-item');
    msnryReady = true;
    $buttons.prop('disabled', false);
  } else {
    initMasonry();
  }
  $('.gallery-filter').on('click', 'button', function () {
    if (!msnryReady) {
      console.warn('Masonry not ready yet — wait a moment.');
      return;
    }
    var filter = $(this).attr('data-filter') ? $(this).attr('data-filter').trim() : 'all';
    $buttons.removeClass('active');
    $(this).addClass('active');
    var $toShow = (filter === 'all') ? $allItems : $allItems.filter('[data-category="' + filter + '"]');
    var $current = $grid.children('.gallery-item');
    var $toRemove = $current.not($toShow);
    var $toAppend = $toShow.not($current);
    if ($toRemove.length) {
      $grid.masonry('remove', $toRemove);
    }
    if ($toAppend.length) {
      $grid.append($toAppend);
      $grid.imagesLoaded(function () {
        $grid.masonry('appended', $toAppend);
        $grid.masonry('layout');
      });
    } else {
      $grid.masonry('layout');
    }
  });
});

// Counter
$(function () {
    $('.counter').countUp();
});


