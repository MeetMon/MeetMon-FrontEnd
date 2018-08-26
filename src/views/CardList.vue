<template>
  <div>
    <api-request :resource="req" v-model="res">
      <morphing-button/>
      <api-request :resource="timer_req" v-model="timer_response">
        <br>
        <div v-if="timer_response">
          <vue-countdown v-on:time-expire="reload" :seconds="timer_response.data.time" class="countdown"/>
        </div>
      </api-request>
      <div v-if="res" style="position:absolute; margin-top:50px; ">
        <div v-if="res.data.length == 0">
          There is nothing to show here
        </div>
        <card
          v-for="res in res.data"
          v-bind:key="res._id"
          v-bind:title="res.title"
          v-bind:image="res.image"
          v-bind:description="res.timestamp"
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
      return this.$http.get('http://localhost:5000/event');
    },
    timer_req(){
      return this.$http.get('http://localhost:5000/explode');
    },
    reload(){
      window.location.reload(true);
    }
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
