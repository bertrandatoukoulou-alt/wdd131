const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // ajoute ou enlève la classe
    hamButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// Footer infos
document.querySelector("#lastModified").textContent = document.lastModified;
document.querySelector("#currentyear").textContent = new Date().getFullYear();
