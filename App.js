import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ComponentePrueba from "./ComponentePrueba";
import { validarSesion } from "./src/Utils/Acciones";
import AddProduct from "./src/Pantallas/AddProduct";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  validarSesion();

  return <AddProduct />;
}

const styles = StyleSheet.create({
  //identificador: { aquí va tu estilo. }
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    width: "50%",
    textAlign: "center",
  },
  texto2: {
    color: "red",
    fontSize: 20,
    width: "50%",
    textAlign: "center",
  },
});
