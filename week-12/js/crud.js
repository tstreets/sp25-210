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

    const hearts = data.hearts || 0;

    dreamsRef.innerHTML += `
    <div class="dream">
        <h4>
        <span class="delete" data-id="${currentDream.id}">&cross;</span>
        ${data.text}
        </h4>
        <p>Likes: ${hearts}</p>
        <p>
          <button class="edit">Edit</button>
          <button class="heart" data-id="${currentDream.id}" data-hearts="${hearts}" >&hearts;</button>
        </p>
      </div>
    `;
  }

  const heartsRef = document.querySelectorAll(".heart");

  for (let i = 0; i < heartsRef.length; i++) {
    heartsRef[i].onclick = addHeart;
  }

  const crossesRef = document.querySelectorAll(".delete");

  for (let i = 0; i < crossesRef.length; i++) {
    crossesRef[i].onclick = forgetDream;
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

async function forgetDream(e) {
  console.log("Dream to forget", e.target.dataset.id);

  const userConfirmed = confirm("Are you sure you want to forget this dream?");

  if (userConfirmed) {
    const dreamToDelete = doc(dreamsCollection, e.target.dataset.id);

    await deleteDoc(dreamToDelete);

    getDreams();
  }
}

getDreams();
