const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    if (productSelect) {
        const fragment = document.createDocumentFragment();
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            fragment.appendChild(option);
        });
        productSelect.appendChild(fragment);
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const lastMod = document.getElementById("lastModified");
    if (lastMod) lastMod.textContent = document.lastModified;
});
// Current year
// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;
