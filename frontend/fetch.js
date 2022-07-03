const send = document.getElementById("sendData");
const languageSelector = document.getElementById("lang-select");
const output = document.getElementById("output");
function sendHTTPresponse() {
  var code = document.getElementById("code").value;
  var language = languageSelector.options[languageSelector.selectedIndex].value;
  const data = { code, language };
  //   console.log(data);
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("/", options)
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML = data.output;
    });
  document.getElementById("code").value = "";
}
send.addEventListener("click", sendHTTPresponse);
