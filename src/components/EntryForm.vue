<template>
  <form @submit.prevent="submit">
    <md-field>
      <label>Title</label>
      <md-input v-validate="'required'" v-model="title" data-vv-name="title" required/>
    </md-field>
    <md-field>
      <label>Description</label>
      <md-textarea v-model="description"/>
    </md-field>
    <md-button class="md-raised md-primary" type="submit">
      Add new Entry
    </md-button>
  </form  >
</template>

<script>
export default {
  data() {
    return {
      title: null,
      description: null,
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const formData = { title: this.title, description: this.description };
          this.$http.post('http://localhost:5000/event', formData, { emulateJSON: true })
            .then((response) => {
              vm.$forceUpdate();
            }, (response) => {
              alert(response.status);
            });
        }
      });
    },
  },
};
</script>

<style>
</style>
