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

const gemCollection = collection(db, "newgems");

const newGemFormRef = document.querySelector("#newGemForm");
const gemsRef = document.querySelector("#gems");

async function addNewGem(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  await addDoc(gemCollection, {
    name: formData.get("name"),
    color: formData.get("color"),
    height: formData.get("height"),
    weapon: formData.get("weapon"),
    description: formData.get("description"),
  });

  getNewGems();
}

async function getNewGems() {
  gemsRef.innerHTML = "";

  const gemsList = await getDocs(gemCollection);

  for (let index = 0; index < gemsList.docs.length; index++) {
    const currentGem = gemsList.docs[index];
    const gemData = currentGem.data();

    gemsRef.innerHTML += `
        <div>
            <h4>${gemData.name}</h4>
            <ul>
                <li>Height (in apples): ${gemData.height}</li>
                <li>Color (hex): ${gemData.color}</li>
                <li></li>
                <li></li>
            <ul>
        </div>
    `;
  }
}

newGemFormRef.onsubmit = addNewGem;

getNewGems();
