// ===== JALOLOV_UZ =====

// Breaking News matnlari
const breakingTexts = [
    "Jalolov_uz ga xush kelibsiz!",
    "Eng so'nggi yangiliklar shu yerda.",
    "Sport, Jahon va Texnologiya yangiliklari.",
    "Har kuni yangi maqolalar joylanadi."
];

let breakingIndex = 0;

const breaking = document.querySelector(".breaking-text");

function changeBreakingNews() {
    if (breaking) {
        breaking.textContent = breakingTexts[breakingIndex];
        breakingIndex++;

        if (breakingIndex >= breakingTexts.length) {
            breakingIndex = 0;
        }
    }
}

setInterval(changeBreakingNews, 3000);

// Kartalarga hover effekti
const cards = document.querySelectorAll(".card, .news-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Menyu linklari bosilganda
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        alert(this.textContent + " bo'limi keyinroq qo'shiladi.");
    });
});

// Pastki menyu
const bottomLinks = document.querySelectorAll(".bottom-nav a");

bottomLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log(this.textContent + " bosildi");
    });
});

console.log("Jalolov_uz ishga tushdi.");
// ===== SCROLL ANIMATION =====

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 30){

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(255,0,0,.25)";

    }else{

        header.style.background = "#111";
        header.style.boxShadow = "none";

    }

});


// ===== IMAGE ZOOM =====

const images = document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";
img.style.transition=".4s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// ===== SHORTS CLICK =====

const shorts=document.querySelectorAll(".short-card");

shorts.forEach(item=>{

item.addEventListener("click",()=>{

alert("Video tez orada qo'shiladi.");

});

});


// ===== NEWS CLICK =====

const news=document.querySelectorAll(".news-card");

news.forEach(item=>{

item.addEventListener("click",()=>{

item.style.border="1px solid red";

});

});


// ===== AUTO YEAR =====

console.log("© "+new Date().getFullYear()+" Jalolov_uz");
