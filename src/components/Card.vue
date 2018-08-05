<template>
  <md-card md-with-hover class="card">
    <img :src="image">
    <md-card-header>
      <h1 class="md-title">{{title}}</h1>
    </md-card-header>
    <md-card-content>
      <h2 class="md-subhead">{{description}}</h2>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
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
