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
        import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js'

        // Add Firebase products that you want to use
        import { getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'
        import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'

        const db = getFirestore(firebaseApp);
        const colRef = collection(db,"testing")
        const auth = firebaseApp.auth();
        const myData = localStorage.getItem('name-trans')

        //Connect with google database
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        auth.languageCode = firebase.auth().useDeviceLanguage();
            // To apply the default browser preference instead of explicitly setting it.
            // firebase.auth().useDeviceLanguage()


        document.querySelector('#submit').addEventListener('click',signup);

        function signup(){
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            const long = localStorage.getItem('long-trans')
            const lat = localStorage.getItem('lat-trans')
            // console.log(email, password)

            auth.createUserWithEmailAndPassword(email, password)//new accounts
            .then((result) => {
                // Access Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            //firestore here
            //david
            .then((cred) => {
                console.log(res.user)
                // addDoc(collection(db,'users').doc(cred.user.uid))
                })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
                alert(err.code)
                // alert("Please write a valid email/valid password");//make this into a popup
                // The email of the user's account used.
                // The AuthCredential type that was used.
            })

        }

        document.querySelector('#enter-btn').addEventListener('click', entered);
        document.querySelector('#login-btn').addEventListener('click',loginUser);
        document.querySelector('#logout-btn').addEventListener('click', logoutUser);

        document.querySelector('#loginScreen').style.display = "block"
        document.querySelector('#dashboard').style.display = "none"



        function entered(){
            const enter = document.getElementById('text').value
            addDoc(colRef,{
                pet: enter
            })
        }

        function loginUser(){
            const email = document.getElementById('emailB').value
            const password = document.getElementById('passwordB').value
            const long = localStorage.getItem('long-trans')
            const lat = localStorage.getItem('lat-trans')
            console.log(email, password)

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                console.log(error)
                alert("Please write a valid email/valid password");//make this into a popup
            })
        }

        function logoutUser(){
            firebase.auth().signOut().then(()=>{

            }).catch(e=>{
                console.log(e)
            })
        }

        function showUserData(user){
            document.getElementById('userDetails').innerHTML = "Logged in Successful"
        }

        firebase.auth().onAuthStateChanged(function(user){
                if(user){
                    console.log(user)
                    showUserData();
                    document.querySelector('#loginScreen').style.display = "none"
                    document.querySelector('#dashboard').style.display = "block"
                }else{
                    document.querySelector('#loginScreen').style.display = "block"
                    document.querySelector('#dashboard').style.display = "none"
            }
        })

        var user = firebase.auth().currentUser;//Gets current signed in data
        if (user) {
        // User is signed in.
            if (user != null) {
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;
                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
            }} else {
            // No user is signed in.
        }

        // document.querySelector('#email-btn').addEventListener('click', Email())

        // function Email(){
        //    user.updateEmail("user@example.com").then(function() {
        //     // Update successful.
        //     }).catch(function(error) {
        //     // An error happened.
        //     });
        // }

        //Want to add more stuff? -->update username,
        // email, send a verfication email to make changes,
        // set password, result password, delete account
        //https://medium.com/codingurukul/firebase-for-web-authentication-auth-with-email-and-password-cc4f7b4efc1b




