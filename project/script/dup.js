// ================================
// Footer info
// ================================
document.querySelector("#lastModified").textContent = document.lastModified;
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// ================================
// Hamburger menu toggle
// ================================
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// ================================
// Example: Services stored in array of objects
// ================================
const services = [
    { name: "Building Maintenance", icon: "🏠" },
    { name: "Repairs", icon: "🔧" },
    { name: "Home Improvement", icon: "🛠️" },
    { name: "Property Management", icon: "📋" }
];

// Dynamically render services list if present
const serviceList = document.querySelector("#serviceList");
if (serviceList) {
    services.forEach(service => {
        const li = document.createElement("li");
        li.textContent = `${service.icon} ${service.name}`;
        serviceList.appendChild(li);
    });
}

// ================================
// Handle Service Request Form
// ================================
const serviceForm = document.querySelector("#serviceForm");
if (serviceForm) {
    serviceForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const service = document.querySelector("#service").value;
        const details = document.querySelector("#details").value;

        // Validation
        if (!service) {
            alert("Please select a service before submitting.");
            return;
        }

        const request = { service, details, date: new Date().toLocaleString() };

        // Save to localStorage
        let requests = JSON.parse(localStorage.getItem("requests")) || [];
        requests.push(request);
        localStorage.setItem("requests", JSON.stringify(requests));

        // Confirmation message
        alert(`✅ Thank you! Your request for ${service} has been saved.`);
        serviceForm.reset();
    });
}

// ================================
// Handle Contact Form (About Page)
// ================================
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        // Validation
        if (!name || !email || !message) {
            alert("⚠️ Please fill in all required fields.");
            return;
        }

        const contactMessage = { name, email, message, date: new Date().toLocaleString() };

        // Save to localStorage
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(contactMessage);
        localStorage.setItem("messages", JSON.stringify(messages));

        // Confirmation message
        alert(`📩 Thank you, ${name}! Your message has been received. We’ll get back to you soon.`);
        contactForm.reset();
    });
}
