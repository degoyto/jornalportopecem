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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
