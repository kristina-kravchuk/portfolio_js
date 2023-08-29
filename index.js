gsap.from(".skills_list", {opacity: 0, duration:12, stagger:1})
gsap.from(".name", {opacity: 0, duration:15, stagger:1})
gsap.from(".nav-list-item", { x:100, duration:2, stagger:1})

const button = document.querySelector(".mode-btn")
 
button.addEventListener("click", modeOn);

function modeOn(){
    document.body.style.backgroundColor = "#D5B4B4";
}

