<template>
  <nav>
    <img :src="require('../assets/logo/Shopping-list-logo.gif')" alt="gif" />
  </nav>
</template>

<style scoped>
nav {
  height: 150px;
  width: 100%;
  display: flex;
  align-content: center;
  background: white;
}

img {
  width: 100%;
  max-width: 450px;
  height: 100%;
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  image-rendering: -webkit-optimize-contrast;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
}
</style>
