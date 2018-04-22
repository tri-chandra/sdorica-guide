<template>
<div>
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item to="/">Guides</v-breadcrumbs-item>
    <v-breadcrumbs-item>{{id}}</v-breadcrumbs-item>
  </v-breadcrumbs>
</div>
</template>

<script>
export default {
  props: ['id']
}
</script>
