import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js"







const firebaseConfig = {
  apiKey: "AIzaSyCWdjXoM78R1N-UfQfQq6TQe3OMxKzJhQw",
  authDomain: "attendence-website.firebaseapp.com",
  projectId: "attendence-website",
  storageBucket: "attendence-website.appspot.com",
  messagingSenderId: "565072032487",
  appId: "1:565072032487:web:47ea47d1ad2665ae63a842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);

function signInFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password)


}

function firebaseClassDetail(time, shedule, teacher, section, course, batch) {
  const userId = auth.currentUser.uid
  return addDoc(collection(db, "classDetail"), { time, shedule, teacher, section, course, batch })


}


function studentDetailPostInTODb(name, fName, rollNumber, conNumber, cnicNumber, courseName, imageURL) {
  const userId = auth.currentUser.uid
  return addDoc(collection(db, "studentDetail"), { name, fName, rollNumber, conNumber, cnicNumber, courseName, imageURL })


}
async function uploadImage(picture) {
  const storageRef = ref(storage, `images/${picture.name}`)
  const snapshot = await uploadBytes(storageRef, picture)
  const url = await getDownloadURL(snapshot.ref)
  return url
}


async function options() {
  const querySnapshot = await getDocs(collection(db, "classDetail"))
  const ads = []
  querySnapshot.forEach((doc) => {
    ads.push({ id: doc.id, ...doc.data() });
  })
  return ads
}




export {
  signInFirebase,
  firebaseClassDetail,
  options,
  studentDetailPostInTODb,
  uploadImage

}