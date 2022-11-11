function moreWork() {
  console.log("more work...");
}

// Non-blocking
const fs = require("fs");
fs.readFile("index.js", (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
