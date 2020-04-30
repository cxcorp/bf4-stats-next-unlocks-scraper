const nodeFetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const { bf4UserId } = require("./config");

const URL = `https://battlelog.battlefield.com/bf4/warsawWeaponsPopulateStats/${bf4UserId}/1/unlocks/`;

const DATA_DIR = path.join(__dirname, "../data");
const DATA_FILE_PATH = path.join(DATA_DIR, "data.json");

const start = async () => {
  const res = await nodeFetch(URL);
  const data = await res.json();

  if (fs.existsSync(DATA_FILE_PATH)) {
    fs.renameSync(
      DATA_FILE_PATH,
      path.join(
        DATA_DIR,
        // replace : with - because windows doesn't allow : in name
        `data-old-${new Date().toISOString().replace(/:/g, "-")}.json`
      )
    );
  }

  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), {
    encoding: "utf8",
  });
};

start()
  .then(() => console.log("Updated!"))
  .catch((e) => console.error(e));
