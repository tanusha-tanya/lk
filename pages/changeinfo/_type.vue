<template>
    <div id="change" class="change"> 
        <div class="container">
            <div class="change-title">
                <nuxt-link class="change-back" to="/user">
                    <img src="@/assets/img/back.svg" alt="account" />
                </nuxt-link>
                <h1>Изменить пароль </h1>
            </div>            
        </div>
        <div class="grey-page">
            <div class="container">                       
                <ChangeForm :cancelLnk="false"/>
            </div>            
        </div>
    </div>          
</template>
<script>
    import ChangeForm from '@/components/changeForm';
    
    export default {
        middleware: ['auth'],    
        name: 'chaneinn',
        components: {        
            ChangeForm
        },       
    }
</script>
<style lang="scss">
    @import '@/styles/variables.scss';
    .change{
        max-width: 320px;
        position:relative;
        margin: 0 auto; 
        &-title{
            display: flex;
            align-items: center; 
            
            @media(min-width: $tablet){
                flex-wrap: wrap;
            }      
        }
        &-back{
            margin-right: 10px;
            margin-top: 21px;
        }        
    }
    .input-item {
  margin: 16px 0;
}
.input-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 5px;
}
.input-item__label {
  color: #616161;
  font-size: 12px;
  line-height: 16px;

  &--reqired {
    &::after {
      content: '*';
      color: #ff0000;
    }
  }
}
.input-item__input-wrapper {
  position: relative;
  margin: 15px 0;
}
.input-item__input {
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  background: #fafafa;
  border: 2px solid $border-color;
  border-radius: 4px;
  padding: 13px;

  &--password {
    padding-right: 40px;
  }

  &:focus {
    outline: none;
    background-color: #ffffff;
  }
}
.input-item__show-password {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #616161;

  &:focus {
    outline: none;
  }

  svg {
    display: block;
  }
}
.input-item__link {
  font-size: 12px;
  line-height: 16px;
  color: $main-color;
}
       
</style>