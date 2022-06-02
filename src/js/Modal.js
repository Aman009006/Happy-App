export const renderModal = () => {
  var modal = document.getElementById('myModal');
  var btns = document.querySelectorAll(".open__modal");
  const inputRadio = document.querySelectorAll('input[type="radio"]');

  btns.forEach((btn) => btn.onclick = () => {
      modal.style.display = "flex";
      inputRadio.forEach(input  => {
          if (btn.dataset.btn == input.id) {
              input.checked = true
              }
      })
      
  })

  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
};