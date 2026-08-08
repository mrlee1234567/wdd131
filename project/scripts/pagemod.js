const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const todayDay = new Date();
const jaar = todayDay.getFullYear();
const menuBtn = document.querySelector("#menu-btn");
const navhid = document.querySelector(".menu");

document.getElementById("lastModified").innerHTML = document.lastModified;

currentyear.innerHTML = `&copy;${jaar}`

menuBtn.addEventListener('click', () => {
    navhid.classList.toggle('hide');
    menuBtn.classList.toggle('hide');
});