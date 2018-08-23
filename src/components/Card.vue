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
      <img @click="incrementyes" :class="{ disabled: isDisabled }" slot="icon" src="../assets/dab.png" />

    </vue-star>
    <vue-star animate="animated bounceIn" color="#2d41d8" style="right: 0px">
      <img @click="incrementno" slot="icon" src="../assets/wtf.png" />
    </vue-star>
  <span class="text-right" > WUT?:  <span>{{no}}</span> </span>
  <span class="text-left"> YAS:   <span>{{yes}}</span></span>

  </md-card>
</template>

<script>

import VueStar from 'vue-star'


export default {
  methods: {
    onInput(event) {
            //event.data contains the value of the textarea
        },
        incrementyes() {
        this.yes++;
      },
      incrementno() {
      this.no++;
    },

  },
  components: {
           VueStar
         },
  data(){
    return{
      yes:0,
      no:0
    }
  },
  name: 'card',
  props: ['image', 'title', 'description'],
  computed: {
    isDisabled(){
      return true;
    }
  }
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
     left: 27px;
}
</style>
