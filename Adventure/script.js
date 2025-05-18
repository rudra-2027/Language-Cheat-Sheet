
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("phrases");
    const closeBtn = document.getElementById("closeModal");
    const modalTitle = document.querySelector("#modalsContent h2");

    const containers = document.querySelectorAll(".categoryContainer");

    containers.forEach(container => {
        container.addEventListener("click", () => {
            const title = container.childNodes[0].textContent.trim();
            const phrases = container.querySelectorAll("span.hidden");

            modalTitle.innerText = title;
            modalContent.innerHTML = "";
            phrases.forEach(p => {
                const phraseElement = document.createElement("p");
                phraseElement.innerText = p.textContent;
                modalContent.appendChild(phraseElement);
            });

            modal.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});