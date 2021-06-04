import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  totalMoonDust: 0,
  clickUpgrades: [
    {
      id: 'shovel',
      price: 10,
      quantity: 0,
      multiplier: 1
    },
    {
      id: 'pickaxe',
      price: 50,
      quantity: 0,
      multiplier: 2
    },
    {
      id: 'laser',
      price: 150,
      quantity: 0,
      multiplier: 4
    },
    {
      id: 'rover',
      price: 200,
      quantity: 0,
      multiplier: 8
    }
  ]
})
