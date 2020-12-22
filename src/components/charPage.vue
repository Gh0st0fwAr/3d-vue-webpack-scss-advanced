<template>
   <div class="char">
      <div v-for="(item, index) in chars" :key="index" class="char__col">
         <div class="char__box char__box--up">
            <div class="char__title">{{item.name}}</div>
            <div class="char__image"><img class="char__picture" :src="imgs[index]" alt=""></div>
            <div class="char__desc">{{item.description}}</div>
         </div>
         <div class="char__col--bg"></div>
      </div>
   </div>
</template>

<script>

import Ed from '../images/Ed.png'
import Fate from '../images/Fate.png'
import Kail from '../images/Kail.png'

export default {
   data() {
      return {
         chars: [],
         imgs: [Ed, Fate, Kail]
      }
   },
   created() {
      var vm = this;
      vm.axios.get(vm.axios.defaults.baseURL + '/api/characters').then(r => {
            vm.chars = r.data;
         }).catch(err => {
            console.log(err.response.data.message)
         })
   }
}
</script>