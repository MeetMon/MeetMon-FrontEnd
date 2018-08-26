<template>
  <md-card>
      <md-card-media>
        <img :src="image">
      </md-card-media>

      <md-card-header>
        <div class="md-title"> <h1 class="md-title">{{title}}</h1></div>

      </md-card-header>


      <vue-star animate="animated bounceIn " color="#F05654" style = "bottom:20px;left:20px;">
    <img @click="incrementyes" :class="{ disabled: isDisabled }" slot="icon" src="../assets/dab.png" />

  </vue-star>



  <vue-star  animate="animated wobble" colonor="#2d41d8" style="right: 30px;bottom:27px;">
      <img @click="incrementno" slot="icon" src="../assets/wtf.png" />
    </vue-star>

<span class="text-right" > WUT?:  <span>{{downvote}}</span> </span>
<span class="text-left"> YAS:   <span>{{upvote}}</span></span>

</md-card>
</template>

<script>

import VueStar from 'vue-star';


export default {
  methods: {
    onInput(event) {
      // event.data contains the value of the textarea
    },
    incrementyes() {
      let string = 'http://localhost:5000/vote/up/' + this.id
        this.upvote++
return this.$http.get(string);
    },
    incrementno() {
    let string = 'http://localhost:5000/vote/down/' + this.id
    this.downvote++

return this.$http.get(string);
    },
    disablebutton(){
      test:true;
    },
  },
  components: {
    VueStar,
  },
  data() {
    return {
      yes: 0,
      no: 0,


    };
  },
  name: 'card',
  props: ['image', 'title', 'description','id','upvote','downvote'],
  computed: {
    isDisabled() {
      return true;
    },
  },
};

</script>

<style>
.card{
  margin:20px;
  width: 300px;
  height:250px;
  display: inline-block;
}

.text-right{
  position: absolute;
     bottom: 0;
     right: 50px;
   }
.text-left{
  position: absolute;
     bottom: 0;
     left: 45px;
}

.md-card {
    width: 320px;
    margin: 20px;
    height:520px;
    display: inline-block;
    vertical-align: top;
  }
</style>
