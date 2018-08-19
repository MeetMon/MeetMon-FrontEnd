<template>
  <api-request :resource="req" v-model="res">
    <morphing-button/>
    <div v-if="res">
      <card
        v-for="res in res.data"
        v-bind:key="res._id"
        v-bind:title="res.title"
        v-bind:description="res.timestamp"
      />
    </div>
  </api-request>
</template>

<script>
import Card from '@/components/Card.vue';
import MorphingButton from '@/components/MorphingButton.vue';

export default {
  components: {
    Card,
    MorphingButton,
  },
  data() {
    return {
      res: null,
    };
  },
  methods: {
    req() {
      return this.$http.get('http://localhost:5000/event');
    },
  },

};
</script>

<style>
card{
  padding: 40% 40%;
}
</style>
