const scriptURL = 'https://script.google.com/macros/s/AKfycbyQXiDywkLYTepoVpddN3n0D9rJaQ0fLSVdNnAFUWKHI9a8Bbl_M8lkdqy1Hc0uEqAqMg/exec'
const form = document.forms['amaz_form'];
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
