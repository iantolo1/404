gsap.registerPlugin(ScrollTrigger);

//arrow
ScrollTrigger.matchMedia({
"(min-width: 800px)": function(){

const pin1 = gsap.timeline({

    scrollTrigger: {
        trigger: '.c1',
        start: 'top top ',
        end: '100%',
        ease: 'power1',
        scrub: true,
        pin: true,
        markers: false


    }
});
pin1.to('.arrow1b', {
    scale: 0,
    opacity: 0,
    rotate: 180
});


//number4
const first = gsap.timeline({
    scrollTrigger: {
        trigger: ".c1",
        scrub: 1,
        start: "top center",
        end: "center bottom",
        markers: false
    },


});


first.to(".four", {
    xPercent: 0,
    yPercent: -200
});


const pin2 = gsap.timeline({

    scrollTrigger: {
        trigger: '.four',
        start: 'top top ',
        end: '300%',
        scrub: true,
        pin: true,
        markers: false


    }
});



//num0

const second = gsap.timeline({
    scrollTrigger: {
        trigger: ".zero",
        scrub: 1,
        start: "top top",
        end: "center bottom",
        markers:false
    },


});
second.from(".zero", {
    xPercent: 0,
    yPercent: 20,
    
       opacity: 1
});
second.to(".zero", {
    scale:0.5
})


const pin3 = gsap.timeline({

    scrollTrigger: {
        trigger: '.zero',
        start: 'top top ',
        end: '100%',
        scrub: true,
        pin: true,
        markers: false


    }
});



//number 4a

const pin4 = gsap.timeline({

    scrollTrigger: {
        trigger: '.four_a',
        start: 'top top ',
        end: '100%',
        scrub: true,
        pin: true,
        markers: false


    }
});
pin4.to('.four_a', {
    scale: 1,
    opacity: 1,
    rotate: 0
})


//space ship

const ship = gsap.timeline({
    scrollTrigger: {
        trigger: ".c2",
        scrub: 1,
        start: "top center",
        end: "center bottom",
        markers: false
    },


});
ship.to(".invader1a", {
    xPercent: 0,
    yPercent: 400,
    scale: 1.3,
    duration: 1,
    opacity: 1
});

//cactus1
const pin5 = gsap.timeline({

    scrollTrigger: {
        trigger: '.cactus1a',
        start: 'top center ',
        end: '200%',
        scrub: true,
        pin: true,
        markers: false


    }
});
pin5.to('.cactus1a', {
    scale: 1,
    opacity: 1,
    rotate: 0
})

//cactus2

const cactus = gsap.timeline({
    scrollTrigger: {
        trigger: ".cactus1b",
        scrub: 1,
        start: "bottom center",
        end: "center bottom",
        markers: false,
        ease: 'expo'
    },


});
cactus.from(".cactus1c", {
    xPercent: 200,
    yPercent: -40,
    scale: 1.1
});


const pin6 = gsap.timeline({

    scrollTrigger: {
        trigger: '.cactus1c',
        start: 'top center ',
        end: '10%',
        scrub: true,
        pin: true,
        markers:false


    }
});
pin6.to('.cactus1c', {
    scale: 1,
    opacity: 1,
    rotate: 0
})

//star
const star = gsap.timeline({
    scrollTrigger: {
        trigger: ".zero",
        scrub: 1,
        start: "top center",
        end: "bottom center",
        markers: false,
       ease:"power1"
    },


});
star.to(".star3", {
   opacity:1, scale:1.3, rotate:360, 
});

}
});