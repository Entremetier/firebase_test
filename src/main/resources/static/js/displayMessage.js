// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc4l40LqRVHpPaPIRkAbWw-qJniRUz9zw",
    authDomain: "contactform-3cbed.firebaseapp.com",
    databaseURL: "https://contactform-3cbed.firebaseio.com",
    projectId: "contactform-3cbed",
    storageBucket: "contactform-3cbed.appspot.com",
    messagingSenderId: "202199187053",
    appId: "1:202199187053:web:d4a5d20968bb9c0e528964"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//Creating database, with name messages, on the fly
let messagesRef = firebase.database().ref('messages');

let key;
let id;

document.getElementById('messageForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    document.getElementById('outputName').innerText = "";
    document.getElementById('outputEmail').innerText = "";
    document.getElementById('outputCompany').innerText = "";
    document.getElementById('outputMessage').innerText = "ID ist nicht vorhanden!";

    //Get Values
    id = getInputVal('id');
    //console.log("Die ID: " + id);

//Get Message with ID
    messagesRef.on('value', gotData, errData);

    function gotData(data) {
        // console.log(data.val());
        let contact = data.val();
        let keys = Object.keys(contact);
        // console.log(keys);
        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            if (key === id) {
                console.log(key + " ID: " + id)
                let name = contact[key].name;
                let email = contact[key].email;
                let company = contact[key].company;
                let message = contact[key].message;

                document.getElementById('outputName').innerText = name;
                document.getElementById('outputEmail').innerText = email;
                document.getElementById('outputCompany').innerText = company;
                document.getElementById('outputMessage').innerText = message;
            }
        }
    }


    function errData(err) {
        console.log('Error!');
        console.log(err);
    }

    function getInputVal(id) {
        return document.getElementById(id).value;
    }
}