import { WeaponCategory } from "./data/weapons-by-category";
import { WeaponAccessory } from "./data/selected-weapon-accessory";

export const getNextUnlocks = (weaponStats: any) => {
  const weaponsByGuid = (Object.entries(weaponStats.data.weaponsByCategory)
    .filter(([id]) => id !== "wG" && id !== "wSPk" && id !== "wX")
    .map(([id, categories]) =>
      (categories as any[]).map((cat) => ({
        slug: WeaponCategory.slug(cat as any),
        guid: WeaponCategory.guid(cat as any),
        category: WeaponCategory.categoryName(id),
      }))
    ) as any)
    .flat()
    .reduce((acc, val) => {
      acc[val.guid] = val;
      return acc;
    }, {});

  const unlockProgresses = Object.entries(
    weaponStats.data.selectedWeaponAccessory
  )
    .filter(
      ([_, accessories]) =>
        (accessories as any).weaponAddonUnlock.unlockedBy.valueNeeded !== null
    )
    .map(([guid, accessory]) => {
      const unlockProgress = WeaponAccessory.unlockProgress(accessory as any);
      return {
        weapon: weaponsByGuid[guid],
        unlockId: WeaponAccessory.unlockId(accessory as any),
        unlockProgress: unlockProgress,
        killsNeeded: unlockProgress.valueNeeded - unlockProgress.actualValue,
      };
    })
    .filter((obj: any) => !!obj.weapon)
    .sort((a, b) => a.killsNeeded - b.killsNeeded);

  return unlockProgresses;
};
