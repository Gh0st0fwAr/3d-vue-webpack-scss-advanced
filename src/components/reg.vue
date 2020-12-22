<template>
   <div class="form">
      <div class="form__bg"></div>
      <div class="form__wrapper">
         <div class="form__header--auth">
            <div class="form__title">Sign Up</div>
         </div>
         <div class="form__cell">
            <div class="form__subtitle">Username</div>
            <input v-model.lazy="$v.username.$model" :class="{'form__input--error' : $v.username.$error}" class="form__input" type="text" placeholder="Test">
            <div v-if="!$v.username.required" class="form__error">Required field</div>
         </div>
         <div class="form__cell">
            <div class="form__subtitle">E-mail</div>
            <input v-model.lazy="$v.mail.$model" class="form__input" :class="{'form__input--error' : $v.mail.$error}" placeholder="sample@sample.com">
            <div v-if="!$v.mail.required" class="form__error">Required field</div>
            <div v-if="!$v.mail.email" class="form__error">Enter correct email</div>
         </div>
         <div class="form__cell">
            <div class="form__subtitle">Password (at least 6 characters)</div>
            <input  v-model.lazy="$v.password.$model" class="form__input" :class="{'form__input--error' : $v.password.$error}" type="password" placeholder="Password">
            <div v-if="!$v.password.required" class="form__error">Required field</div>
            <div v-if="!$v.password.minLength" class="form__error">Password should contain at least 6 characters</div>
         </div>
         <div class="form__cell">
            <div class="form__subtitle">Repeat password</div>
            <input  v-model.lazy="$v.repeatPassword.$model" :class="{'form__input--error' : $v.repeatPassword.$error}" class="form__input" type="password" placeholder="Password">
            <div v-if="!$v.repeatPassword.sameAsPassword" class="form__error">Passwords should match</div>
         </div>
         <button @click="submitForm()" type="submit" class="form__button">Submit</button>
         <div v-if="submitStatus !== ''" class="form__error form__error--submit">{{submitStatus}}</div>
         <div v-if="successStatus !== ''" class="form__success">{{successStatus}}</div>
      </div>
   </div>
</template>

<script>
import {required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
   data() {
      return {
         username: '',
         mail: '',
         password: '',
         repeatPassword: '',
         successStatus: '',
         submitStatus: ''

      }
   }, 
   validations: {
      username: {
         required
      },
      mail: {
         required,
         email
      },
      password: {
         required,
         minLength: minLength(6)
      },
      repeatPassword: {
         required,
         sameAsPassword: sameAs('password')
      },
   },
   methods: {
      submitForm() {
         var vm = this;
         vm.$v.$touch();
            console.log(vm.username.toUpperCase())
            console.log(vm.mail.toUpperCase())
            console.log(vm.password.toUpperCase())
         if (vm.$v.$invalid) {
            vm.submitStatus = 'Please, fiill out the form correctly'
         } else {
            const url = window.location.host;
            vm.axios.post(vm.axios.defaults.baseURL + '/api/auth/signup', {
               "username": vm.username.toUpperCase(),
               "email": vm.mail.toUpperCase(),
               "password": vm.password.toUpperCase()
            }).then(r => {
               vm.submitStatus = '';
               vm.successStatus = r.data.message;
               setTimeout(() => {
                  vm.$router.push('/login')
               }, 1000);
               
            }).catch(err => {
               vm.submitStatus = err.response.data.message;
            })
         }
      },
   }
}
</script>