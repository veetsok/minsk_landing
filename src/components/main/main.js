document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("modal__close");
  const modalBg = document.getElementById("modal__bg");

  openModalBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  modalBg.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
});
