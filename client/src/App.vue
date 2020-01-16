<template>
  <div id="app" >
    
    <page-header />
    <router-view/>
    <rodape/>
  </div>
</template>

<script>

import PageHeader from "@/components/Header.vue"
import rodape from "@/components/rodape"
export default {
  name: 'App',
  components: {
    PageHeader,
    rodape
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color:#f5f5f5;
}
</style>
