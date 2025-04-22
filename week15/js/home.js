import { app } from "./firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const gemCollection = collection(db, "gems");

const gemRef = document.querySelector("#gems");

async function getGems() {
  const gemDocs = await getDocs(gemCollection);

  for (let i = 0; i < gemDocs.docs.length; i++) {
    const currentGem = gemDocs.docs[i];

    const gemData = currentGem.data();

    gemRef.innerHTML += `
    <article class="gem">
        <h4>${gemData.name}</h4>
        <img src="images/${gemData.image}" alt="Image of ${gemData.name}" />
    </article>
    `;
  }
}

getGems();
