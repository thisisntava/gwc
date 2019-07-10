function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function scrollToElement(id) {
    console.log(id);
    var el = document.getElementById(id);
    el.scrollIntoView();
}
