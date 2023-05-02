gsap.registerPlugin(ScrollTrigger);

gsap.to(".section-intro__left", {
    duration: 5,
    y:-80,
    scrollTrigger:{
        trigger:".section-intro__image",
        start:"top 10%",
        scrub:3,
    }
});

gsap.to(".section-intro__right", {
    duration: 5,
    y:-60,
    scrollTrigger:{
        trigger:".section-intro__right",
        scrub:3,
    }
});


let tl = gsap.timeline();
tl.to('#repeat-text-two', {
    xPercent:-25,
    scrollTrigger:{
        trigger:"#repeat-text-two",
        scrub:1
    }
})

let tl1 = gsap.timeline();
tl1.to('#repeat-text-three', {
    xPercent:25,
    scrollTrigger:{
        trigger:"#repeat-text-three",
        scrub:1
    }
})





var rotate = gsap.timeline({
    scrollTrigger:{
        trigger: ".scroll__text",
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "linear"
    }
})