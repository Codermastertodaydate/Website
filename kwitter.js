function Adduser(){
    username= document.getElementById("user_name").value
    localStorage.setItem("uname",username)
   window.location="kwitter_room.html"
}