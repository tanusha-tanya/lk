<template>
    <div id="change"> 
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
                <ChangeForm/>
            </div>            
        </div>
    </div>          
</template>
<script>
    import ChangeForm from '@/components/changeForm';
    
    export default {
        //middleware: ['auth'],    
        name: 'chaneinn',
        components: {        
            ChangeForm
        },       
    }
</script>
<style lang="scss">
    @import '@/styles/variables.scss';
    .change{
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
       
</style>