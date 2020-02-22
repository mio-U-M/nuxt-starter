<template lang="pug">
  .container
    div
      Logo
      h1.title nuxt-startar
      h2.subtitl Nuxt.js startar for web project
      .links
        a(href="https://nuxtjs.org/" target="_blank").button--green Documentation
        a(href="https://github.com/nuxt/nuxt.js" target="_blank").button--grey GitHub
      .modal
       button(@click='openModal').button--blue Open Modal
    Modal
</template>

<script>
import { mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Logo,
    Modal
  },
  methods: {
    ...mapActions(['updateModal']),
    openModal() {
      this.updateModal('ModalContent1')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button--green {
  @include button-component(#3b8070);
}

.button--grey {
  @include button-component(#35495e);
  margin-left: 25px;
}

.modal {
  padding-top: 25px;
}

.button--blue {
  @include form-style-reset;
  @include button-component(#005c91);
}
</style>
