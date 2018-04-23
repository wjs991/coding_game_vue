
<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-button class="btn btn-link btn-sm"  @click="handleClick">
      <span class="navbar-toggler-icon">           
      </span>
    </b-button>
  
  
    <b-navbar-brand href="#"> Coding Game</b-navbar-brand>

  
    
    
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

     

      <b-nav-item-dropdown text="Lang" right class="Lang">
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

 
</b-navbar>

</template>
<script>



export default {
  name:'Header',
  components:{

  },
  computed:{
    open(){
      return this.$store.state.ui.sidebarOpen
    }
  },
  methods:{
    handleClick(){
      this.$store.dispatch('toggleSidebar')
    }
  }
};
</script>

<style>
#Header{
  position: fixed;
  height: 80px;
  
}
.navbar{
  background-color:var(--Lapis-blue) !important
}
@media (min-width : 768px){
  
  .navbar-expand-md{
    flex-flow:row;
  }
}
@media (max-width:768px){
.navbar-expand-md{
    flex-flow:row;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }
  .Lang{
    visibility: hidden;
  }
}
  
</style>
