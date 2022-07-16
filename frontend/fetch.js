const send = document.getElementById("sendData");
const languageSelector = document.getElementById("lang-select");
const output = document.getElementById("output");
const splitLines = (str) => str.split(/\r?\n/).split(" ");
function sendHTTPresponse() {
  const code = document.getElementById("code").value;
  // const input = splitLines(document.getElementById("input").value);
  const input = document.getElementById("input").value;
  var language = languageSelector.options[languageSelector.selectedIndex].value;
  const data = { code, language, input };
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
  // document.getElementById("code").value = "";
}
send.addEventListener("click", sendHTTPresponse);
