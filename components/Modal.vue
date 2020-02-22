<template lang="pug">
  transition(name="fade")
    .modal(v-if="modal")
      .inner
        component(:is="modal")
</template>

<script>
import { mapState } from 'vuex'
import ModalContent1 from '~/components/modalContent/ModalContent1'

export default {
  name: 'Modal',
  components: {
    ModalContent1
  },
  computed: {
    ...mapState(['modal'])
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';
.inner {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: index($zindex, modal);
  -webkit-overflow-scrolling: touch;
}
</style>
