<template lang="pug">
.modalcontent
  .inner
    .contents
      h1.title Hi, I'm Modal Content 1!
        
      button.btn-close(@click='closeModal' ref='closebtn') close
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ModalContent1',
  methods: {
    ...mapActions(['clearModal']),
    closeModal() {
      this.clearModal()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';

.modalcontent {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000, $alpha: 0.8);

  .inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  .contents {
    width: 320px;
    margin: 0 auto;
    padding: 80px 0;
  }
  .title {
    color: #fff;
    font-size: 25px;
    margin-bottom: 50px;
  }
  .btn-close {
    @include button-component(#003e8f);
  }
}
</style>
