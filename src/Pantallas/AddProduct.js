import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import { addRegistro } from "../Utils/Acciones";

export default function AddProduct() {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [precio, setprecio] = useState(0);

  const onSubmit = async () => {
    console.log("El nombre es " + nombre);
    console.log("La Descripción es " + descripcion);
    console.log("El Precio es " + precio);

    const producto = {
      nombre,
      descripcion,
      precio,
    };

    const resultado = await addRegistro("Productos", producto);

    console.log(resultado);
  };

  return (
    <View style={styles.container}>
      <Text>Agregar Producto</Text>

      <Input
        placeholder="Nombre del Producto"
        onChangeText={(text) => {
          setnombre(text);
        }}
      />
      <Input
        placeholder="Descripción"
        onChangeText={(text) => {
          setdescripcion(text);
        }}
      />
      <Input
        placeholder="Precio"
        onChangeText={(text) => {
          setprecio(text);
        }}
      />
      <Button title="Agregar Producto" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
