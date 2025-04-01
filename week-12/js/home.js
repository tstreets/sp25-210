import { app } from "./app.js";

import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

async function getDreams() {
  const dreamsDocs = await getDocs(dreamsCollection);
  console.log(dreamsDocs.docs.length);
}

getDreams();
