var link = document.querySelector(".intersted-main-btn");
var modal = document.querySelector(".modal-form-booking")

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-hide");
})
