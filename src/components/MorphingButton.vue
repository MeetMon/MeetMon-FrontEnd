<template>
  <div class = "center">
  <div class="add-product " :class="{'open': formOpen}">
    <div class="button-copy" v-show="!formOpen" @click="formOpen = true">
            <img src="../assets/officiallogo.png">
    </div>
    <div v-show="formOpen" class="form">
      <entry-form/>
      <div class="cancel"><span @click="cancel()">Cancel</span></div>
    </div>
  </div>
</div>
</template>

<script>
import EntryForm from '@/components/EntryForm.vue';

export default {
  name: 'MorphingButton',
  components: {
    EntryForm,
  },
  data() {
    return {
      formOpen: false,
    };
  },
  methods: {
    cancel() {
      this.formOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  &.open {
    background-color: #FAFAFA;
    padding: 18px 32px;
    border-radius: 5px;
    width: 300px;
    height: 600px;
    cursor: default;
    form {
      opacity: 1;
      transition: opacity 0.1s ease;
      transition-delay: 0.3s;
      height: auto;
    }
  }
  transition: all 0.3s ease;
  background-color: #FFC145;
  height: 144px;
  width: 144px;
  border-radius: 72px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .07);
  cursor: pointer;
  .button-copy {
    text-align: center;
    line-height: 144px;
    text-transform: uppercase;
    font-weight: bold;
    color: #f7f7f7;
  }
  form {
    transition: none;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .cancel {
    font-size: 12px;
    text-align: center;
    margin-top: 1em;
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.submit-button {
  display: block;
  background-color: #3498DB;
  height: 40px;
  border-radius: 20px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.875em;
  border: none;
  font-weight: 700;
  padding: 0 34px;
  margin: 0 auto;
  img {
    position: relative;
    top: 3px;
    right: 6px;
  }
  &:hover {
    background-color: darken(#3498DB, 10%);
    cursor: pointer;
  }
}

.center {
  line-height: 1.5;
     display: inline-block;
     vertical-align: middle;
}

</style>
