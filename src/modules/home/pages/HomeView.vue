<template>
  <EmailModal />
  <DefaultLayout>
    <main class="home">
      <HomeHeader />
      <SubscriptionTypeCards />
    </main>
  </DefaultLayout>
</template>
<script>
  import DefaultLayout from '@common/components/templates/layouts/DefaultLayout.vue'
  import HomeHeader from '@home/components/organisms/HomeHeader.vue'
  import SubscriptionTypeCards from '@home/components/organisms/SubscriptionTypeCards.vue'
  import EmailModal from '@home/components/organisms/EmailModal.vue'

  import EventEnum from '@enums/EventEnum'

  export default {
    components: { DefaultLayout, HomeHeader, SubscriptionTypeCards, EmailModal },
    data() {
      return {
        loadEmailModal: false
      }
    },
    methods: {
      registerEvents() {
        this.emitter.on(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
      },
      forgetEvents() {
        this.emitter.off(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
      },
      handleFetchUserSuccess() {
        this.$router.push({
          name: 'checkout'
        })
      }
    },
    mounted() {
      this.registerEvents()
    },
    beforeUnmount() {
      this.forgetEvents()
    }
  }
</script>
<style lang="scss"></style>
