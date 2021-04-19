
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCFMkuNx1IZADM8WJ7Ht5GehaIouyJ-TMY",
      authDomain: "kwitter-d6e2a.firebaseapp.com",
      databaseURL: "https://kwitter-d6e2a-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6e2a",
      storageBucket: "kwitter-d6e2a.appspot.com",
      messagingSenderId: "917057515411",
      appId: "1:917057515411:web:716fe6d24a86c44ff64266"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome -"+user_name;


    function addRoom(){

      room_name=document.getElementById("room_name").value;
          localStorage.setItem("room_name",room_name);
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
        });
        window.location="kwitter_page.html";
    }   
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +" </div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
    

getData();



function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
