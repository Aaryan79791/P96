const firebaseConfig = {
  apiKey: "AIzaSyAV2G49DRHfjZqQm6GAmA_HqcI_SI2I2eo",
  authDomain: "classtest-a88df.firebaseapp.com",
  databaseURL: "https://classtest-a88df-default-rtdb.firebaseio.com",
  projectId: "classtest-a88df",
  storageBucket: "classtest-a88df.appspot.com",
  messagingSenderId: "570956855104",
  appId: "1:570956855104:web:7ad5e93627f1cca18deca5",
  measurementId: "G-XGM5EXCTD1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
  
      firebase.data().ref("/").child(room_name).update({
        purpose: "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_room.html";
  }

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;

  console.log("Room name -" + Room_names);
  row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
  
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

   console.log("Room name -" + Room_names);
   row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
