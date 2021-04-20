<template>
  <div class="bg-white mx-96 mt-2 bg-opacity-50 bg-clip-padding rounded-xl">
  <div id="nav">
    <div class="bg-gray-300 mx-64 my-2 bg-opacity-50 rounded-lg text-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/fav">Fav</router-link> |
    <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view/><br>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4c96f8;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #5472fa;
}
</style>
