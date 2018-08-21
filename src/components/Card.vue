<template>
  <md-card md-with-hover class="card">
    <img :src="image">
    <md-card-header>
      <h1 class="md-title">{{title}}</h1>
    </md-card-header>
    <md-card-content>
      <h2 class="md-subhead">{{description}}</h2>
    </md-card-content>
    <vue-star animate="animated bounceIn" color="#F05654">
      <img slot="icon" src="../assets/like.png" />

    </vue-star>
    <span style="text-align:justify">DABBIE : </span>
    <vue-star animate="animated bounceIn" color="#2d41d8" style="right: 0px">
      <img slot="icon" src="../assets/dislike.png" />
    </vue-star>
    <span > WUT? : </span>
  </md-card>
</template>

<script>

import VueStar from 'vue-star'


export default {
  methods: {
    onInput(event) {
            //event.data contains the value of the textarea
        },
        handleClick () {
     //do something
   },
      },
  components: {
           VueStar
         },
  name: 'card',
  props: ['image', 'title', 'description'],
};

</script>

<style>
.card{
  margin:60px;
  width: 300px;
  display: inline-block;
}
</style>
