import { app } from "./app.js";

import {
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
  const dreamsDocs = await getDocs(dreamsCollection);

  dreamsRef.innerHTML = "";

  for (let i = 0; i < dreamsDocs.docs.length; i++) {
    const currentDream = dreamsDocs.docs[i];

    const data = currentDream.data();

    // Creating my div
    const newDiv = document.createElement("div");
    newDiv.classList.add("dream");
    newDiv.innerHTML += `<h4>${data.text}</h4>
        <p>Likes: ${data.hearts || 0}</p>`;

    // creating the p tag for the buttons
    const newPTag = document.createElement("p");

    // edit button
    const newEditButton = document.createElement("button");
    newEditButton.innerHTML = "Edit";
    newEditButton.classList.add("edit");

    // heart button
    const newHeartButton = document.createElement("button");
    newHeartButton.classList.add("heart");
    newHeartButton.innerHTML = "&hearts;";
    newHeartButton.dataset.id = currentDream.id;
    newHeartButton.dataset.hearts = data.hearts || 0;
    newHeartButton.onclick = addHeart;

    // Adding element through appendChild
    newPTag.appendChild(newEditButton);
    newPTag.appendChild(newHeartButton);
    newDiv.appendChild(newPTag);

    dreamsRef.appendChild(newDiv);
  }
}

async function addHeart(e) {
  console.log("Add heart", e.target.dataset.id);

  const newHeartCount = Number(e.target.dataset.hearts) + 1;

  const dreamToUpdate = doc(dreamsCollection, e.target.dataset.id);

  await updateDoc(dreamToUpdate, { hearts: newHeartCount });

  //   alert("Dream updated");
  getDreams();
}

getDreams();
