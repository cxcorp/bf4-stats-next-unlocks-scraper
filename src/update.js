const nodeFetch = require("node-fetch");
const path = require("path");
const fs = require("fs");

module.exports = async (bf4UserId, dataDir, dataFilePath) => {
  const url = `https://battlelog.battlefield.com/bf4/warsawWeaponsPopulateStats/${bf4UserId}/1/unlocks/`;
  const res = await nodeFetch(url);
  const data = await res.json();

  // create data dir if doesn't exist
  await fs.promises.mkdir(dataDir, { recursive: true });

  if (fs.existsSync(dataFilePath)) {
    await fs.promises.rename(
      dataFilePath,
      path.join(
        dataDir,
        // replace : with - because windows doesn't allow : in name
        `data-old-${new Date().toISOString().replace(/:/g, "-")}.json`
      )
    );
  }

  await fs.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2), {
    encoding: "utf8",
  });
};
