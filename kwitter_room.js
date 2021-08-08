
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyCbmKeISU-JAyvPumhrYs2PK9tIaBa9BXA",
  authDomain: "c-93-af93e.firebaseapp.com",
  databaseURL: "https://c-93-af93e-default-rtdb.firebaseio.com",
  projectId: "c-93-af93e",
  storageBucket: "c-93-af93e.appspot.com",
  messagingSenderId: "586242054110",
  appId: "1:586242054110:web:debd6549340ff323f8ef4f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
