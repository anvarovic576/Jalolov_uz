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
// ===== BACK TO TOP =====

const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:20px;
bottom:90px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff2d2d;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px rgba(255,45,45,.4);
z-index:9999;
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== SEARCH =====

const searchIcon = document.querySelector(".fa-magnifying-glass");

if (searchIcon) {
    searchIcon.addEventListener("click", () => {
        const text = prompt("Qidiruv:");
        if (text) {
            alert("Siz qidirdingiz: " + text);
        }
    });
}


// ===== BELL =====

const bell = document.querySelector(".fa-bell");

if (bell) {
    bell.addEventListener("click", () => {
        alert("Hozircha yangi bildirishnoma yo'q.");
    });
}


// ===== PROFILE =====

const user = document.querySelector(".fa-user");

if (user) {
    user.addEventListener("click", () => {
        alert("Profil bo'limi tez orada tayyor bo'ladi.");
    });
}
// ===== JALOLOV_UZ SEARCH =====

const searchInput = document.createElement("input");

searchInput.placeholder = "Yangilik qidirish...";

searchInput.style.cssText = `
position:fixed;
top:75px;
left:20px;
right:20px;
padding:15px;
border-radius:15px;
border:none;
background:#222;
color:white;
font-size:16px;
display:none;
z-index:9999;
`;

document.body.appendChild(searchInput);


const searchButton = document.querySelector(".fa-magnifying-glass");


if(searchButton){

searchButton.addEventListener("click",()=>{

if(searchInput.style.display==="none"){

searchInput.style.display="block";
searchInput.focus();

}else{

searchInput.style.display="none";

}

});

}


// Yangiliklarni qidirish

searchInput.addEventListener("input",()=>{

let text = searchInput.value.toLowerCase();

const cards = document.querySelectorAll(
".news-card, .card"
);


cards.forEach(card=>{

let content = card.innerText.toLowerCase();


if(content.includes(text)){

card.style.display="flex";

}else{

card.style.display="none";

}

});


});
// ===== DARK / LIGHT MODE =====

const modeButton = document.createElement("button");

modeButton.innerHTML = "🌙";

modeButton.style.cssText = `
position:fixed;
right:20px;
top:130px;
width:45px;
height:45px;
border:none;
border-radius:50%;
background:#ff2d2d;
color:white;
font-size:20px;
cursor:pointer;
z-index:9999;
`;

document.body.appendChild(modeButton);


let lightMode = false;


modeButton.addEventListener("click",()=>{

lightMode = !lightMode;


if(lightMode){

document.body.style.background="#f5f5f5";
document.body.style.color="#111";

modeButton.innerHTML="☀️";


}else{

document.body.style.background="#0b0b0b";
document.body.style.color="#fff";

modeButton.innerHTML="🌙";

}


});
