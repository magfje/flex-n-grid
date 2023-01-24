function noLayout() {
  document.getElementById("cards").classList.value = "";
}
function verticalLayout() {
  noLayout();
  document.getElementById("cards").classList.add("vertical");
}
function horizontalLayout() {
  noLayout();
  document.getElementById("cards").classList.add("horizontal");
}
function gridLayout() {
  noLayout();
  document.getElementById("cards").classList.add("grid");
}

function showTools() {
  let a = document.getElementById("cardTools");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
function showHtml() {
  let a = document.getElementById("cardHtml");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
function showCss() {
  let a = document.getElementById("cardCss");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
function showJavaScript() {
  let a = document.getElementById("cardJavaScript");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
function showBodyGame() {
  let a = document.getElementById("cardGame");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

function selectHead4() {
  let x = document.getElementById("img/head1");
  if (x.src === "img/head1") {
    x.src = "img/head4";
  }
}
