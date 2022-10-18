<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>
            Hello Nuxt! {{ $vuetify.theme.dark }}
          </v-card-title>
          <v-card-text>
            <v-btn color="red">Click Me</v-btn>
            <v-btn color="error" @click="$vuetify.theme.dark = false">Click Me</v-btn>
            <div @click="$vuetify.theme.dark = false">Q</div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$vuetify.theme.dark = false
  }
}
</script>
