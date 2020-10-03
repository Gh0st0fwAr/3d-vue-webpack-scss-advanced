<template>
   <div>
      <div v-for="item in 4" :key="item" :class="'home--' + item">
         Hello world 
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         somedata: '',
      }
   },
   methods: {
      getData() {
         var vm = this;
         vm.axios.get('http://localhost:8080/api/').then(r => {
            console.log(r)
         })
      }
   },
   created() {
      var vm = this;
      vm.getData();
   }
}
</script>