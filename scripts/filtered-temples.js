const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const jaar = today.getFullYear();
const large = document.getElementById("large");
const small = document.getElementById("small");
const newT = document.getElementById("new");
const oldT = document.getElementById('old');
const homeT = document.getElementById('home')
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona",
        dedicated: "1927, October, 23-6",
        area: 75000,
        imageUrl: "images/temples/mesa_arizona.jpeg"
        // https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-186.jpg
    },
    {
        templeName: "Bismarck North Dakota",
        location: "Bismarck, North Dakota",
        dedicated: "1999, September, 19",
        area: 10700,
        imageUrl: "week03/images/bismarck-temple.jpg"
        // https://churchofjesuschristtemples.org/assets/img/temples/bismarck-north-dakota-temple/bismarck-north-dakota-temple-66023.jpg
        // week03/images/bismarck-temple.jpg
    },
    {
        templeName: "Rapid City South Dakota (groundbreaking TBD)",
        location: "Rapid City, South Dakota", //when i was in sd, the indians called it "rapit" which i picked up
        dedicated: "9999, December, 31",
        area: 11800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rapid-city-south-dakota-temple/rapid-city-south-dakota-temple-71099.jpg"
    }
    // Add more temple objects here...
];
const images = document.querySelector('.images');

document.getElementById("lastModified").innerHTML = document.lastModified;

currentyear.innerHTML = `&copy;${jaar}`

// ^^^copied directly from getdates.js

const mnav = document.querySelector('.hnav');
const burg = document.querySelector('#menu');

burg.addEventListener('click', () => {
    mnav.classList.toggle('show');
    burg.classList.toggle('show');
});

function tCard(table) {
    images.innerHTML = '';
    table.map((x) => {
        const iHml =
            `<img src="${x.imageUrl}" alt="${x.templeName}" width="300" loading="lazy">\
            <figcaption>
            <h2>${x.templeName}</h2>
            <p>Location: ${x.location}</p>
            <p>Dedicated: ${x.dedicated}</p>
            <p>Size: ${x.area}sqft</p>
            </figcaption>`
        const fig = document.createElement('figure');
        fig.innerHTML = iHml;
        images.appendChild(fig);
        // im most surprised that this of all things works
    });
};

tCard(temples);

large.addEventListener('click', () => {
    let toad = temples.filter(x => x.area >= 90000);
    // images.replaceChildren();
    tCard(toad);
});

small.addEventListener('click', () => {
    let toad = temples.filter(x => x.area <= 11000);
    // 10k sqft excludes bismarck, ive been to bismarck, it is a tiny temple, therefore 10k is too small to be small
    // images.replaceChildren();
    tCard(toad);
});

homeT.addEventListener('click', () => {
    tCard(temples);
});

oldT.addEventListener('click',() => {
    let toad = temples.filter(x => parseInt(x.dedicated.split()[0]) < 1900);
    tCard(toad);
});

newT.addEventListener('click', () => {
    let toad = temples.filter(x => parseInt(x.dedicated.split()[0]) > 2000);
    tCard(toad);
});