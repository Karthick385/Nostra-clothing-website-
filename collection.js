// collection page search function  //
const search = document.querySelector("input");
const products = document.querySelectorAll(".product");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();

    products.forEach(p => {
        let name = p.querySelector("h2").textContent.toLowerCase();

        if (name.includes(value)) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
});

// checkbox functionality //

const checkboxes = document.querySelectorAll(".filter");

// use existing "products" variable from search code

checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

function filterProducts() {
    let selected = [];

    checkboxes.forEach(cb => {
        if (cb.checked) {
            selected.push(cb.value.toLowerCase());
        }
    });

    products.forEach(product => {
        let categories = product.getAttribute("data-category").toLowerCase();

        // only apply checkbox filtering (do NOT touch search logic)
        if (selected.length === 0) {
            product.style.display = "block";
        } else {
            let match = selected.some(val => categories.includes(val));
            product.style.display = match ? "block" : "none";
        }
    });
}

// offerbar closing //
const closeBtn = document.getElementById("closeBtn");
const offerBar = document.getElementById("offerBar");

closeBtn.addEventListener("click", () => {
    offerBar.style.display = "none";
});
