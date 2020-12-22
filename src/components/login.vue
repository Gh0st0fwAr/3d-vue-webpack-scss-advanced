<template>
   <div class="form">
      <div class="form__bg"></div>
      <div class="form__wrapper">
         <div class="form__header--auth">
            <div class="form__title">Login</div>
         </div>
         <div class="form__cell">
            <div class="form__subtitle">Username</div>
            <input v-model.lazy="$v.username.$model" :class="{'form__input--error' : $v.username.$error}" class="form__input" type="text" placeholder="Test">
            <div v-if="!$v.username.required" class="form__error">Required field</div>
         </div>
         <div class="form__cell">
            <div class="form__subtitle">Password</div>
            <input  v-model.lazy="$v.password.$model" class="form__input" :class="{'form__input--error' : $v.password.$error}" type="password" placeholder="Password">
            <div v-if="!$v.password.required" class="form__error">Required field</div>
         </div>
         <button @click="submitForm()" type="submit" class="form__button">Submit</button>
         <div v-if="submitStatus !== ''" class="form__error">{{submitStatus}}</div>
         <!-- <div v-if="successStatus !== ''" class="form__success">{{successStatus}}</div> -->
      </div>
   </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import axios from 'axios';

export default {
   data() {
      return {
         username: '',
         password: '',
         submitStatus: '',

      }
   }, 
   validations: {
      username: {
         required
      },
      password: {
         required
      },
   },
   methods: {
      submitForm() {
         var vm = this;
         vm.$v.$touch();
         if (vm.$v.$invalid) {
            vm.submitStatus = 'Please, fill out the form correctly'
         } else {
            const url = window.location.host;
            vm.axios.post(vm.axios.defaults.baseURL + '/api/auth/signin', {
               "username": vm.username.toUpperCase(),
               "password": vm.password.toUpperCase()
            }).then(r => {
               vm.submitStatus = '';
               localStorage.setItem('token', r.data.accessToken);
               // localStorage.getItem('token')
               vm.axios.defaults.headers.common['Authorization'] = `Bearer ${r.data.accessToken}`
               vm.$router.push('/main');
               
            }).catch(err => {
               console.log(err)
               if (typeof(err.response.data) !== 'undefined') {
                  vm.submitStatus = err.response.data.message;
                  localStorage.setItem('token', '')
               }
            })
         }
      },
   }
}
</script>