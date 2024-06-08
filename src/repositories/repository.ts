// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore, doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBVtmoyu9Z0nhEfIxxgew22wIg46AUYv5I",
    authDomain: "travel-ee14e.firebaseapp.com",
    databaseURL: "https://travel-ee14e-default-rtdb.firebaseio.com",
    projectId: "travel-ee14e",
    storageBucket: "travel-ee14e.appspot.com",
    messagingSenderId: "605975950634",
    appId: "1:605975950634:web:c6ba7a248c026570685a53"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export class Repository {
    db: Firestore;
    collectionName: string;

    constructor(collectionName: string) {
        this.db = getFirestore(app);
        this.collectionName = collectionName;
    }

    // Thêm bản ghi vào Firestore
    async add(data: any) {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), data);
            console.log("Document added with ID: ", docRef.id);
            return docRef;
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    // Xoá bản ghi từ Firestore
    async remove(id: string) {
        try {
            await deleteDoc(doc(this.db, this.collectionName, id));
            console.log("Document successfully deleted!");
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    }

    // Sửa bản ghi trong Firestore
    async update(id: string, data: any) {
        try {
            await updateDoc(doc(this.db, this.collectionName, id), data);
            console.log("Document successfully updated!");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    // Đọc tất cả bản ghi từ Firestore
    async read(): Promise<any> {
        try {
            const querySnapshot = await getDocs(collection(this.db, this.collectionName));

            const data: any[] = [];

            querySnapshot.forEach((item) => {
                data.push({
                    id: item.id,
                    ...item.data(),
                })
            })

            return data;
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
    }
}