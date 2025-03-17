let name = localStorage.getItem("name");
let avatar = localStorage.getItem("avatar");

let congrats_name = document.querySelectorAll("span");
let image_avatar = document.getElementById("avatar");


congrats_name.forEach(element => {
    element.innerText = name;
});

image_avatar.setAttribute("src", avatar);
