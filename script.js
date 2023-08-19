var cursor = document.querySelector("#cursor");
var cursorShadow = document.querySelector("#cursorShadow");
document.addEventListener("mousemove", function(dets){
    
    cursor.style.left = dets.x-10+"px";
    cursor.style.top = dets.y-10+"px";
    cursorShadow.style.left = dets.x-200+"px";
    cursorShadow.style.top = dets.y-200+"px";

})

gsap.to("#nav", {
    backgroundColor: "black",
    height: "120px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})