function search() {
  var searchtext = document.getElementById("searchtext").value;
  var searchtags = ["montanablack","rezo","julienbam"];
  if (searchtext != null && searchtext != "") {
    if (searchtext == searchtags[0]) {
      alert("Jippi");
      document.getElementById(!'montanablack').style.display = "none";
    } else if (searchtext == searchtags[1]) {
      alert("Ich kann nicht aufhören so zu reeden");
    } else if (searchtext == searchtags[2]) {
      alert("Tanzen ist für den Tarzan nischt");
    }
  } else {
    alert("You need to search for something!");
  }
}
