<template>
  <div class="Moon">
    <img
      class="img-fluid rounded-circle"
      src="../assets/img/moon6.png"
      @click="mineMoon"
    />
  </div>
</template>

<script>
import { mineService } from '../services/MineService'
export default {
  name: 'Moon',
  setup() {
    return {
      mineMoon() {
        mineService.mineMoon()
        mineService.update()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img:hover {
  cursor: pointer;
}

</style>
