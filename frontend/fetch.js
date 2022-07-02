const send = document.getElementById("sendData");
const languageSelector = document.getElementById("lang-select");
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
  fetch("/", options);
  document.getElementById("code").value = "";
}
send.addEventListener("click", sendHTTPresponse);
