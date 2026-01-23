import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function CheckInScreen() {
  const [mood, setMood] = useState<number | null>(null);
  const [reflection, setReflection] = useState("");

  const moodOptions = ["😞", "😐", "😊", "😄", "🥳"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>

      <View style={styles.moodRow}>
        {moodOptions.map((emoji, index) => (
          <Pressable
            key={index}
            style={[
              styles.moodButton,
              mood === index ? styles.selectedMood : null,
            ]}
            onPress={() => setMood(index)}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.prompt}>Anything you’d like to reflect on?</Text>
      <TextInput
        style={styles.input}
        placeholder="Write here..."
        value={reflection}
        onChangeText={setReflection}
        multiline
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  moodButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#EDEDED",
  },
  selectedMood: {
    backgroundColor: "#C9A7EB",
  },
  emoji: {
    fontSize: 24,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
    textAlignVertical: "top",
  },
});