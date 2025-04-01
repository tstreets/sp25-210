import { app } from "./app.js";

import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
  const dreamsDocs = await getDocs(dreamsCollection);

  dreamsRef.innerHTML = "";
  for (let i = 0; i < dreamsDocs.docs.length; i++) {
    const currentDream = dreamsDocs.docs[i];
    console.log(currentDream.id, currentDream.data());

    const dreamData = currentDream.data();
    dreamsRef.innerHTML += "<li>" + dreamData.text + "</li>";
  }
}

getDreams();
