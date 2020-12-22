<template>
   <div class="post">
      <!-- :style="{background: `url(${backgroundUrl})`}" -->
      <div class="post__bg"></div>
      <div class="post__body">
         <img :src="bg" class="post__img">
         <div class="post__title">Lorem ipsum dolor sit amet.</div>
         <div class="post__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic et, animi ea nobis iste rerum illo sed dolor fuga deleniti fugit assumenda quo iusto similique sapiente perferendis suscipit esse doloremque. Voluptas veniam aut, quaerat incidunt cupiditate illum, pariatur nostrum id libero itaque corporis eligendi voluptates nisi sapiente nesciunt eveniet aliquid illo. Nulla, illum non autem sint vel alias accusantium nobis, corrupti molestias similique explicabo officia nam error, nihil doloribus perspiciatis eaque nostrum inventore excepturi sit minus! Maxime vero voluptatem voluptatibus nemo, molestias iusto ad ullam odio! Illo quidem laborum quae inventore rem officia, accusantium debitis sunt ipsa nihil quis incidunt commodi obcaecati itaque ullam. Itaque mollitia expedita ea reprehenderit dicta voluptatibus quasi ipsum maxime libero a, cupiditate dolorem ipsa veniam possimus beatae, inventore vero deserunt esse provident qui quia ad, porro nisi. Ducimus provident, asperiores ex aliquid fugiat mollitia similique laborum, alias ipsam praesentium soluta nostrum magni. Fugiat labore consequuntur optio explicabo, odio tempore recusandae nostrum exercitationem blanditiis perspiciatis sapiente sint cum debitis? Necessitatibus magni delectus aliquam? Doloremque id facere ea, facilis corrupti officia recusandae. Voluptas asperiores necessitatibus dicta excepturi fugiat doloribus perspiciatis cupiditate, veniam nostrum temporibus deleniti magnam eius in praesentium perferendis eligendi ipsa fugit voluptatem inventore? Exercitationem omnis corporis cupiditate voluptates, ipsum quae veniam aliquam unde nemo labore, totam est vel corrupti suscipit quis nostrum assumenda non itaque? Nam perferendis eius enim rem deleniti quidem fuga consequuntur. Architecto sint aliquam odit corrupti eaque minus ipsum alias adipisci sed sapiente sunt modi ea neque blanditiis eius fugit omnis explicabo, ad aut a optio, rerum provident molestias? Ipsam, debitis aliquam hic doloremque assumenda quas eos saepe ut quibusdam illum accusamus, beatae perspiciatis magni nam similique nulla possimus cupiditate, eveniet sit ratione! Veniam ipsa, doloribus voluptatem recusandae ab voluptates. Architecto explicabo minima delectus, itaque nobis adipisci iusto exercitationem tenetur non suscipit atque ex totam rerum? Quam, est quaerat, sit quod eligendi saepe pariatur mollitia ullam fugiat vero repudiandae sapiente deleniti rem dicta aspernatur delectus. Saepe enim in nostrum quis doloribus magni sed aspernatur praesentium a vitae! Natus excepturi odit ipsa exercitationem, dolores ut consectetur id blanditiis ex consequatur porro molestiae suscipit ratione beatae hic quae expedita recusandae pariatur nulla animi fuga. Quos blanditiis vero incidunt sint numquam maiores dolore atque dolores reiciendis et ipsum libero ipsam non asperiores distinctio magni ut provident similique impedit, perferendis necessitatibus! Omnis iure numquam voluptates nostrum eos cumque, officia laboriosam magnam harum ipsum magni illum ad unde libero deserunt dolore, pariatur quam odio hic fugit neque enim suscipit exercitationem. Sit, ipsam? Doloribus iure amet ipsum laborum laboriosam nisi dolore quasi, sit rem laudantium eligendi consequatur natus minima esse. Maxime dicta praesentium voluptate aliquid impedit quis modi, assumenda ipsum maiores non est deleniti eaque error possimus officia expedita autem aut rem vel! Voluptates rerum eius veniam ex suscipit magnam omnis reiciendis sunt dolores architecto. Voluptatibus id corrupti aliquam suscipit, ullam voluptatum nobis dolore minus dolor sequi vel iure eligendi molestias quis distinctio inventore ut laudantium nam perspiciatis hic? Molestiae, saepe. Veniam nesciunt minima eum doloribus pariatur.</div>
      </div>
      <div class="post__comments">
         <div class="comments__header">
            <img src="../images/diamond.svg" class="comments__logo">
            <div class="comments__title">Comments</div>
            </div>
         <div class="comments__comment">
            <div class="comments__owner">
               <img src="../images/avatar.png" class="comments__img">
               <div class="comments__user">username</div>
            </div>
            <div class="comments__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cum debitis voluptate nobis earum sit necessitatibus fuga! Harum, perspiciatis deserunt?</div>
            <div class="comments__like">
               <img class="comments__likebtn" src="../images/heart.png" alt="">
            </div>
         </div>
      </div>
      <div class="comments__form">
         <textarea class="comments__textarea" placeholder="Comment text"></textarea>
         <button class="comments__button">Submit</button>
      </div>
   </div>
</template>


<script>

import bg from '../images/twoplanets.png'

export default {
   data() {
      return {
         bg
      }
   },
   computed: {
      backgroundUrl() {
         let id = this.$route.path.split('=')[1]
         let url = window.location.href;
         return bg
         // return bg
      }
   },
   mounted() {
      var bg = document.querySelector('.post__bg');
      bg.setAttribute('style', `background: url(${this.backgroundUrl}); background-size: cover; background-position-y: -220px`)
   }
}
</script>