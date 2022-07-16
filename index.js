const fs = require("fs");
const express = require("express");
const app = express();
const { spawn } = require("node:child_process");
const path = require("path");

app.listen(3000, () => console.log("listening at port 3000"));
app.use(express.static("frontend"));
app.use(express.static("public"));
app.use(express.json());

app.post("/", (request, response) => {
  // console.log(request.body);
  const language = request.body.language;
  if (language === "python") {
    var body = request.body.code;
    const input = request.body.input;
    fs.writeFile("code.py", body, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });

    const command = spawn("python3", ["code.py"]);
    command.stdin.write(input);
    command.stdin.end();
    command.stdout.on("data", (output) => {
      console.log("Output: ", output.toString());
      response.json({
        status: "success",
        output: output.toString(),
      });
    });
    return;
  } else if (language === "c++") {
    var body = request.body.code;
    fs.writeFile("code.cpp", body, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
    const { exec } = require("child_process");
    const { ppid } = require("process");
    exec("g++ code.cpp", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        response.json({
          status: "success",
          output: error.message,
        });
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        response.json({
          status: "success",
          output: stderr,
        });
        return;
      }
      const run = spawn("a.exe");
      const input = request.body.input;
      run.stdin.write(input);
      run.stdin.end();
      run.stdout.on("data", (output) => {
        console.log("Output: ", output.toString());
        response.json({
          status: "success",
          output: output.toString(),
        });
      });
    });
  }
});
