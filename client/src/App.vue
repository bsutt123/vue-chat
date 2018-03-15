<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="postcss">

@import url('https://fonts.googleapis.com/css?family=Exo+2:200|Josefin+Sans:300');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: responsive;
}

#app {
  font-family: 'Exo 2', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  font-family: "Josefine Sans", Helvetica, Arial, sans-serif;
}
</style>
