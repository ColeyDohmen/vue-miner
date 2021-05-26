<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div id="back" class="back">
      <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"> -->
      <!-- <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue Miner</span>
    </h1> -->
      <h1 class="text-light">
        Moon Miner
      </h1>
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
    background-size: cover;
    }
  // .back {
  //   background-image: url('https://image.freepik.com/free-vector/background-circuit-board-neon_23-2148351172.jpg');
  //   }
</style>
