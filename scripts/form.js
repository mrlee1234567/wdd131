const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const jaar = today.getFullYear();
const formProduct = document.querySelector("#product") || 0;
// const submit = document.querySelector("#submit");
const revct = document.querySelector("#reviect") || 0;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.getElementById("lastModified").innerHTML = document.lastModified;

currentyear.innerHTML = `&copy;${jaar}`

function buildOpts(iary){
    const op = document.createElement("option");
    const id = iary.id;
    const nm = 
    iary.name
        .split(' ')
        .map(x => x.charAt(0).toUpperCase() + x.substring(1))
        .join(' ')
    ; //i had to find a stack exchange for that, bc for whatever reason, js does not have a capitalize function
    const av = iary.averagerating.toString();
    // op.setAttribute('value',id);
    // op.innerHTML(`${nm} ${av}&star;`);
    op.innerHTML = `${nm} ${av}&star;`;
    if (formProduct != 0) {
        formProduct.appendChild(op);
    }
    
};

products.forEach(i => {
    buildOpts(i);
});

function getRCount(){
    return JSON.parse(localStorage.getItem('reviewnum'));
};

let reviewct = getRCount() || 0;

function setRCount(){
    rp1 = reviewct + 1;
    localStorage.setItem('reviewnum',JSON.stringify(rp1));
};
if (revct != 0) {
    if (reviewct == 0) {
        revct.textContent = 'No Reviews Submitted.';
    } else {
        revct.innerHTML = `There are ${reviewct} reviews.`;
    };
};


// submit.addEventListener('click',setRCount);

function getCurrentFile() {
    let url = window.location.href;
    let objs = url.split("/");
    return (objs[objs.length - 1]);
};
//^^^modified from a stack exchange response

let currentFile = getCurrentFile();

// revct.innerHTML = currentFile;

if (currentFile.includes("review.html")){
    setRCount();
};