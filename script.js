const button = document.getElementById("GetStarted");
const modal = document.getElementById("modal");
const container = document.querySelector(".container");
const closeBtn = document.getElementById("closeModal");
const alertBox = document.getElementById("customAlert");
// const airplane = document.getElementById("airplane");
const modalContent = document.getElementById("modalContent");
const nextPage = document.getElementById("nextPage");

button.addEventListener("click", () => {
    container.classList.add("blur");
    modal.classList.remove("hidden");
    alertBox.classList.add("hidden");
});

document.getElementById("submitInfo").addEventListener("click", () => {
    const travelType = document.getElementById("travelType").value.trim();
    let country = document.getElementById("country").value.trim();

    function capitalizeFirstLetter(word) {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    country = capitalizeFirstLetter(country);

    if (!travelType || !country) {
        alertBox.classList.remove("hidden");
        return;
    }

    alertBox.classList.add("hidden");

    const pageMap = {
        "Tourism": "Tourism/tourism.html",
        "Business Trip": "Business/business.html",
        "Study Abroad": "Study/study.html",
        "Medical/Emergency": "Medical/medical.html",
        "Adventure/Backpacking": "Adventure/adventure.html"
    };

    const redirectPage = pageMap[travelType] || "default.html";
    const url = `${redirectPage}?country=${encodeURIComponent(country)}`;

    const container = document.querySelector(".container");
    container.style.transition = "opacity 0.3s ease-in";
    container.style.opacity = "0";

    setTimeout(() => {
        window.location.href = url;
    }, 300);
});


closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    container.classList.remove("blur");
});
