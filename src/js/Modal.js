export const renderModal = () => {
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal')
  const btns = document.querySelectorAll(".open__modal");
  const inputRadio = document.querySelectorAll('input[type="radio"]');

  btns.forEach((btn) => btn.onclick = () => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"
      inputRadio.forEach(input  => {
          if (btn.dataset.btn == input.id) {
              input.checked = true
              }
      })
      
  })
  function closeModalBtn(){
    modal.style.display = "none";
    document.body.style.overflow = "scroll"

  }
  closeModal.addEventListener('click',closeModalBtn )

  window.onclick = function (event) {
      if (event.target == modal) {
        closeModalBtn()
    }
  }
};