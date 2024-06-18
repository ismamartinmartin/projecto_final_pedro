var modal = document.querySelector(".modal");

var openModal = document.querySelector('.openModal')

var span = document.getElementsByClassName("modal__header--close")[0];

var iconHeader = document.querySelector('.openModal__icon')

var boxes = document.querySelector('.boxes__style--container')

openModal.onclick = function() {
  modal.style.display = "block";
  iconHeader.removeAttribute('stroke')
}

span.onclick = function() {
  modal.style.display = "none";
  iconHeader.setAttribute("stroke", "white");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

boxes

