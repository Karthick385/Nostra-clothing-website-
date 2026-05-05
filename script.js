

// banner slider //
const slides = document.querySelector(".slides");
const next = document.querySelector(".next-1");
const prev = document.querySelector(".prev-1");

let index = 0; 
const maxSteps = 2; 
next.addEventListener("click", () => {
    if (index < maxSteps) {
        index++;
    } else {
       
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
});
prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        
        index = maxSteps;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
});

// offer bar closing //
const closeBtn = document.getElementById("closeBtn");
const offerBar = document.getElementById("offerBar");

closeBtn.addEventListener("click", () => {
    offerBar.style.display = "none";
});




// MOST WANTED SLIDER //

const mwContainer = document.querySelector(".most-wanted .products-1");
const mwNext = document.querySelector(".most-wanted .next");
const mwPrev = document.querySelector(".most-wanted .prev");

if (mwContainer && mwNext && mwPrev) {

    const scrollAmount = 320;

    mwNext.addEventListener("click", () => {
        mwContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    mwPrev.addEventListener("click", () => {
        mwContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

}





