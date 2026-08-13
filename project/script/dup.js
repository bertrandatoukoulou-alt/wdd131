// Footer info
document.querySelector("#lastModified").textContent = document.lastModified;
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// Example: Services stored in array of objects
const services = [
    { name: "Building Maintenance", icon: "🏠" },
    { name: "Repairs", icon: "🔧" },
    { name: "Home Improvement", icon: "🛠️" },
    { name: "Property Management", icon: "📋" }
];

// Dynamically render services list
const serviceList = document.querySelector("#serviceList");
services.forEach(service => {
    const li = document.createElement("li");
    li.textContent = `${service.icon} ${service.name}`;
    serviceList.appendChild(li);
});

// Save form data to localStorage
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const service = document.querySelector("#service").value;
    const details = document.querySelector("#details").value;
    const request = { service, details, date: new Date().toLocaleString() };

    // Save to localStorage
    let requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests.push(request);
    localStorage.setItem("requests", JSON.stringify(requests));

    // Confirmation message using template literal
    alert(`Thank you! Your request for ${service} has been saved.`);
});
