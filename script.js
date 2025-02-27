// Modal elements
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const aboutModal = document.getElementById("aboutModal");

// Open modal on button click
openModalBtn.addEventListener("click", () => {
    console.log("click")
  aboutModal.classList.remove("hidden");
});

// Close modal on button click
closeModalBtn.addEventListener("click", () => {
  aboutModal.classList.add("hidden");
});

// Close modal when clicking outside the box
aboutModal.addEventListener("click", (event) => {
  if (event.target === aboutModal) {
    aboutModal.classList.add("hidden");
  }
});
