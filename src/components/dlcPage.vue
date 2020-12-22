<template>
   <div class="dlc">
      <div class="dlc__title">DLC & MODS</div>
      <div class="dlc__list">

         <div v-for="item in mods" class="dlc__row">
            <div class="dlc__header">
               <div class="dlc__subtitle">{{item.name}}</div>
               <img src="../images/download.svg" class="dlc__img">
            </div>
            <div @click="openCut()" class="dlc__prev">
               <div><img class="dlc__sign" src="../images/dlcarrow.svg"></div>
               <div class="dlc__text">Open spoiler</div>
            </div>
            <div class="dlc__desc">
               <div class="dlc__fulltext">
                  {{item.description}}
               </div>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         mods: [],
      }
   },
   methods: {
      openCut() {
         var target = event.target;
         var sign = target.firstChild.firstChild;
         console.log(target.nextElementSibling)
         var text = target.nextElementSibling;
         var height = text.firstChild.clientHeight;

         if(sign.classList.contains('rotated')) {
            text.style.height = '0px';
            sign.classList.remove('rotated');
         } else {
            text.style.height = height + 'px';
            sign.classList.add('rotated');
         }         

      }
   },
   created() {
      var vm = this;
      vm.axios.get(vm.axios.defaults.baseURL + '/api/mods').then(r => {
            vm.mods = r.data;
         }).catch(err => {
            console.log(err.response.data.message)
         })
   }
}
</script>