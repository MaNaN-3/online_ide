const fs = require("fs");
const express = require("express");
const app = express();

// var body = 'print("Hello My name is Manan")';
// fs.writeFile("code.py", body, function (err) {
//   if (err) throw err;
//   console.log("File is created successfully.");
// });
// const { exec } = require("child_process");
// const { ppid } = require("process");

// exec("python3 code.py", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
app.listen(3000, () => console.log("listening at port 3000"));
app.use(express.static("frontend"));
app.use(express.json());

app.post("/", (request, response) => {
  // console.log(request.body);
  const language = request.body.language;
  if (language === "python") {
    var body = request.body.code;
    fs.writeFile("code.py", body, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
    const { exec } = require("child_process");
    const { ppid } = require("process");
    exec("python3 code.py", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  }
  // console.log(language);
});
