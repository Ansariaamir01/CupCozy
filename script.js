let animate = gsap.timeline();
// Home page //
function HomePage() {
    animate.from("#navigation p", {
        y:-50,
        opacity: 0,
        duration: 0.6,
        delay:0.3,
    })
    animate.from("#navigation .links a",{
        y:-50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
    },"-=0.5") 
    animate.from("#navigation i",{
        y:-50,
        opacity: 0,
        duration: 0.6,
    },"-=0.5")
    animate.from("#content h6",{
        x:-50,
        opacity:0,
        duration:0.8,
    },"-=0.4")
    animate.from("#content h3",{
        x:50,
        opacity:0,
        duration:0.8,
    },"-=0.5")
    
    animate.from("#content div",{
        x:-50,
        opacity:0,
        duration:0.8,
    },"-=0.5")
    animate.from(".card",{
        scale:0,
        opacity:0,
        duration: 0.6
    },"-=0.5")
}
HomePage();

// Section2 Coffee Slider//
function Section2() {
    gsap.from(".section2 #img1",{
    x: -50,
    duration:0.8,
    opacity:0,
    stagger:0.4,
    scrollTrigger : {
        trigger: ".section2 #img1",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
    }
},)
}
Section2()

// Main section Product-Boxes//
function MainBoxes () {
    document.addEventListener('DOMContentLoaded', function() {
        const hearts = document.querySelectorAll('.main-heart');
        hearts.forEach(function(heart) {
            heart.addEventListener('click', function() {
                heart.classList.toggle("color-heart")
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.main-container');
    cards.forEach(function(card) {
        gsap.from(card,{
            opacity:0,
            duration:0.8,
            stagger: 0.5,
            scrollTrigger : {
                trigger: card,
                scroller: "body",
                start: "top 65%",
                end: "top 80%",
                scrub:5,
            }})
});});}
MainBoxes();

function sweetAlert () {
    let Buttons = document.querySelectorAll(".main-order-button")
    Buttons.forEach(function(button) {
        button.addEventListener('click', function(error) {
           const Toast = Swal.mixin({
               toast: true,
               position: "top-end",
               showConfirmButton: false,
               timer: 2000,
               timerProgressBar: true,
               didOpen: (toast) => {
                 toast.onmouseenter = Swal.stopTimer;
                 toast.onmouseleave = Swal.resumeTimer;
               }
             });
             Toast.fire({
               icon: "success",
               title: "Yes Available! Come and enjoy at our place."
             });
       });
   });
   
   let ErrorMessage = document.querySelector(".error")
   ErrorMessage.addEventListener('click',function(){
       const Toast = Swal.mixin({
           toast: true,
           position: "top-end",
           showConfirmButton: false,
           timer: 2200,
           timerProgressBar: true,
           didOpen: (toast) => {
             toast.onmouseenter = Swal.stopTimer;
             toast.onmouseleave = Swal.resumeTimer;
           }
         });
         Toast.fire({
           icon: "error",
           title: "Currently Not Available!"
         });
   })
   
}
sweetAlert()

// Section3 Beans-Checkout//
function Section3() {
    gsap.from(".sec3-container #img-1",{
        x: -50,
        opacity:0,
        duration:0.8,
        stagger: 0.5,
        scrollTrigger : {
            trigger: ".sec3-container",
            scroller: "body",
            start: "top 70%",
            end: "top 80%",
            scrub:5,
        }
    })
    gsap.from(".sec3-container #sec3-text",{
        y: -50,
        opacity:0,
        duration:0.8,
        scrollTrigger : {
            trigger: ".sec3-container",
            scroller: "body",
            start: "top 70%",
            end: "top 80%",
            scrub:5,
        }
    })
    gsap.from(".sec3-container #img-2",{
        x: 50,
        opacity:0,
        duration:0.8,
        scrollTrigger : {
            trigger: ".sec3-container",
            scroller: "body",
            start: "top 70%",
            end: "top 80%",
            scrub:5,
        }
    })
}
Section3()

// Section4 Testimonial//
function swiper () {
  const swiper = new Swiper('.slider-wrapper', { 
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  });
  gsap.from(".swiper-pagination",{
    opacity:0,
    scale: 0,
    duration: 0.8,
  })
  gsap.from(".swiper-slide-button",{
    opacity:0,
    duration: 0.8,
    scrollTrigger: {
        trigger : ".card-item",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 60%",
    }
  })
}
swiper()
function Section4 () {
    gsap.from(".join-us",{
        scale:0,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger : ".join-us",
            scroller: "body",
            start: "top 85%",
            end: "top 60%",
        }
    })
    gsap.from(".card-item", {
        stagger: 0.6,
        y: -50,
        opacity:0,
        duration:0.7,
        scrollTrigger: {
            trigger : ".card-item",
            scroller: "body",
            start: "top 60%",
            end: "top 60%",
        }
    })
}
Section4()

// Section5 About-Us//
function Section5() {
    gsap.from(".section5",{
        opacity:0,
        duration:1.5,
        scrollTrigger: {
            trigger:".section5",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
            scrub:5
        }
    })
    gsap.from("#about-img",{
        opacity:0,
        x:100,
        duration:1.5,
        overFlow:"hidden",
        scrollTrigger: {
            trigger:"#about-img",
            scroller: "body",
            start: "top 35%",
            end: "top 50%",
            scrub:5,
        }
    })
    gsap.from("#about-text",{
        opacity:0,
        x:-100,
        duration:1.5,
        scrollTrigger: {
            trigger:"#about-img",
            scroller: "body",
            start: "top 35%",
            end: "top 50%",
            scrub:5
        }
    })
}
Section5()

// Section6 Location//
function Section6 () {
    gsap.from(".section6",{
        opacity:0,
        duration:1.5,
        y: -50,
        scrollTrigger: {
            trigger:".section6",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
            scrub:5
        }
    })
    gsap.from(".iframe-section",{
        opacity:0,
        x:-100,
        duration:1.5,
        scrollTrigger: {
            trigger:".iframe-section",
            scroller: "body",
            start: "top 65%",
            end: "top 50%",
            scrub:5,
        }
    })
    gsap.from(".invitation-section",{
        opacity:0,
        x:100,
        duration:1.5,
        scrollTrigger: {
            trigger:".invitation-section",
            scroller: "body",
            start: "top 65%",
            end: "top 50%",
            scrub:5
        }
    })
        
}
Section6()

// footer //
function Footer() {
    gsap.from("#footer",{
        opacity:0,
        duration:1.5,
        scrollTrigger: {
            trigger:"#footer",
            scroller: "body",
            start: "top 80%",
            end: "top 50%",
        }
    })
}
Footer()
