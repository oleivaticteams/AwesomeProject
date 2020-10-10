import { firebaseapp } from "./Firebase";
import * as firebase from "firebase";
import "firebase/firestore";
const db = firebase.firestore(firebaseapp);

export const validarSesion = () => {
  firebase.auth().onAuthStateChanged((user) => {
    user ? console.log("ok") : console.log("Iniciar sesión");
  });
};

export const addRegistro = async (coleccion, campos) => {
  let resultado = false;

  await db
    .collection(coleccion)
    .add(campos)
    .then((response) => {
      resultado = true;
    })
    .catch((err) => {
      console.log(err);
    });

  return resultado;
};
