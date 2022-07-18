// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqrUfD3Uq-pfyowGIunHC8vL-BbbxNLnU",
  authDomain: "nike-airjordan.firebaseapp.com",
  projectId: "nike-airjordan",
  storageBucket: "nike-airjordan.appspot.com",
  messagingSenderId: "34909686066",
  appId: "1:34909686066:web:36a1568107006207a66f2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Obtiene todos los datos de firestore
export async function getAllProducts() {
  //referencia a la coleccion
  const refColecction = collection(db, "products");
  //leemos el snapshot de los documentos actualez con getdocs
  const docSnapshot = await getDocs(refColecction);
  //recibimos un array 'docs' dentro de snapshot
  const dataProducts = docSnapshot.docs.map((item) => {
    const products = {
      ...item.data(),
      id: item.id,
    };
    return products;
  });
  return dataProducts;
}

//Obtiene solo el dato del id pasado
export async function getProduct(id) {
  const refColecction = collection(db, "products");
  const docRef = doc(refColecction, id);
  const docSnapshot = await getDoc(docRef);

  const product = {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };

  return product;
}
export default db;
