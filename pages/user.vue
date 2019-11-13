<template>
    <div class="user">
        <div class="container">
            <h1>Управление аккаунтом</h1>            
            <div class="user-block">
                <div class="block-heder">
                    <div class="block-title">Общая информация</div>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">ИНН организации</div>
                        <div class="block-content">0000 0000 00</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeinfo/inn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <a class="block-edit block-edit--big" href="" data-name="inn" @click.prevent="edit.inn=true">Изменить</a>                                                            
                    </div>                   
                    <transition name="down">
                        <ChangeForm v-if="edit.inn" @cancel="onCancel" formName="inn" :cancelLnk="true"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Название организации</div>
                        <div class="block-content">ООО «Система автоматизации»</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeName"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <a class="block-edit block-edit--big" href=""  data-name="name" @click.prevent="edit.name=true">Изменить</a>
                    </div>
                    <transition name="down">
                        <ChangeForm v-if="edit.name" @cancel="onCancel" :formName="password" :cancelLnk="true"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Email</div>
                        <div class="block-content">Job_name@gmail.com</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big"  data-name="email" @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.email"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Логин</div>
                        <div class="block-content">User_name</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="login" @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm  v-if="edit.login"/>
                     </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Пароль</div>
                        <div class="block-content">Обновлён 23.04.2017</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="password" @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.password"/>
                    </transition>
                </div>
            </div>
            <div class="user-block">
                <div class="block-heder">
                     <div class="block-title">Контактные данные</div>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">ИНН организации</div>
                        <div class="block-content">0000 0000 00</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="inn2" @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.inn2"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Название организации</div>
                        <div class="block-content">ООО «Система автоматизации»</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="name2"  @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.name2"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Email</div>
                        <div class="block-content">Job_name@gmail.com</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="email2"  @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.email2"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Логин</div>
                        <div class="block-content">User_name</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="login2" @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.login2"/>
                    </transition>
                </div>
                <div class="block-wrap">
                    <div class="block-item">
                        <div class="block-name">Пароль</div>
                        <div class="block-content">Обновлён 23.04.2017</div>
                        <nuxt-link class="block-edit block-edit--small" to="changeInn"><img src="@/assets/img/edit.svg" alt="account" /></nuxt-link>
                        <div class="block-edit block-edit--big" data-name="password2"  @click="editField($event)">Изменить</div>
                    </div>
                    <transition name="bounce">
                        <ChangeForm v-if="edit.password2"/>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChangeForm from '@/components/changeForm';


export default {
    name: 'User',
    middleware: ['auth'],
    components:{
        ChangeForm
    },     
    methods:{
        editField: ($event)=>{
            $event
        },       
        onCancel(data) {
            this.edit.inn = data;
        }
    },
    data(){
        return {
            userInfo: [],
            edit:{
                inn: false,
                name: false,
                email: false,
                login: false,
                password: false,
                inn2: false,
                name2: false,
                email2:false,
                login2:false,
                password2:false
            }            
        }        
    },
    async mounted(){
        //this.userInfo = await this.$axios.$get('~/user.json')        
    }
  }
</script>
<style lang="scss">
    @import '@/styles/variables.scss';
    .user{
        @media(min-width:$desktop){
            margin: 0 auto;
            max-width: 83%;
        }
    }
    .user-block{
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        background: #FFFFFF;
        margin: 8px 0 16px 0;
        @media(min-width:$tablet){
            margin: 15px 0;
            max-width: 744px;
        }        
    }
    .block{
        &-heder{
            padding: 12px 16px;            
            background: #FAFAFA;
            border-bottom: 1px solid #F5F5F5;
        }
        &-title{
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            font-family: 'Roboto', sans-serif; 
            margin-top: 6px;
            @media(min-width:$tablet){
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.0015em;
            }
        }        
        &-item{
            padding: 14px 0;
            margin: 0 16px;
            border-bottom:1px solid #F2F2F2;
            font-size: 12px;
            letter-spacing: 0.004em;
            position: relative;
            padding-right: 30px;
            @media(min-width:$tablet){
                display: flex;
                font-size: 14px;
                padding: 22px 0;
            }
        }
        &-name{
            color: #6F6F6F;
            @media(min-width:$tablet){
                width: 25%;
                margin-right: 16px;
            }
        }
        &-content{
            color: #1E1F23;
            margin-top: 7px;
            @media(min-width:$tablet){
                width: calc(75% - 12%);
                margin-top: 0px;
            }
        }
        &-edit{
            &--small{
                width: 24px;
                height: 24px;           
                position: absolute;
                right: 0;
                top: 24px; 
                @media(min-width:$tablet){
                    display: none
                }
            }
            &--big{
               display: none;
               @media(min-width:$tablet){
                    display: block;
                    font-size: 12px;
                    letter-spacing: 0.004em;
                    color: #5461DC;
                    background: none;   
                    right: 0;
                    position: absolute;                 
                }
            }
        }        
    }
    .down-enter-active {
    animation: down-in .3s;
    }
    .bounce-leave-active {
        animation: down-in .3s reverse;
    }
    @keyframes down-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
</style>