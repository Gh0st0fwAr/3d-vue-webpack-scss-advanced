<template>
   <div class="wrapper">
      <router-view></router-view>
   </div>
</template>

<script>

import axios from 'axios'
export default {
   created() {
      if (localStorage.getItem('token')) {
         this.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      }
   }
}
</script>
