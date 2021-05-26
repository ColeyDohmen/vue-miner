import { AppState } from '../AppState'

class MineService {
  update() {
    document.getElementById('moonDust').innerText = AppState.totalMoonDust.toString()
  }

  mineMoon() {
    AppState.totalMoonDust++
    // for (let key in clickUpgrades){
    //     let upgrade = clickUpgrades[key]
    //     totalMoonDust+= upgrade.multiplier * upgrade.quantity
    // }
  }
}
export const mineService = new MineService()
