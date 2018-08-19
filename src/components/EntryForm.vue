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
          const formData = new FormData();
          formData.append('title', this.title);
          formData.append('description', this.description);
        }
      });
    },
  },
};
</script>

<style>
</style>
