import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCIUfGDBX1DIVBNZaxvymjDNQ4-0drze7I",
  authDomain: "chat-react-2062b.firebaseapp.com",
  projectId: "chat-react-2062b",
  storageBucket: "chat-react-2062b.appspot.com",
  messagingSenderId: "404111829251",
  appId: "1:404111829251:web:07f61448e71d8e9867a136",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
