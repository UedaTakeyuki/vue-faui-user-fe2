<template>
  <div class="purchaseSucceeded">
    <p
      class="headline text-center ma-5"
    >
    Thank you for your purchase!
    </p>
    <v-row justify="center">
    <router-link justifiy-content-center :to="'/payments'">Purchase history</router-link>
    </v-row>
<!--    <p>session id: {{$route.params.sessionID}}</p> -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      stripe: "",
      session: "",
    }
  },
}
</script>