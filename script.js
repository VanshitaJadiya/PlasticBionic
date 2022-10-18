var ctrh, ctrw;

if (window.innerWidth > 500) {
  ctrh = 1.5;
  ctrw = .7;
}
else {
  ctrh = 1.2;
  ctrw = 2.2;
}

function scroll(){
   gsap.registerPlugin(ScrollTrigger);

   const locoScroll = new LocomotiveScroll({
     el: document.querySelector("#main"),
     smooth: true,
     tablet: { smooth: true },
     smartphone: { smooth: true }
   });
   locoScroll.on("scroll", ScrollTrigger.update);
 
   ScrollTrigger.scrollerProxy("#main", {
     scrollTop(value) {
       return arguments.length
         ? locoScroll.scrollTo(value, 0, 0)
         : locoScroll.scroll.instance.scroll.y;
     },
     getBoundingClientRect() {
       return {
         top: 0,
         left: 0,
         width: window.innerWidth,
         height: window.innerHeight
       };
     }
 
     // follwoing line is not required to work pinning on touch screen
 
     /* pinType: document.querySelector("#main").style.transform
       ? "transform"
       : "fixed"*/
   });
 
 
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
   ScrollTrigger.refresh();

}
scroll();

function squareanim(){
  
   
   gsap.to("#square img",{
      stagger:1.2,

      opacity:1,
      duration:2,
      ease:Expo.easeInOut,
   })

var tl=gsap.timeline();

tl.to("#front #square",{
   width:"30%",
   duration:1,
   delay:1,
   ease:Expo.easeInOut,
   opacity:1,
})
.to("#front #square",{
   height:"50vh",
   duration:1,
   ease:Expo.easeInOut,
})
.to("#front #square",{
   width: "15vw",
   height: "29vh",
   duration:1,
   ease:Expo.easeInOut,
   

})
.to("#front h1 span",{
   y:"-200%",
   ease:Expo.easeInOut,
   duration:0.5
})

.to("#front #square",{
   width: "100vw",
   height: "100vh",
   duration:1,
   delay:.5,
   ease:Circ.easeInOut,
   onComplete: function(){

      document.querySelector("#front").style.display = "none";
      h1anim();
   }
})
}
squareanim();

function fronttextanim(){
   var h1=document.querySelector("#front h1");
        var clutter="";
        var j=0;
        for(var i=0;i<=Math.floor(h1.textContent.length/2);i++){
            clutter+=`<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`
            j++;

        }
        for(var i=Math.floor(h1.textContent.length/2)-1;i>=0;i--){
            clutter+=`<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`
            j++;

        }
        document.querySelector("#front h1").innerHTML=clutter;
        document.querySelectorAll("#front h1 span").forEach(function(elem){
            //    opacity:0,

            
            gsap.to(elem,{
                y:0,
                duration:2,
                ease:Expo.easeInOut,
                delay:elem.dataset.delay*.1,
                opacity:1
            })
        })
      //   console.log("i m working");
}
fronttextanim();

function navbar(){
   document.querySelector("#nav")
.addEventListener("mouseenter",function(){
       gsap.to(".cover",{
        // stagger:.5,
        ease:Expo.easeInOut,
        duration:.5,
        height:"100%",
       opacity:1
       })
       gsap.to(".cover span",{
        // stagger:.5,
        ease:Expo.easeInOut,
        duration:.5,
        height:"100%",
       opacity:1,
      //  stagger:.1,
       y:20
       })
})
document.querySelector("#nav")
.addEventListener("mouseleave",function(){
    gsap.to("#new",{
        // stagger:.5,
        ease:Expo.easeInOut,
        duration:.5,
        height:"3%",
        opacity:0
       })
       gsap.to("#new2",{
        // stagger:.5,
        ease:Expo.easeInOut,
        duration:.5,
        height:"0%",
        opacity:0
       })
       gsap.to("#new3",{
        // stagger:.5,
        ease:Expo.easeInOut,
        duration:.5,
        height:"0%",
        opacity:0
       })
       gsap.to(".cover span",{
        // stagger:.5,
        ease:Expo.easeInOut,
        duration:.5,
        height:"100%",
       opacity:0
       })

       
})
}
navbar();

function line(){
   document.querySelectorAll(".textdiv")
.forEach(function(textcontent) {
textcontent.addEventListener("mouseenter",function(dets){
      gsap.to(dets.target.children[1],{
        width:"100%",
        ease:Expo.easeInOut,
        duration:.2
      })

      
   })
   textcontent.addEventListener("mouseleave",function(dets){
    gsap.to(dets.target.children[1],{
      width:"0%",
      left:"100%",
      ease:Expo.easeInOut,
      duration:.2,
      onComplete: function(){
        dets.target.children[1].style.left=0;
      }
    })
  })
});
}
line();

function h1anim(){
   document.querySelectorAll(".textdiv h1").forEach(function(char){
   var clutter = "";
      char.textContent.split("").forEach(function(elem){
         clutter+=`<span>${elem}</span>`;

      })
   char.innerHTML=clutter;

   })

   document.querySelectorAll(".textdiv h1").forEach(function(h1){
      gsap.to(h1.children,{
         y:0,
         duration:1,
         ease:Expo.easeInOut,
         stagger:.1,
         opacity:1,
         scrollTrigger:{
            trigger:h1,
            scroller:"#main",
            start:"top 80%",
   
         }
      })
   })
   
}






