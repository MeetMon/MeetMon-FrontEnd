<template>
  <md-card md-with-hover class="card">
    <img :src="image">
    <md-card-header>
      <h1 class="md-title">{{title}}</h1>
    </md-card-header>
    <md-card-content>
      <h2 class="md-subhead">{{description}}</h2>
    </md-card-content>
    <VueEmoji @input="onInput" :value="myText" width="100px" height="50px" />

  </md-card>
</template>

<script>
import VueEmoji from 'emoji-vue';

export default {
  methods: {
    onInput(event) {
            //event.data contains the value of the textarea
        },
      },
  components: {
           VueEmoji
         },
  name: 'card',
  props: ['image', 'title', 'description'],
};

</script>

<style>
.card{
  margin:20px;
  width: 300px;
  display: inline-block;
}
</style>
