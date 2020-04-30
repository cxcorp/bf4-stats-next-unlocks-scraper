import * as fs from "fs";
import * as path from "path";
import { EOL } from "os";
import { getNextUnlocks } from "./top";
import * as update from "./update";
import * as config from "./config";

const DATA_DIR = path.join(__dirname, "../data");
const DATA_FILE_PATH = path.join(__dirname, "../data/data.json");

const start = async (amountToShop: number) => {
  console.log("Updating...");
  await update(config.bf4UserId, DATA_DIR, DATA_FILE_PATH);
  console.log("Done! Mangling data...");
  console.log();

  const data = await fs.promises.readFile(DATA_FILE_PATH, "utf-8");
  const weaponStats = JSON.parse(data);

  const nextUnlocks = getNextUnlocks(weaponStats);

  const stringfied = nextUnlocks
    .slice(0, amountToShop)
    .map(
      ({ weapon: { slug, category }, killsNeeded, unlockProgress: p }) =>
        `${killsNeeded} - ${slug.toUpperCase()}, ${category} (${
          p.actualValue
        }/${p.valueNeeded})`
    );

  console.log("Kills needed - Weapon, Category (Current kills, needed kills)");
  console.log();
  console.log(stringfied.join(EOL));
};

const count = parseInt(process.argv[2]);
const defaultCount = 10;

start(isNaN(count) ? defaultCount : count)
  .then(() => {})
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
