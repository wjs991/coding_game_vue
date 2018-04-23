<template>
  <div :class="$style.sidebar">
    <div role="tablist" id="table">
   
    
   <div class="btn" v-b-toggle.test1>
     ssss
   </div>
   <b-collapse id="test1" visible test="my-test" role="tabpanel">
        
          <div id="child" class="btn">test</div>
          <div id="child" class="btn">test1</div>
          <a href="#"><div id="child">test a</div></a>
        
  </b-collapse>
   
  </div>
  </div>
</template>

<script>
  import {TweenMax, Power4} from 'gsap'

  export default {
    name: 'sidebar',
    mounted () {
      TweenMax.set(this.$el, {
        x: -this.$el.offsetWidth
      })
    },
    computed: {
      open () {
        return this.$store.state.ui.sidebarOpen
      }
    },
    watch: {
      open: function (open) {
        const dX = open ? 0 : -this.$el.offsetWidth
        TweenMax.to(this.$el, 0.6, {
          x: dX,
          ease: Power4.easeOut
        })
      }
    }
  }
  //http://paletton.com/#uid=53k0j0kp2oTdGzrjBrZsbjBz+dV
</script>

<style module>
  .sidebar{
    position: fixed;
    left: 0px;
    top: 55px;
    width: 170px;
    height: 100vh;
    max-width: 90vw;
    background-color: var(--Lapis-blue-none);
  }
</style>

<style scoped>
 #mb-1{
   background-color:var(--Lapis-blue);
   margin:0;
   width: 100%;
 }
 .btn{
   background-color: var(--Lapis-blue-none);
   margin:0;
   width: 100%;
   outline:none;
   border:0;
   height: 3em;

 }
 .btn:active{
   background-color:var(--Lapis-blue);
 }
 .btn:hover{
   background-color:var(--Lapis-blue);
 }
 #child{
   background-color: var(--Lapis-blue-none);
   margin:0;
   width: 100%;
 }
 #child:hover{
   background-color: var(--Lapis-blue);
 }
 #accordion1{
   background-color: var(--Lapis-blue);
 }
 a>#child{
   height: 3em;
   color: white;
 }
</style>

