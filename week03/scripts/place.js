document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("LastModified").textContent = document.lastModified;

const temperature = 28; // °C (Metric baseline for Togo)
const windSpeed = 10;   // km/h

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windchillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windchillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windchillElement.textContent = "N/A";
}