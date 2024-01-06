<template>
  <DefaultLayout>
    <main class="checkout">
      <CheckoutWrapper />
    </main>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@common/components/templates/layouts/DefaultLayout.vue'

import CheckoutWrapper from '@checkout/components/organisms/CheckoutWrapper.vue'

import useUserStore from '@common/stores/user'
import { mapState } from 'pinia'

export default {
  components: {
    DefaultLayout,
    CheckoutWrapper
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    checkForUser() {
      if (!this.user.id) {
        this.$router.push({
          name: 'home'
        })
      }
    }
  },
  mounted() {
    this.checkForUser()
  }
}
</script>
<style lang="scss"></style>
