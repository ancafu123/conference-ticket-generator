let name = localStorage.getItem("name");
let avatar = localStorage.getItem("avatar");
let email = localStorage.getItem("email");
let github = localStorage.getItem("github");
let congrats_name = document.querySelectorAll("span.name");
let date = document.getElementById("date");

congrats_name.forEach(element => {
    element.innerText = name;
});

let today = new Date;
const options = { year: 'numeric', month: 'long', day: 'numeric' };
let dateNow = today.toLocaleDateString('en-EN', options); 

date.innerText = dateNow + " / Austin, TX";

document.getElementById("avatar").setAttribute("src", avatar);
document.getElementById("ticket_email").innerText = email;
document.getElementById("github_username").innerText = github;



