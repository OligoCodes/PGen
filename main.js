const generatePassword = () => {
  let inputValue = parseInt(document.getElementById("char").value);
  fetch(`https://password-generator-v2.p.rapidapi.com/api/password-generator?length=${inputValue}`, {
      method: "GET",
      headers: { 'x-rapidapi-host': 'password-generator-v2.p.rapidapi.com', 'x-rapidapi-key': 'da949b45e5mshd847ffdf187b908p16f82fjsn301400523fe1' }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById("pass").textContent = `${data["generated-password"]}`;
    })
    .catch(error => {
      console.error(error)
    })
};