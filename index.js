const fs = require("fs");
const express = require("express");

var body = "print(1)";
fs.writeFile("code.py", body, function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
const { exec } = require("child_process");

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
