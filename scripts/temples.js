const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const jaar = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

currentyear.innerHTML = `&copy;${jaar}`

// ^^^copied directly from getdates.js

const mnav = document.querySelector('.hnav');
const burg = document.querySelector('#menu');

burg.addEventListener('click', () => {
    mnav.classList.toggle('show');
    burg.classList.toggle('show');
});