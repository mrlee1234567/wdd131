const job = JSON.parse(localStorage.getItem('reviewnum')) + 1;
const revct = document.querySelector("#reviect");

localStorage.setItem('reviewnum', JSON.stringify(job))

revct.innerHTML = `There are ${job} reviews.`;