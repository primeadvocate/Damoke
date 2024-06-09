    const iconElement = document.querySelector('.toggle-btn i');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function toggleDropdownAndChangeIcon() {
        dropdownMenu.classList.toggle('height-increase');
        dropdownMenu.classList.toggle('h-0');

        if (iconElement.classList.contains('fa-bars')) {
            iconElement.classList.remove('fa-bars');
            iconElement.classList.add('fa-xmark');
        } else {
            iconElement.classList.remove('fa-xmark');
            iconElement.classList.add('fa-bars');
        }
    }

    iconElement.addEventListener('click', toggleDropdownAndChangeIcon, false);

    // window.addEventListener('scroll', function() {
    //     var navbar = document.querySelector('.navbar');
    //     navbar.classList.toggle('navbar-sticky', window.scrollY > 0);
    // })

    var swiper = new Swiper(".newServicesContainer", {
        slidesPerView: 5,
        spaceBetween: 30,
        noSwiping: false,
        grabCursor: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    var swiper = new Swiper(".portfolio-swipper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        noSwiping: false,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 2,
          slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });


    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault()
        this.reset();
    });
    
    var textWrapper = document.querySelector(".hero-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".hero-text .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".hero-text",
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 2000,
      });
