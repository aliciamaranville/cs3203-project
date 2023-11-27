(function() {
    const config = {
        apiKey: "AIzaSyCl4Pry1eT8uajY0uo7ZODZytAtg3LKc5w",
        authDomain: "software-project-2aeb3.firebaseapp.com",
        databaseURL: "https://software-project-2aeb3-default-rtdb.firebaseio.com",
        projectId: "software-project-2aeb3",
        storageBucket: "software-project-2aeb3.appspot.com",
        messagingSenderId: "1028628025496",
        appId: "1:1028628025496:web:7c6bfce2de08ae514e40ed",
        measurementId: "G-RLM0YWXT7M"
    }

    firebase.initializeApp(config);

    // get elements
    const preObject = document.getElementById('object');

    // create refs
    const dbRefObject = firebase.database().ref().child('object');

    // sync object changes
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

}());