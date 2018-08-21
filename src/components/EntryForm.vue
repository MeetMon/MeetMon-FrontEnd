<template>
  <div >
  <form @submit.prevent="submit">
    <vue-transmit class="col-12"
                  tag="section"
                  v-bind="uploaderOptions"
                  v-bind:url="uploaderOptions.adapterOptions.url"
                  v-bind:paramName="uploaderOptions.adapterOptions.paramName"
                  upload-area-classes="bg-faded"
                  ref="uploader">
      <div class="d-flex align-items-center justify-content-center w-100"
            style="height:10vh; border-radius: 1rem; position">
        <button class="btn btn-primary"
                @click="triggerBrowse">Upload Files
        </button>
      </div>
    </vue-transmit>
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
</div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      description: null,
      filename: null,
      uploaderOptions: {
        acceptedFileTypes: ['image/*'],
        clickable: false,
        adapterOptions: {
          url: 'http://localhost:5000/upload',
          paramName: 'image',
        },
      },
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const formData = new FormData();
          formData.set('title', this.title);
          formData.set('description', this.description);
          formData.set('filename',this.$refs.uploader.files[0].name);
          this.$http.post('http://localhost:5000/event', formData).then((response) => { window.location.reload(true) });
        }
      });
    },
    triggerBrowse() {
      this.$refs.uploader.triggerBrowseFiles();
    },
  },
  filters: {
    json(value) {
      return JSON.stringify(value, null, 2);
    },
  },
};
</script>

<style>
@import '~vue-transmit/dist/vue-transmit.css';
</style>
