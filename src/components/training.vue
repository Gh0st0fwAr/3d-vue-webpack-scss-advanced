<template>
   <div v-show="sosi == 'string'"
      v-if="sosi == 'string'"
      :prop="sosi"
      @click="pisos()"
    class="train">
      
   </div>
</template>

<script>

import file from '../images/gachi.png'

export default {
   data() {
      return {
         sosi: 'string',
         file,
         pisos: false,
         input: ''
      }
   },
   watch: {
      pisos() {
         if (this.pisos == true) {
            this.sosi = 'sosu'
         } else {
            this.sosi = 'sam sosi'
         }
      }
   },
   components: {
      // 'somecomponent': () => import('../path')
   },
   name: 'Train',
   methods: {
      someFunc() {

      }
   },
   computed: {

   },
   props: {

   },
   beforeCreate() {

   },
   created() {

   },
   beforeMount() {

   },
   mounted() {

   },
   beforeUpdate() {

   },
   updated() {

   },
   beforeDestroy() {

   },
   destroyed() {

   }
}

























// Методология БЭМ
// class - родительская сущность
// class__child - дочерняя сущность через "__"
// class__child--modifier - модификаторы класса, служат для работы
// со скриптами или для каких-то особых стилей example - button--disabled 

</script>




























<style lang="scss">

.train {
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   padding: 40px;
}

.train__box {
   border: 2px solid black;
   padding: 20px;
   min-width: 700px;
   min-height: 500px;
   display: flex;
   // flex-direction: row;
   // flex-direction: row-reverse;
   // flex-direction: column;
   flex-direction: row;

   & .train__node--unique { // Эквивалентно записи ".train__box .train__node--unique"
      background: yellow;
   }
}

.train__node {
   background-color: dodgerblue;
   width: 80px;
   height: 40px;
   margin-left: 10px;
   // margin-bottom: 10px;

   //:last_child
   //:first-child
   // & + .class

   &:last-child {
      // margin-left: unset;
      // margin-bottom: 10px;
      // margin-bottom: unset;
   }
   
   &:first-child {
      
      margin-left: unset;
      // margin-bottom: unset;
   }

   
}
// .train__node:first-child { Заменяется амперсандом
//    margin-left: unset;
// }

// padding, margin, border-color
// padding: 10px 5px 10px;
// 
//       10px 1
//  20px      5px 2
//   4  10px 3
// padding: 10px 5px;
// 
// 

</style>

