import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi, I'm Fin, your FAFSA assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    try {
      const response = await axios.post("http://localhost:8000/chat", { message: input });
      const botReply = response.data.response;

      // Add bot response
      setMessages([...newMessages, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { role: "bot", text: "Oops! Something went wrong." }]);
    }

    setInput(""); // Clear input field
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={msg.role === "user" ? styles.userText : styles.botText}>
            {msg.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  chatContainer: { flex: 1, marginBottom: 10 },
  userText: { alignSelf: "flex-end", backgroundColor: "#cce5ff", padding: 10, margin: 5, borderRadius: 10 },
  botText: { alignSelf: "flex-start", backgroundColor: "#e6e6e6", padding: 10, margin: 5, borderRadius: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingLeft: 10, marginBottom: 10 },
});

export default Chatbot;
