// Hamburger toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
    });
}

// Footer infos
const lastModifiedEl = document.querySelector("#lastModified");
const currentYearEl = document.querySelector("#currentyear");
if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;
if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast Temple",
        location: "Abidjan Ivory Coast",
        dedicated: "2025, May, 25",
        area: 17362,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },
    {
        templeName: "Córdoba Argentina Temple",
        location: "Cordoba Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
    },
    {
        templeName: "Kyiv Ukraine Temple",
        location: "Kyiv Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
    }
];

// Function to generate temple cards dynamically
function displayTemples(templesArray) {
    const container = document.querySelector(".res-grid");
    if (!container) return;

    // Clear previous cards
    container.innerHTML = "";

    templesArray.forEach(temple => {
        let card = document.createElement("section");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Filtering function
function filterTemples(criteria) {
    let filtered;

    switch (criteria) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default: // "home"
            filtered = temples;
    }

    displayTemples(filtered);
}

// Hook up navigation links
document.querySelector("a[href='old.html']").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("old");
});

document.querySelector("a[href='new.html']").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("new");
});

document.querySelector("a[href='large.html']").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("large");
});

document.querySelector("a[href='small.html']").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("small");
});

document.querySelector("a[href='index.html']").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("home");
});

// Initial load
displayTemples(temples);
