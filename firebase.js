import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtdet4dYtB_pVSG5lG_gqQ-4L_cYjRZlw",
  authDomain: "crud-firebase-8a6c4.firebaseapp.com",
  projectId: "crud-firebase-8a6c4",
  storageBucket: "crud-firebase-8a6c4.appspot.com",
  messagingSenderId: "1006317001186",
  appId: "1:1006317001186:web:fbd7e4b4ff2ca6a382c1bb",
  measurementId: "G-BG5Q86TBZK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

/**
 * Guarda un nuevo producto en Firebase
 * @param {string} title - El nombre del producto
 * @param {number} price - El precio del producto
 * @param {number} stock - La cantidad en stock
 * @param {string} category - La categoría del producto
 */
export const saveTask = (title, price, stock, category) =>
  addDoc(collection(db, "tasks"), { title, price, stock, category });

/**
 * Obtiene en tiempo real los productos guardados en Firebase
 * @param {function} callback - Función de devolución para procesar los datos
 */
export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 * Elimina un producto por ID
 * @param {string} id - ID del producto
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

/**
 * Obtiene un producto por ID
 * @param {string} id - ID del producto
 */
export const getTask = (id) => getDoc(doc(db, "tasks", id));

/**
 * Actualiza un producto con nuevos datos
 * @param {string} id - ID del producto
 * @param {object} newFields - Objeto con los nuevos campos y valores
 */
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

/**
 * Obtiene todos los productos de Firebase
 * @returns {Promise} - Promesa con los documentos de los productos
 */
export const getTasks = () => getDocs(collection(db, "tasks"));
