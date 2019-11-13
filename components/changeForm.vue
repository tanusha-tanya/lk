<template> 
    <div>
        <form action="#" class="change__form" @submit.prevent="changeForm()" v-if="formName == 'inn'">
            <div class="input-item__input-wrapper">
                <label
                for="oldpassword"
                    class="input-item__label input-item__label--reqired"
                    >
                    Старый пароль
                </label>
                <input
                    class="input-item__input"
                    id="oldpassword"       
                    type="password"                    
                />
                <div class="form-error">
                    Заполните поле
                </div>        
            </div>  
        </form>
        <form action="#" class="change__form" @submit.prevent="changeForm()" v-else>
            <a class="cancel" href="#" @click.prevent="cancel" v-if="cancelLnk">Отменить</a>
            <div class="input-item__input-wrapper">
                <label
                for="oldpassword"
                    class="input-item__label input-item__label--reqired"
                    >
                    Старый пароль
                </label>
                <input
                    class="input-item__input"
                    id="oldpassword"       
                    type="password"
                    v-model.trim="oldpassword"
                    :class="{invalid: ($v.oldpassword.$dirty && !$v.oldpassword.required) ||
                        ($v.oldpassword.$dirty && !$v.oldpassword.minLength) }" 
                />
                <div class="form-error" v-if="$v.oldpassword.$dirty && !$v.oldpassword.required">
                    Заполните поле
                    </div>        
        </div>  
        <div class="input-item__input-wrapper"> 
            <label
                for="password"
                    class="input-item__label input-item__label--reqired"
                    >
                    Пароль 
                </label>  
                <input
                    class="input-item__input"
                    id="password"                     
                    type="password" 
                    v-model.trim="password"                   
                />
                <div class="form-error" v-if="$v.password.$dirty && !$v.password.minLength">
                    Слишком короткий пароль
                </div>        
                <div class="form-error" v-if="$v.password.$dirty && !$v.password.required">
                    Заполните поле
                </div> 
            </div> 
            <div class="description"> Введите 8 символов, минимум одну заглавная букву или цифру</div>
            <div class="input-item__input-wrapper">  
                <label
                for="password"
                    class="input-item__label input-item__label--reqired"
                    >
                    Повторите пароль 
                </label>   
                <input
                    class="input-item__input"
                    id="repeatpassword"          
                    type="password" 
                    v-model.trim="repeatpassword"                 
                />
            </div> 
            <div class="change__submit-wrapper">
                <Button :text="'Изменить пароль'" class="change__submit"/>
        </div>       
        </form>
        <transition name="bounce">
            <Myalert v-if="success"
                    :title="'Пароль изменён'"
                    :content="`<p>Ваш пароль успешно изменён<p/>`"                    
                    @close="closeAlert"          
            >            
            </Myalert>
        </transition>     
    </div>    
</template>

<script>    
    import Button from '@/components/Button';
    import {required, minLength} from 'vuelidate/lib/validators';
    import Myalert from '@/components/Myalert';

    export default {
    name: 'chaneForm',
    props:['cancelLnk', 'formName'],
    data(){
        return{
            password:'',
            repeatpassword: '',
            oldpassword: 'vsdsvddsv',
            success: false,            
        }
    },
    validations:{
        password:{required,  minLength},
        oldpassword:{required, minLength},
    },
    components: {       
        Button,
        Myalert
    },
    methods: {
        cancel(){
            this.$emit('cancel', false)
        },
        changeForm(){
            if(this.$v.$invalid){
                this.$v.$touch()            
                return
            }
            this.success = true
        },
        closeAlert(){
           this.success = false 
           this.cancel()
        }
    },
}
</script>
<style lang="scss">
    @import '@/styles/variables.scss';
    .description{
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.004em;
    }
    .change{
        &__submit{
            width: 100%;    
            max-width: 277px;
            position: relative;
            margin: 0 auto;
            display: block;
            letter-spacing: 0.004em;
            font-size: 12px;
            line-height: 16px;
            text-transform: none;
            @media(min-width:$tablet){
                max-width: 168px;
                margin-left: 192px;
            }
        }
        &__form{
            @media(min-width: $tablet){
                width: 100%;
                position: relative;
                .input-item{
                    display: flex;
                    &__header{
                        width: 192px;
                    }
                    &__input{
                        width: 280px;
                    }
                }
                background: #FAFAFA;
                padding: 12px 16px 32px 16px;
            }
        }                  
    }
    .cancel{
        display: none;
        @media(min-width:$tablet){
            position: absolute;
            top: 20px;
            right: 16px;
            color: #5461DC;
            font-size: 12px;
            line-height: 16px;
            display: block;
            z-index: 300;
        }        
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
  @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
</style>