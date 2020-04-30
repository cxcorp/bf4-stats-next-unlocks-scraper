import weaponStats from "./weapon-stats";

type WeaponAccessory = typeof weaponStats["data"]["selectedWeaponAccessory"]["C12E6868-FC08-4E25-8AD0-1C51201EA69B"];

export const WeaponAccessory = {
  weaponCode: (acc: WeaponAccessory) => acc.weaponAddonUnlock.weaponCode,
  unlockId: (acc: WeaponAccessory) => acc.weaponAddonUnlock.unlockId,
  unlockProgress: (acc: WeaponAccessory) => {
    const { actualValue, valueNeeded } = acc.weaponAddonUnlock.unlockedBy;
    return { actualValue, valueNeeded };
  },
};
