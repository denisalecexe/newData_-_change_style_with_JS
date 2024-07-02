const day = new Date("2024-07-02");
document.getElementById("demoData").innerHTML = day;

function changeColor() {
  document.getElementById("demoData").style.color = 
  "blue";
}

function changeBgColor() {
  document.getElementById("demoData").style.backgroundColor = 
  "black";
}

function changeTextSize() {
  document.getElementById("demoData").style.fontSize =
  "50px";
}

function changeTextFont() {
  document.getElementById("demoData").style.fontFamily =
  "'Courier New', Courier, monospace";
}