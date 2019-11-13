<template>
  <nuxt-link class="logo" to="/">
    <img
      src="@/assets/img/logo.svg"
      alt="Логотип"
      class="logo__img logo__img--big"
    />
    <img
      src="@/assets/img/logo_small.svg"
      alt="Логотип"
      class="logo__img logo__img--small"
    />
  </nuxt-link >
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.logo {  
 min-width: 55px;
 display: flex;
 align-content: center;
 justify-content: center;
 box-sizing: border-box; 
 @media(min-width:$tablet){
  min-width: 186px;
 }
}
.logo__img {
    &--big {
      display: none;
      @media (min-width: $tablet) {
        display: block;
      }
    }
    &--small {
      display: block;
      @media (min-width: $tablet) {
        display: none;
      }
    }
  }

.page-header--auth {
    .logo__img {
      display: block;
      &--small {
        display: none;
      }
    }
}
</style>
