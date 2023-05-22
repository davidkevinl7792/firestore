        const firebaseApp = firebase.initializeApp({
            apiKey: "AIzaSyAZLb_WBUpdheypw4RsCnQ-hyqx30j1Xfc",
            authDomain: "petfinder-fp.firebaseapp.com",
            databaseURL: "https://petfinder-fp-default-rtdb.firebaseio.com",
            projectId: "petfinder-fp",
            storageBucket: "petfinder-fp.appspot.com",
            messagingSenderId: "17525799636",
            appId: "1:17525799636:web:34696046c6dd3ed32a9941",
            measurementId: "G-6D39BMTZNV"
        });
        // import { initializeApp } from "/node-modulesfirebase/app";
        // firebase.initializeApp(firebaseApp);
        // import { getAuth, createUserWithEmailAndPassword } from "/node-modules/firebase/auth";

        import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'

        // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics


        // Add Firebase products that you want to use

        import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'


        const db = getFirestore(firebaseApp);
        const colRef = collection(db,"testing")
        document.querySelector('#enter-btn').addEventListener('click', entered);
        function entered(){
            const enter = document.getElementById('text').value
            addDoc(colRef,{
                pet: enter
            })
        }