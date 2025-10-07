// Handle tab switching
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event){
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwXJwzvCqGqZ4eNLk3qjH9wAm91sulLl1aUJb00q79jI3gKWkEv7tRVWOBjaiARcNYa/exec';
  const form = document.forms['submit-to-google-sheet'];
  const submitMessage = document.getElementById("submitMessage");

  form.addEventListener('submit', e => {
      e.preventDefault();
      submitMessage.textContent = "Submitting...";
      submitMessage.style.color = "#1e90ff";

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            submitMessage.textContent = "Submitted!";
            submitMessage.style.color = "#1e90ff";
            form.reset();
            setTimeout(() => submitMessage.textContent = "", 3000);
        })
        .catch(error => {
            submitMessage.textContent = "Error submitting form.";
            submitMessage.style.color = "red";
            console.error('Error!', error.message);
        });
  });
});