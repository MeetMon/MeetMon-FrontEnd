<template>
  <div class="card">
    <img :src="image">
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['image', 'title', 'description'],
};
</script>

<style>

</style>
