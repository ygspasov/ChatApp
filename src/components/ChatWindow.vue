<template>
  <v-container id="chat-window">
    <v-row>
      <h1 class="mx-auto my-5">Chat as {{ name }}</h1>
    </v-row>
    <v-row id="messages" v-chat-scroll>
      <v-card class="mx-auto" max-width="344">
        <v-card-text v-if="messages">
          <ul class="pl-0 mb-2" v-for="(msg, i) in messages" :key="i">
            <li>
              <p>
                <span class="title">{{ msg.name }}:</span>
                <span class="subtitle-1 pl-1">{{ msg.message }}</span>
              </p>
              <p class="subtitle-2">{{ msg.time }}</p>
            </li>
          </ul>
        </v-card-text>
        <v-text-field
          class="mx-4"
          name="input-7-1"
          label="Enter message"
          hint="Type here"
          v-model="message"
        ></v-text-field>
        <p class="errorMsg mx-4 red--text">{{ this.error }}</p>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="addMessage">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import db from "../db";
import moment from "moment";
export default {
  name: "ChatWindow",
  props: ["name"],
  data() {
    return {
      message: "",
      messages: [],
      error: ""
    };
  },
  methods: {
    addMessage() {
      if (this.message) {
        db.collection("messages")
          .add({
            name: this.name,
            content: this.message,
            time: moment().format("lll")
          })
          .catch(err => console.log(err));
        console.log(this.message);
        this.message = "";
        this.error = "";
      } else {
        this.error = "You must enter a message";
      }
    }
  },
  created() {
    let messages = db.collection("messages").orderBy("time");
    messages.onSnapshot(data => {
      data.docChanges().forEach(change => {
        if (change.type === "added") {
          this.messages.push({
            id: change.doc.id,
            name: change.doc.data().name,
            message: change.doc.data().content,
            time: change.doc.data().time
          });
        }
      });
    });
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
#messages {
  max-height: 600px;
  overflow: auto;
}
#chat-window {
  max-width: 400px;
}
</style>
