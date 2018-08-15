<template>
  <api-request :resource="req" v-model="res">
    <div v-if="res">
      <morphing-button />
      <card
        v-for="res in res.body"
        v-bind:key="res._id"
        v-bind:title="res.title"
        v-bind:description="res.timestamp"
      />
    </div>
  </api-request>
</template>

<script>
import MorphingButton from '@/components/MorphingButton.vue';
import Card from '@/components/Card.vue';

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
