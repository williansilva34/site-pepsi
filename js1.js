gsap.registerPlugin(ScrollTrigger);


















gsap.registerEffect({

    name: "fadein",


    effect:(target,config)=>{

            return gsap.fromTo(target,


                {opacity:0,x:config.xStart},
                {opacity:1,x:config.xEnd},



            )


    },

    defaults:{duration:1,xStart:500,xEnd:0}
    
})

gsap.effects.fadein('section')




















// 🔹 ANIMAÇÃO GSAP COM SCROLLTRIGGER
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".img",
        scrub: 3,
        markers: true
    }
});

tl.to(".img", {
    stagger: 0.2,
    y: -700
});
