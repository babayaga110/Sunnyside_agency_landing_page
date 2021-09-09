const menuBtn = document.querySelector('.hamburger');
const arrowBtn = document.querySelector('.hero-arrow')

menuBtn.addEventListener('click',()=>{
        arrowBtn.style.display ="none";
        document.querySelector('.nav-list').style.transform = "translateX(0)";
})
document.body.onscroll =() => {
        arrowBtn.style.display ="block";
        document.querySelector('.nav-list').style.transform = "translateX(1000px)";
}