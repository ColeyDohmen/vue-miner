<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div id="back" class="back container-fluid">
      <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"> -->
      <!-- <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue Miner</span>
    </h1> -->.
      <h1 class="text-light">
        Moon Miner
      </h1>
      <div class="row">
        <h4 class=" align-items-center justify-content-center text-light float-left">
          Total Moon Dust:<div id="moonDust"></div>
        </h4>
        <div class="col-12">
          <h4 class=" align-items-center justify-content-center text-light float-left">
            Upgrades:
          </h4>
          <button class="btn btn-primary btn-sm mt-3 mb-3 mx-2" onclick="buyUpgrade('shovel')">
            Shovel(modx1)
          </button>
          <button class="btn btn-primary btn-sm  mt-3 mb-3 mx-2" onclick="buyUpgrade('pickaxe')">
            Pickaxe(modx2)
          </button>
          <button class="btn btn-primary btn-sm  mt-3 mb-3 mx-2" onclick="buyUpgrade('laser')">
            Laser(modx4)
          </button>
          <button class="btn btn-primary btn-sm  mt-3 mb-3 mx-2" onclick="buyUpgrade('rover')">
            Rover(modx8)
          </button>
        </div>
      </div>
      <Moon />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }

}
 .back {
    background-image: url('https://d.wattpad.com/story_parts/676761663/images/15856e540cd2e8bd234625630146.gif');
      background-attachment: fixed;
  background-size: cover;
    }

</style>
