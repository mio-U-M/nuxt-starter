<template lang="pug">
    .error
      .page404(v-if="error.statusCode === 404")
        .error-txt
          span 404 Not Found ページが見つかりません お探しのページは、削除されたかURLが変更された可能性があります。
      .page500(v-if="error.statusCode === 500")
        .error-txt
          span 500 サーバーエラー サーバー側の一時的なエラーが発生しています。 時間をおいて再接続してください。
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';
.error {
  width: 100%;
  height: 100%;
  background: #000;
}
.page404 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page500 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
