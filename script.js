// selected html all id
const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submitBtn");
const massage = document.getElementById("massage");

// window.onload
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwDIoput1n4cDv7Qv5Axa8iIMK1qp5GyvNN9Nx_h-9H-VFwvp0xrMrvLaQHLIM4saHKpw/exec";
  const form = document.forms["submit-to-google-sheet"];

  form.addEventListener("submit", (e) => {
    if(emailInput.value ===""){
        alert("Please type valid email!")
    }else{
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then(() => {
            massage.innerHTML = "Thank you for subscribing!";
            setTimeout(() => {
              massage.innerHTML = "";
            }, 4000);
            form.reset();
          })
          .catch(() => {
            alert("Error! Email successfully not send!");
          });
    }
  });
}
