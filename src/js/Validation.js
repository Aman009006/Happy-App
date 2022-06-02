export const renderValidator = () => {
  const form = document.querySelector(".js-form");
  const inputEmail = document.querySelector(".js-input-email");
  const inputName = document.querySelector(".js-input-name");
  const radio = document.querySelectorAll('input[type="radio"]');
  const check = document.querySelectorAll('input[type="checkbox"]');
  const emailError = document.getElementById("span__email");
  const nameError = document.getElementById("span__name");

  function validateEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateInput(input, span) {
    if (input.value.length < 3) {
      if (input.value == 0) {
        span.textContent = "this field is reqiured*";
        document.getElementById("modal-content").style.height = "860px";
        return;
      }
      span.textContent = "should be more then 3 symbols";
      document.getElementById("modal-content").style.height = "860px";
    } else {
      span.textContent = "";
      document.getElementById("modal-content").style.height = "815px";
    }
  }

  form.onsubmit = async function (e) {
    await e.preventDefault();
    let activeRadio;
    let activeCheck = [];
    let modal = document.getElementById("myModal");

    validateInput(inputEmail, emailError);
    validateInput(inputName, nameError);

    if (!validateEmail(inputEmail.value)) {
      document.getElementById("span__email").textContent = "email not valid";
      return false;
    } else {
      document.getElementById("span__email").textContent = "";
    }

    for (var i = 0; i < radio.length; i++) {
      radio[i].checked === true
        ? (activeRadio = radio[i].nextElementSibling.textContent)
        : null;
    }

    for (var i = 0; i < check.length; i++) {
      check[i].checked === true ? activeCheck.push(check[i].id) : null;
    }
    const getDataConsoleLog = {
      name: inputEmail.value,
      email: inputName.value,
      tarif: activeRadio,
      social: activeCheck,
    };

    function closeModal() {
      modal.style.display = "none";
      document.querySelector(".js-input-email").value = "";
      document.querySelector(".js-input-name").value = "";
      document.getElementById("modal_time").style.display = "none";
      document.getElementById("modal-content").style.height = "815px";
      console.log(inputEmail.value);
      console.log(getDataConsoleLog);
    }
    if (
      activeRadio !== null &&
      activeCheck.length > 0 &&
      inputEmail.value.length > 3 &&
      inputName.value.length > 3
    ) {
      document.getElementById("modal_time").style.display = "flex";
      document.getElementById("modal-content").style.height = "860px";
      setTimeout(closeModal, 3000);
    }
  };
};
