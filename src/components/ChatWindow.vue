<template>
  <v-container id="chat-window">
    <v-row>
      <h1>Chat {{name}}</h1>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ChatWindow",
  props: ["name"],
  data() {
    return {};
  }
};
</script>
