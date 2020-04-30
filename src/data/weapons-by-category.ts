import weaponStats from "./weapon-stats";

const weaponCategories = {
  wG: "Grenades",
  waPDW: "PDWs",
  wD: "DMRs",
  wC: "Carbines",
  wA: "Assault Rifles",
  wL: "LMGs",
  wH: "Handguns",
  wSR: "Sniper Rifles",
  wSPk: "Knives",
  waS: "Shotguns",
  wX: "Gadgets",
};

type WeaponCategory = typeof weaponStats["data"]["weaponsByCategory"]["waPDW"][0];

export const WeaponCategory = {
  categoryName: (id: string): string | undefined => weaponCategories[id],
  slug: (cat: WeaponCategory) => cat.weaponUnlock.slug,
  guid: (cat: WeaponCategory) => cat.weaponUnlock.guid,
};
