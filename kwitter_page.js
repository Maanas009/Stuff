//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyD7kjw-py5Ipoq2Kzni7k-nZdyDtG8XF44",
      authDomain: "notmiliea.firebaseapp.com",
      databaseURL: "https://notmiliea-default-rtdb.firebaseio.com",
      projectId: "notmiliea",
      storageBucket: "notmiliea.appspot.com",
      messagingSenderId: "1097997526432",
      appId: "1:1097997526432:web:5001b9e5e2ce28e20030c5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                      name: user_name, 
                      message: msg, 
                      like: 0
                });
          document.getElementById("msg").value = "";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
