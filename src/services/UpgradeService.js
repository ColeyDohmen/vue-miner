import { AppState } from '../AppState'

class UpgradeService {
  buyUpgrade(upgrade) {
    const upgradeKey = AppState.clickUpgrades.findIndex(up => up.id === upgrade.id)
    if (AppState.totalMoonDust >= upgrade.price) {
      AppState.totalMoonDust -= upgrade.price
      AppState.clickUpgrades[upgradeKey].quantity++
      AppState.clickUpgrades[upgradeKey].price *= 2
    }
  }
}

export const upgradeService = new UpgradeService()
