<template>
  <div id="app">
    <div class="wrapper">
      <side-bar/>
    
    <Header></Header>
    </div>
    
    <div :class="$style.container">
      <img src="./assets/logo.png">
      <router-view>
      
      </router-view>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideMenu.vue'
import SideBarToggle from '@/components/SidebarToggle.vue'

export default {
  name: 'app',
  components:{
    Header:Header,
    SideBar:SideBar,
    SideBarToggle:SideBarToggle,

  },
 
 
  
  
}
</script>

<style>
:root{
    --accent-color: rgb(37,79,130);
    --side-bar-active-color:rgb(243, 207, 65);
    --primary-color: #820263;
    --dark-color: #2E294E;
    --Lapis-blue:rgb(0,75,141);
    --Lapis-blue-none: #306CA0;

  }
  
  *{
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
<style module>
  .container{
   

  }
</style>