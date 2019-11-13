<template>
  <header
    class="page-header"
    :class="{
      'page-header--auth': !isAuthorized,
    }"
  > <div class="header-container">   
      <Logo />
      <Menu v-if="isAuthorized" />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Header/Logo';
import Menu from '@/components/Header/Menu';

export default {
  name: 'Header',
  components: {
    Logo,
    Menu,
  },
  computed: {    
    isAuthorized: function(){      
      return this.$store.getters.hasToken      
    }       
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.page-header {
  background-color: $main-color;    
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2); 
  &--auth {
    .header-container{
      justify-content: center; 
    }
  }
}
.header-container{
  min-width: $mobile;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  min-height: 56px;
}
</style>
