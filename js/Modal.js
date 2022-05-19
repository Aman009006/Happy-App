let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == modal) {
    document.body.style.overflow = "";
    modal.style.display = "none";
  }
};

function Modal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modal.style.overflow = "hidden";
}

function check() {
  let blue = document.querySelector(".b");
  let orange = document.querySelector(".o");
  let yellow = document.querySelector(".y");
  let bspan = document.getElementById("bspan");
  let ospan = document.getElementById("ospan");
  let yspan = document.getElementById("yspan");

  let bb = document.querySelector(
    '.radio__modal_pricer input[type="radio"]:checked'
  );
  if (bb.className === "modal__radio-btn pricer__input b") {
    blue.style.backgroundColor = "#0278ED";
    bspan.style.color = "white";
    orange.style.backgroundColor = "white";
    ospan.style.color = "#FF5437";
    yellow.style.backgroundColor = "white";
    yspan.style.color = "#FF9209";
  } else if (bb.className === "modal__radio-btn pricer__input o") {
    orange.style.backgroundColor = "#FF5437";
    ospan.style.color = "white";
    yellow.style.backgroundColor = "white";
    yspan.style.color = "#FF9209";
    blue.style.backgroundColor = "white";
    bspan.style.color = "#0278ED";
  } else if (bb.className === "modal__radio-btn  pricer__input y") {
    yellow.style.backgroundColor = "#FF9209";
    yspan.style.color = "white";
    blue.style.backgroundColor = "white";
    bspan.style.color = "#0278ED";
    orange.style.backgroundColor = "white";
    ospan.style.color = "#FF5437";
  }
}
function loading(){
let loadingModal = document.querySelector(".modal__send_data")
loadingModal.classList.add('visable');
}


