(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
  
    document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.num');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-val');
                const count = +counter.innerText;
    
                const speed = 200;
                const increment = target / speed;
    
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
    
            updateCount();
        });
    });
    const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

$(document).ready(function () {
    $(document).on('click', function (e) {
        if (!$('.navbar-toggler').is(e.target) && !$('.navbar-toggler').has(e.target).length && !$('#navbarCollapse').has(e.target).length) {
            $('#navbarCollapse').collapse('hide');
        }
    });
});

    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
        
    });
    
})(jQuery);

new WOW().init();
// accordion js  

    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const body = this.nextElementSibling;
            const isVisible = body.style.display === 'block';

            // Close all other accordion bodies
            document.querySelectorAll('.accordion-body').forEach(item => {
                item.style.display = 'none';
            });

            // Toggle the clicked item
            body.style.display = isVisible ? 'none' : 'block';
        });
    });
// product progress bar
document.querySelectorAll(".circle").forEach(function (circle) {
  let progress = circle.getAttribute("data-progress");
  let count = 0;
  let angle = 0;

  let progressValue = circle.querySelector(".progress-value");
  let animationDuration = 2000; // 2 seconds
  let stepTime = animationDuration / progress;

  let interval = setInterval(() => {
    count++;
    angle = count * 3.6; // Convert percentage to degrees (100% = 360 degrees)

    // Update the progress value text
    progressValue.innerText = `${count}%`;

    // Apply the fill animation based on the progress
    circle.style.background = `conic-gradient(#ff6600 ${angle}deg, #ddd 0deg)`;

    if (count >= progress) {
      clearInterval(interval); // Stop when it reaches the target progress
    }
  }, stepTime);
});
