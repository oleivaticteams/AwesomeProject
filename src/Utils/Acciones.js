import { firebaseapp } from "./Firebase";
import * as firebase from "firebase";

export const validarSesion = () => {
  firebase.auth().onAuthStateChanged((user) => {
    user ? console.log("ok") : console.log("Iniciar sesión");
  });
};
