<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title><v-btn flat to="/">{{title}}</v-btn></v-toolbar-title>
      <v-toolbar-title><v-btn flat to="/mylist">My Guides</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        v-if="!$root.isLoggedIn"
        @click.stop="showLogin = true"
      >Login</v-btn>
      <v-btn
        v-else
        @click.stop="logout"
      >{{$root.loggedInUser.name}}</v-btn>

      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content class="content">
      <router-view/>
    </v-content>
    <!-- <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>

    <!-- Login Dialog -->
    <v-dialog
      v-model="showLogin"
    >
      <login-panel />
    </v-dialog>
  </v-app>
</template>

<script>
import firebaseHelper from '@/firebase'
import LoginPanel from '@/components/credential/LoginPanel'

export default {
  components: { LoginPanel },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Sdorica Guide',

      showLogin: false
    }
  },
  name: 'App',
  methods: {
    logout: firebaseHelper.logout
  }
}
</script>

<style scoped>
.content {
  margin-left: 8px;
}
</style>
