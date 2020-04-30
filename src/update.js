const nodeFetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const { bf4UserId } = require("./config");

module.exports = async (bf4UserId, dataDir, dataFilePath) => {
  const url = `https://battlelog.battlefield.com/bf4/warsawWeaponsPopulateStats/${bf4UserId}/1/unlocks/`;
  const res = await nodeFetch(url);
  const data = await res.json();

  if (fs.existsSync(dataFilePath)) {
    fs.renameSync(
      dataFilePath,
      path.join(
        dataDir,
        // replace : with - because windows doesn't allow : in name
        `data-old-${new Date().toISOString().replace(/:/g, "-")}.json`
      )
    );
  }

  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), {
    encoding: "utf8",
  });
};
