/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* =========================
   ĐÓNG MENU KHI CLICK LINK
========================= */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================
   LOAD THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   SEARCH ĐỊA ĐIỂM
========================= */

const searchInput =
    document.getElementById("searchInput");

const cards =
    document.querySelectorAll(".destination-card");

const noResult =
    document.getElementById("noResult");


searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();

    let found = false;

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(keyword)) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (!found) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

});


/* =========================
   NÚT LÊN ĐẦU
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   NÚT XEM THÊM
========================= */

document.querySelectorAll(".detail-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".destination-card");

        const name =
            card.dataset.name;

        alert(
            "Bạn đang khám phá: " +
            name +
            "\n\nMình có thể phát triển trang chi tiết cho địa điểm này."
        );

    });

});