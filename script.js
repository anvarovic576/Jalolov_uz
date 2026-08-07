// ================= LOADER =================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 700);
    }
});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ================= SEARCH =================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        document.querySelectorAll(".news-item").forEach(item => {

            const text = item.innerText.toLowerCase();

            item.style.display =
                text.includes(value) ? "flex" : "none";

        });

    });

}

// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
".trend-card,.news-item,.short-card,.stat-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".6s";

    observer.observe(card);

});
