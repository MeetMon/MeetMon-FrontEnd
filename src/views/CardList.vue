<template>
  <api-request :resource="req" v-model="res">
    <div v-if="res">
      <card
        v-for="res in res.body"
        v-bind:key="res._id.$oid"
        v-bind:title="res.title"
        v-bind:description="res.description"
      />
    </div>
  </api-request>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      res: null,
    };
  },
  methods: {
    req() {
      return this.$http.get('http://bd5ad73d.ngrok.io/event');
    },
  },

};
</script>

<style>

</style>
