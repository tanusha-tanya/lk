<template>
  <div class="registration">
    <RegistrationNav />

    <form action="#" class="registration__form" @submit.prevent="submitHandler">
      <div class="input-item__input-wrapper">
        <label
          for="organization_inn"
            class="input-item__label input-item__label--reqired"
          >
          ИНН организации
        </label>  
        <input
          class="input-item__input"
          id="organization_inn"          
          v-model.trim="itn"          
          type="text"
          :class="{invalid: ($v.itn.$dirty && !$v.itn.required)}"
          v-mask="'##########'" 
        /> 
        <div class="form-error" v-if="$v.itn.$dirty && !$v.itn.required">
          Заполните поле
        </div>                
      </div>
      <div class="input-item__input-wrapper">
        <label
          for="organization_name"
          class="input-item__label input-item__label--reqired"
        >
          Название организации
        </label>
      <input
        class="input-item__input"
        id="organization_name"        
        v-model.trim="company_name"
        type="text" 
        :class="{invalid: ($v.company_name.$dirty && !$v.company_name.required)}"      
      />
      <div class="form-error" v-if="$v.company_name.$dirty && !$v.company_name.required">
          Заполните поле
        </div>
      </div>
      <div class="input-item__input-wrapper">
        <label
          for="email"
              class="input-item__label input-item__label--reqired"
            >
             E-mail
        </label>
      <input
        class="input-item__input"
        id="email"       
        type="text"
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required)||
                  ($v.email.$dirty && !$v.email.email)}" 
      />
      <div class="form-error" v-if="$v.email.$dirty && !$v.email.required">
          Заполните поле
        </div> 
        <div class="form-error" v-if="$v.email.$dirty && !$v.email.email">
          Введите корректное значение
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
        label="Пароль"        
        type="password"
        v-model.trim="password"
        :class="{invalid: ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength) }" 
      />
      <div class="form-error" v-if="$v.password.$dirty && !$v.password.required">
         Заполните поле
        </div>
      <div class="form-error" v-if="$v.password.$dirty && !$v.password.minLength">
        Слишком короткий пароль
        </div>
      </div>                    
      <div class="input-item__input-wrapper">
        <label
          for="name"
              class="input-item__label input-item__label--reqired"
            >
            ФИО контактного лица
        </label>
      <input
        class="input-item__input"
        id="name"
        v-model.trim="name"     
        type="text"
        :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
      />
      <div class="form-error" v-if="$v.name.$dirty && !$v.name.required">
         Заполните поле
      </div>
      </div>
      <div class="input-item__input-wrapper">
        <label
          for="phone"
              class="input-item__label"
            >
            Телефон
        </label>
      <input
        class="input-item__input"
        id="phone" 
        v-model.trim="phone"       
        type="tex"
        v-mask="'+#(###) #######'"
      />
      </div>
       <div class="input-item__input-wrapper">
        <label
          for="website"
              class="input-item__label"
            >
            Веб-сайт
        </label>
      <input
        class="input-item__input"
        id="website"       
        type="text"
        v-model.trim="website"          
      />
      </div>
      <div class="input-item__input-wrapper">
        <label
          for="email"
              class="input-item__label"
            >
             Местоположение офиса
        </label>
      <input
        class="input-item__input"
        id="address"       
        type="text"
        v-model.trim="address"
      />
    </div>  
    <div class="input-item__input-wrapper">
        <label
          for="city"
              class="input-item__label"
            >
            Город
        </label>
      <div class="city-autocompleet">
        <input
          class="input-item__input"
          id="city"       
          type="text"
          v-model.trim="city"
          @input="autocomplete()"
        />
        <input type="hidden" v-model="city_id">
      </div>
    </div>      
      <div class="registration__submit-wrapper">
        <Button :text="'Зарегистрироваться'" class="registration__submit" />
      </div>
    </form>
    <transition name="bounce">
      <Myalert v-if="success"
          :title="'ПОЗДРАВЛЯЕМ'"
          :content="`<p>Вы зарегистрированы на портале Katren_sa. Ваш логин:</p> <a href='mailto:${email}'>${email}</a>`"
          @close="closeAlert"            
        >            
      </Myalert>
    </transition>    
  </div>
</template>

<script>
import RegistrationNav from '@/components/RegistrationNav';
import InputItem from '@/components/Form/InputItem';
import Button from '@/components/Button';
import Myalert from '@/components/Myalert';
import {required, email, minLength} from 'vuelidate/lib/validators';
import {mask} from 'vue-the-mask'

export default {
  name: 'RegistrationPage',
  components: {
    RegistrationNav,
    InputItem,
    Button,
    Myalert
  },
  /*async fetch({store}) {
    if (store.getters['cities/cities'].length === 0) {
      await store.dispatch('cities/fetch')
    }
  },
  computed: {
    cities() {
      return this.$store.getters['cities/cities']
    }
  },
  mounted(){
    //console.log(this.cities)
  },*/
  data(){
    return{
      success: false,     
      itn: null,
      company_name: null,
      email: null,
      password: null,  
      name: null,  
      phone: null,
      website: null, 
      address: null, 
      city: null,   
      city_id: null,        
    }
  },
  validations:{
    itn:{required},
    company_name:{required},
    email:{required, email},
    password:{required, minLength: minLength(7)},
    name:{required},
  },
  methods:{    
    submitHandler(){
      if(this.$v.$invalid){
        this.$v.$touch()            
        return
      }
      const sendData = {
        "email": this.email,
        "name": this.name,
        "password": this.password,
        "password_confirmation": this.password,
        "itn": this.itn,
        "company_name": this.company_name,
        "accountable_full_name": this.name,
        "phone": this.phone,
        "website": this.website,
        "office_address": this.address,
        "city_id": this.city_id
      }  
      console.log(sendData);     
      this.$axios.post('http://192.168.2.137:8080/api/auth/signup', sendData).then(function (response) {
        signin(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      let signin = (data) =>{
        console.log(data)
        /*if(data.status == 200){           
          let token = JSON.parse(data.request.response).data.access_token;
          this.$store.dispatch('login', token)
          this.$router.push('/') 
        }*/
      }  
      //return this.success = true
    }, 
    closeAlert(){
      this.$router.push('/login')
    },
    autocomplete(){
      console.log(this.cities)  
     /* this.$axios.get('http://192.168.2.137:8080/api/cities').then(function (response) {
        let array = JSON.parse(response.request.response).data;
        JSON.parse(response.request.response).data.forEach(string =>{
          if(string.name.indexOf(this.city) != -1)
          console.log(string.name) 
        }) 
        
        for(this.city)
        console.log(JSON.parse(response.request.response).data.indexOf());
      })*/
    }       
  }
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.registration {
  margin: 48px auto;
  width: calc(100% - 16px);
  max-height: calc(100% - 96px);
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: auto;

  @media (min-width: $tablet) {
    margin: 80px auto;
    max-height: calc(100% - 160px);
    width: 560px;
  }
}
.registration__form {
  padding: 16px 16px 32px;

  @media (min-width: $tablet) {
    padding: 16px 96px 32px;
  }
}
.registration__submit-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
.registration__submit {
  min-width: 206px;
}
.input-item__input-wrapper {
  position: relative;
  margin: 15px 0;
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
.input-item__input {
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  background: #fafafa;
  border: 2px solid $border-color;
  border-radius: 4px;
  padding: 13px;
  transition: border-color .3s;

  &--password {
    padding-right: 40px;
  }
  &.invalid{
    border-color: red;
  }
  &:focus {
    outline: none;
    background-color: #ffffff;
  }
}

.opacity-enter-active {
  animation: opacity-in .3s;
}
  .opacity-leave-active {
    animation: opacity-in .3s reverse;
  }
  @keyframes opacity-in {
      0% {
        transform: translateX(-20px);
        opacity: 0;
      }
      50% {
        transform: translateX(-10px);
        opacity: 0.3;
      }
      100% {
        transform: translateX(0);
         opacity: 1;
      }
    }
  .form-error{
    font-size: 12px;
    position: absolute;
    bottom: -15px;
    color: red;
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
