const modal = document.getElementById("serviceModal");
const closeBtn = document.querySelector(".close-btn");
const serviceTypeInput = document.getElementById("serviceType");

// Add event listeners to all buttons
document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", () => {
        const serviceType = button.parentElement.querySelector("h2").textContent;
        serviceTypeInput.value = serviceType; // Set the service type in the modal
        modal.style.display = "block"; // Show the modal
    });
});

// Close the modal when the "X" button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
