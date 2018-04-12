<template>
  <v-list-tile @click.stop="$emit('click')">
    <v-list-tile-content>
      <v-list-tile-title>
        {{value.title}}
        <v-avatar :size="24">
          <img src="/static/avatar/pang_ssr.png" />
        </v-avatar>
        <v-avatar :size="24">
          <img src="/static/avatar/naya_ssr.png" />
        </v-avatar>
        <v-avatar :size="24">
          <img src="/static/avatar/angelia_ssr.png" />
        </v-avatar>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        {{value.description}}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'GuideListItem',
  props: {
    value: Object
  }
}
</script>
