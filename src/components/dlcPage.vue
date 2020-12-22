<template>
   <div class="dlc">
      <div class="dlc__title">DLC & MODS</div>
      <div class="dlc__list">

         <div class="dlc__row">
            <div class="dlc__header">
               <div class="dlc__subtitle">Name of DLC/Mod</div>
               <img src="../images/download.svg" class="dlc__img">
            </div>
            <div @click="openCut()" class="dlc__prev">
               <div><img class="dlc__sign" src="../images/dlcarrow.svg"></div>
               <div class="dlc__text">Lorem, ipsum dolor.</div>
            </div>
            <div class="dlc__desc">
               <div class="dlc__fulltext">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsum esse. Assumenda dicta eveniet error dolores, tenetur eos, amet esse ullam sequi minima nulla consectetur, sunt soluta totam atque beatae.
               </div>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
export default {
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
   }
}
</script>