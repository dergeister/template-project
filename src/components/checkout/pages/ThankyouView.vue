<template>
  <DefaultLayout>
    <main class="thankyou">
      <ThankyouHeader />
    </main>
  </DefaultLayout>
</template>
<script>
import ThankyouHeader from '@checkout/organisms/ThankyouHeader.vue'
import DefaultLayout from '@common/templates/layouts/DefaultLayout.vue'
export default {
  components: {
    DefaultLayout,
    ThankyouHeader
  }
}
</script>
<style lang="scss"></style>
