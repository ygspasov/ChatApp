<template>
  <v-container>
    <v-row>
      <h1 class="mx-auto">Welcome</h1>
    </v-row>
    <v-row>
      <form id="welcomeForm" class="mx-auto">
        <v-text-field v-model="name" :counter="10" label="Enter your name" required></v-text-field>
        <v-btn class="mr-4" @click="enterChat">Enter chat</v-btn>
      </form>
    </v-row>
    <v-row>
      <p v-if="nameErrors" class="mx-auto red--text mt-3">{{nameErrors}}</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MainScreen",
  data() {
    return {
      name: "",
      nameErrors: ""
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "ChatWindow", params: { name: this.name } });
      } else {
        this.nameErrors = "You must enter your name.";
      }
    }
  }
};
</script>

<style scoped>
</style>
