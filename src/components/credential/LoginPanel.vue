<template>
  <div
    id="firebaseui-auth-container"
  >Login</div>
</template>

<script>
import firebaseHelper from '@/firebase'

export default {
  name: 'LoginPanel',
  mounted() {
    firebaseHelper.renderLoginUI('firebaseui-auth-container')
  }
}
</script>
