

document.querySelectorAll("h1").forEach(function (elem){
    gsap.from(elem,{
          scrollTrigger:{
            trigger:elem,
            start :"top 50%",
            markers:true
        },
        y:-50,
        duration:2,
        opacity:0,
        ease:Expo.easeInOut,
      
    })
})