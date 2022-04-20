

<template>
  <div class="page center">
    <h1>H5开发模板</h1>
  </div>
</template>

<script setup>

</script>

<style lang="less">
html, body {
  width: 100%;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 32px;
}
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
* {
  padding: 0;
  margin: 0;
  // -webkit-user-select: none;
  user-select: none;
}
.block-image {
  display: block;
  width: 100%;
}

.head {
  display: block;
  width: auto;
  height: 100vh;
  // object-fit: cover;
}

.gap {
  height: 10px;
  width: 100%;
}

.full-screen-image {
  display: block;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  box-sizing: border-box;
}


.flt-stack {
  position: relative;

  &-item {
    position: absolute;
    z-index: 3;
  }
}

.logo {
  width: 450px;
  left: 40px;
  top: 40px;
}

.slogan {
  writing-mode: vertical-lr;
  color: #fff;
  font-size: 80px;
  z-index: 2;
}
.slogan-1 {
  top: 25%;
  left: 250px;
}
.slogan-2 {
  top: 30%;
  left: 350px;
}

.h {
  position: relative;
  text-align: left;
  display: inline-block;
  font-size: 36px;
  font-weight: bold;
  margin: 25px 0;
  box-sizing: border-box;
  // &:before {
  //   content: '';
  //   position: absolute;
  //   width: 10px;
  //   height: 100%;
  //   background-color: blue;
  //   left: 30px;
  // }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: blue;
    left: 0px;
    bottom: 0;
    opacity: 0.6;
  }

}
.content {
  padding: 0 30px;
}

.profile {
  font-size: 18px;
  text-align: justify;
  line-height: 2em;
  text-indent: 2em;
}
</style>
