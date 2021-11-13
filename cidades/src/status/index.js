const fs = require("fs");

function getServiceStatus() {
  const file = String(fs.readFileSync("status.json"));
  return file && JSON.parse(file);
}

function serviceIsAlive() {
  const { isAlive } = getServiceStatus();
  return isAlive === "yes";
}

module.exports = {
  serviceIsAlive,
};
