<template>
   <div class="post">
      <!-- :style="{background: `url(${backgroundUrl})`}" -->
      <div class="post__bg"></div>
      <div class="post__body">
         <img :src="bg" class="post__img">
         <div class="post__title">{{post.title}}</div>
         <div class="post__desc">{{post.content}}</div>
      </div>
      <div class="post__comments">
         <div class="comments__header">
            <img src="../images/diamond.svg" class="comments__logo">
            <div class="comments__title">Comments</div>
         </div>
         <div v-for="item in comments" class="comments__comment">
            <div class="comments__owner">
               <img src="../images/avatar.png" class="comments__img">
               <div class="comments__user">{{item.author.username}}</div>
            </div>
            <div class="comments__desc">{{item.content}}</div>
            <!-- <div class="comments__like">
               <img class="comments__likebtn" src="../images/heart.png" alt="">
            </div> -->
         </div>
      </div>
      <div class="comments__form">
         <textarea v-model="commentText" class="comments__textarea" placeholder="Comment text"></textarea>
         <button @click="postComment()" class="comments__button">Submit</button>
      </div>
   </div>
</template>


<script>
   import bg from '../images/twoplanets.png'

   export default {
      data() {
         return {
            bg,
            post: '',
            comments: '',
            commentText: '',
            postId: ''
         }
      },
      computed: {
         backgroundUrl() {
            let id = this.$route.path.split('=')[1]
            let url = window.location.href;
            return bg
         }
      },
      methods: {
         postComment() {
            var vm = this;
            if (vm.commentText != '') {
               vm.axios.post(`${vm.axios.defaults.baseURL}/api/posts/${vm.postId}/comments`, {
                  content: vm.commentText,
               }).then(r => {
                  vm.getComments();
               })
            }
         },
         getComments() {
            var vm = this;
            vm.axios.get(`${vm.axios.defaults.baseURL}/api/posts/${vm.postId}/comments`).then(r => {
               vm.comments = r.data.content;
            })
         }
      },
      mounted() {
         var bg = document.querySelector('.post__bg');
         bg.setAttribute('style',
            `background: url(${this.backgroundUrl}); background-size: cover; background-position-y: -220px`)
      },
      created() {
         var vm = this;
         var url = this.$route.path;
         var id = url.split('=')[1];
         vm.postId = id;
         vm.axios.get(vm.axios.defaults.baseURL + '/api/posts/' + id).then(r => {
            vm.post = r.data;
         }).catch(err => {
            console.log(err.response.data.message)
         })
         vm.getComments();
      }
   }
</script>