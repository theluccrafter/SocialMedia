//Login Data
var logindata = [
  {
    username: "LucaZangaro",
    password: "LucaZangaro040702"
  },
  {
    username: "FabianLechner",
    password: "FabianLechnerDerEchte"
  },
  {
    username: "TobiasSchaller",
    password: "FIFA_20"
  }
];

var wrongentry = 1;

function testlogin() {
  var username = document.getElementById('uname').value;
  var password = document.getElementById('upassword').value;
  document.title = username;
  login(username, password);

  function login(username, password) {
    if (username != null || username != "") {
      if (username == logindata[0].username && password == logindata[0].password) {
        document.title = "Weiterleitung...";
        document.getElementById('uname').value = "";
        document.getElementById('upassword').value = "";
        document.title = "Test | Login"
        window.open('inpage/admin.html');
      } else if (username != logindata[0].username && password != logindata[0].password) {
        for (var i = 1; i < logindata.length; i++) {
          if (username == logindata[i].username && password == logindata[i].password) {
            document.title = "Weiterleitung...";
            document.getElementById('uname').value = "";
            document.getElementById('upassword').value = "";
            window.open("/inpage/user1.html");
            return
          } else {
            document.getElementById("errorContent").innerHTML = "Der Benutzername oder dein Passwort ist falsch, bitte überprüfe dies!\n" + wrongentry;
            wrongentry+=1;
          }
        }
      } else {
        document.getElementById("errorContent").innerHTML = "Der Benutzername oder dein Passwort ist falsch, bitte überprüfe dies!\n" + wrongentry;
        wrongentry+=1;
      }
    } else {
      document.getElementById("errorContent").innerHTML = "Der Benutzername oder dein Passwort ist falsch, bitte überprüfe dies!\n" + wrongentry;
      wrongentry+=1;
    }
  }
}


function sendMail() {
  var link = "mailto:theluccrafteryt@gmail.com"
  + "?cc="
  + "&subject=" + encodeURIComponent("Hey There, I'm a new User!")
  + "&body=" + encodeURIComponent("My Name: \nMy Username: \nMy Password: \nMy E-Mail Adress: \n\n\nYou have to fill this correctly out, to get into the page.")
  ;

  window.open(link);
}
