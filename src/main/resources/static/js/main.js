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

// //Get Message with ID
// messagesRef.on('value', gotData, errData);
//
// function gotData(data) {
//    // console.log(data.val());
//     let contact = data.val();
//     let keys = Object.keys(contact);
//     console.log(keys);
//     for (let i = 0; i < keys.length; i++){
//         let key = keys[i];
//         let name = contact[key].name;
//         let email = contact[key].email;
//         let company = contact[key].company;
//         let message = contact[key].message;
//         console.log('Name: ' + name + ' Email: ' + email + ' Company: ' + company + ' Message: ' + message);
//     }
// }
//
// function errData(err) {
//     console.log('Error!');
//     console.log(err);
// }
//
//
// //Display Message