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

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
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
        this.reset();
    });
    
    
