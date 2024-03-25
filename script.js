gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"300",
    
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -250%",
        scrub:2,
        pin:true
    }
})