<template>
  <div>
    <vue-headful
            title="yeet"
            description="yeet - stalkerspace reborn"
    />
    <api-request :resource="req" v-model="res">
      <morphing-button/>
      <api-request :resource="timer_req" v-model="timer_response">
        <br>
        <div v-if="timer_response">
          <vue-countdown v-on:time-expire="reload" :seconds="timer_response.data.time" class="countdown"/>
        </div>
      </api-request>
        <div v-if="res" style="margin-top:50px; ">
          <card
            v-for="res in res.data"
            v-bind:key="res._id"
            v-bind:title="res.title"
            v-bind:image="res.image"
            v-bind:description="res.timestamp"
            v-bind:id="res._id"
            v-bind:upvote="res.upvotes"
            v-bind:downvote="res.downvotes"
          />
        </div>
    </api-request>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import MorphingButton from '@/components/MorphingButton.vue';
import VueCountdown from '@dmaksimovic/vue-countdown';

export default {
  components: {
    Card,
    MorphingButton,
    VueCountdown,
  },
  data() {
    return {
      res: null,
      timer_response: null,
    };
  },
  methods: {
    req() {
      return this.$http.get('http://198.199.68.6/event');
    },
    timer_req() {
      return this.$http.get('http://198.199.68.6/explode');
    },
    reload() {
      window.location.reload(true);
    },
  },

};
</script>

<style>
card{
  padding: 40% 40%;
}
.countdown{
  font-style: oblique;
  font-weight: bolder;
  font-size: 40px;
}
</style>
