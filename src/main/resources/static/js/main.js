// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "contact-form-96065.firebaseapp.com",
    databaseURL: "https://contact-form-96065.firebaseio.com",
    projectId: "contact-form-96065",
    storageBucket: "contact-form-96065.appspot.com",
    messagingSenderId: "",
    appId: "1:405674194627:web:4209b0e6944bd91f7a9476"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference Messages collection
let messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let company = getInputVal('company');
    let message = getInputVal('message');

    //Save Message
    saveMessage(name, email, company, message);

    //Show alert
    document.querySelector('.alert-success').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert-success').style.display = 'none';
    }, 3000);

    document.getElementById('contactform').reset();
}

//Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email, company, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        company: company,
        message: message
    });
}