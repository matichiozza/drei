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
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
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


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);


// Validacion formulario

const form = document.querySelector('#myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita que se envíe el formulario

    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const mail = document.querySelector('#mail');
    const message = document.querySelector('#message');

    if (name.value === '') {
      alert('Por favor ingrese su nombre.');
      return;
    }

    if (phone.value === '') {
      alert('Por favor ingrese un número de teléfono.');
      return;
    }

    if (mail.value === '') {
      alert('Por favor ingrese un correo electrónico.');
      return;
    } else if (!mail.value.includes('@')) {
      alert('Por favor ingrese un correo electrónico válido.');
      return;
    }

    if (message.value === '') {
      alert('Por favor ingrese un mensaje.');
      return;
    }

    // si todos los campos son válidos, envía el formulario
    form.submit();
    window.location.href = "enviado.html";
  });