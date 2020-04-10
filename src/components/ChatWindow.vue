<template>
  <v-container id="chat-window">
    <v-row>
      <h1 class="mx-auto mb-3">Chat {{ name }}</h1>
    </v-row>
    <v-row>
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <p class="text--primary">Name</p>
          <p>Message</p>
          <p>Time</p>
        </v-card-text>
        <v-textarea
          class="mx-4"
          name="input-7-1"
          label="Enter message"
          hint="Type here"
          v-model="message"
        ></v-textarea>
        <p class="errorMsg mx-4 red--text">{{ this.error }}</p>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="addMessage"
            >Send</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import db from "../db";
export default {
  name: "ChatWindow",
  props: ["name"],
  data() {
    return {
      message: "",
      error: "",
    };
  },
  methods: {
    addMessage() {
      if (this.message) {
        db.collection("messages")
          .add({
            name,
            content: this.message,
            time: Date.now(),
          })
          .catch((err) => console.log(err));
        console.log(this.message);
        this.message = "";
        this.error = "";
      } else {
        this.error = "You must enter a message";
      }
    },
  },
};
</script>
