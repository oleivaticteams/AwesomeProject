import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ComponentePrueba() {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 100,
        height: 100,
        borderRadius: 50,
      }}
    >
      <Text>Este es mi componente estandar</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
