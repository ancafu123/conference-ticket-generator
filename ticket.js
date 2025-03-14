const name = localStorage.getItem("name");
const congrats_name = document.getElementById("congrats_name");

congrats_name.innerText = name;