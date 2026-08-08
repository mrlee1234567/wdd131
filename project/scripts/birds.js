const botd = document.querySelector('#botd');
const birdfact = document.querySelector('#birdfact');
const today = new Date()

const specialBirds = [
    {
        bird:'Paulo',
        image:'images/chicken1.webp',
        about:'This is Paulo. Paulo is a part time philosopher. He believes himself to be a person, no one has the heart to tell Paulo that he is, in fact, not a person. Unfortunately, because he is a part time philosopher, he makes a great case for him being a person.',
        caption:'Paulo, Featherless Biped.'
    },
    {
        bird:'Gorgnok the Destroyer',
        image:'images/chicken2.webp',
        about:'This is Gorgnok the Destroyer. His actual name is Ralf, however he now goes by Gorgnok the Destroyer, ever since he found the fountain of youth and subsequently claimed the Chinese Mandate of Heaven. Therefore, his full name is Emperor Ralf Gorgnok the Destroyer Eggbert.',
        caption:'Ralf, Ayam Cemani.'
    },
    {
        bird:'Gabriel',
        image:'images/googlyeyebird.jpg',
        about:'This is Gabriel. He has several more eyes than you. That makes him the king of the birdhouse. We like Gabriel. Unfortunately, he is loud, so we have to limit his eye time.',
        caption:'Gabriel, Cockatoo.'
    },
    {
        bird:'Party Parrot',
        image:'images/party-parrot.gif',
        about:'Party Parrot.',
        caption:'Party Parrot.'
    },
    {
        bird:'Harriet',
        image:'images/raven1.jpg',
        about:'This is Harriet. As you can see, she is a goofy bird. Actually, we don\'t know why she does this, there\'s no logical reason why she should be doing this. It worries us because she does this often. We still enjoy her presence, and the raven gifts she brings us.',
        caption:'Harriet, Raven.'
    },
    {
        bird:'Ozzy Osbourne',
        image:'images/raven2.jpg',
        about:'You read that right. This raven right here is the reincarnation of Ozzy Osbourne. Everyone thought he\'d come back as a bat, however, he came back as a raven. We asked him why, but we weren\'t sure what he said. It\'s unclear if that\'s because he\'s a raven, or because he\'s Ozzy Osbourne. It could be both.',
        caption:'Ozzy Osbourne, Rockstar.'
    },
    {
        bird:'Geoff',
        image:'images/sir-parrot.jpg',
        about:'This is Lord Geoffrey Godwinn Alexander Pestchester III, Duke of West Glouchesterburgensherwoodshire. We actually don\'t know where that is, and were fairly confidend Geoff is a normal white-bellied caique (<i>Pionites leucogaster</i>).',
        caption:'Geoff, Caique.'
    },
    {
        bird:'Smelly',
        image:'images/talking-head.webp',
        about:'This is Smelly. As you can see, she is very opinionated about the news. We don\'t think that she understands what "news" is, she gets the concept.',
        caption:'Smelly, Cockatoo.'
    },
    {
        bird:'Cher Ami',
        image:'images/cher-ami.jpg',
        about:'This is Cher Ami. He was a war pigeon in WWI who saved a batallion of US Soldiers stranded behind enemy lines under friendly artillery fire. He was shot by a German sniper, causing him to loose a leg and an eye, however, he made it to headquarters, delivering a message that saved the stranded soldiers.',
        caption:'Cher Ami, Pigeon (Taxidermy, Smithsonian).'
    },
    {
        bird:'Grape-Kun',
        image:'images/grapekun.jpg',
        about:'This is Grape. He was a humboldt penguin (<i>Spheniscus humboldti</i>) located at Tobu Zoo in Japan (hence the honorific "kun"). He gained international fame after he became attatched to a promotional cutout of the character Hululu from the anime "Kemono Friends," which he would stare at for hours at a time. Grape-Kun died on October 12 2017, and to honor him, a cardboard Grape-Kun was placed next to his "wife" in the exhibit.',
        caption:'Grape, Humboldt Penguin (<i>Spheniscus humboldti</i>)'
    },
    {
        bird:'The Placeholder Bird',
        image:'images/placeholder.png',
        about:'You may think that this is an error, but this is actually an actual entry in the javascript file. Don\'t believe me? See for yourself.',
        caption:'The Placeholder Bird.'
    },
    {
        bird:'The Anchorage White Raven',
        image:'images/white-raven-anchorage.jpg',
        about:'This is the White Raven of Anchorage, Alaska. It is a leucistic (not albino) common raven (<i>Corvus corax</i>), the first one seen since the 90s. It was known to enjoy Häagen-Daazs icecream, tater tots, pizza, and toast. It is also a known trickster, having stolen a bolt from a lightpost. The White Raven was last seen in 2024 in Soldotna, AK, and hasn\'t been seen since, meaning it is still at large. An interesting anectode relating to white ravens, a Yup\'ik (Alaskan Native American tribe) prophesy states that a white raven will appear "when the world becomes more spiritual again."',
        caption:'The White Raven, Common Raven (<i>Corvus corax</i>).'
    },
    {
        bird:'Maj. Gen. Sir Nils Olav III',
        image:'images/sir-nils-olav-iii.jpg',
        about:'This is Major General Sir Nils Olav III, Baron of Bouvet Island. He is the Colonel in Chief of the Norwegian King\'s Guard. He was knighted and promoted sometime before 2016, following the passing of regimental seargeant major Sir Nils Olav II. He currently resides in Edinburgh, Scotland.',
        caption:'Nils Olav III, King Penguin (<i>Aptenodytes patagonicus</i>).'
    }
];
const birdDay = getBackgroundDat()
const defaultFactoids = [
    'Peafowl were eaten by the Romans.',
    'Winston Churchill was rumored to have owned a parrot he trained to shout swears at Nazi leaders.',
    'Woodpeckers have bones in their toungues, which prevents them from breaking their neck when they woodpeck.',
    'Bigbird was almost on the Challenger.',
    'Ravens are seen as tricksters in Native American folklore.',
    'The Aztecs considered hummingbirds to be spirits of mighty warriors because they are highly territorial.',
    'Domestic turkeys are the second dumbest animal, second only to sheep, which are not birds.',
    'Honeyguides historically helped humans locate beehives so that both us and the honeyguide can recieve honey.',
    'Turkey vultures don\'t have predators, so they don\'t fear walking up to people or pets. It is not recomended to pick them up though, they are still wild birds.',
    'Vultures are attracted to foul sulphur smells, meaning that a random gathering of vultures either means there is a gas leak, or they just want to gather there.',
    'The national bird of Australia is the emu. Despite this, they lost a war against them in 1932. They were the first nation in modern history to loose to birds, but not the last.</li><li>China declared war on sparrows between 1958 and 1960, because they were seen as agricultural pests. Ironically, this led to crickets running wild, causing massive famine. This was considered a pyrrhic victory for sparrows.',
    'The closest living reletive to <i>Tyrannosaurus rex</i> is the red junglefowl (<i>Gallus gallus</i>), of which, the subspecies <i>domesticus</i> is known as the chicken.',
    'The turkey was proposed by Benjamin Franklin as an alternative to the bald eagle as a national bird.',
    'Despite not being a bird, bats are considered an unclean bird by kosher laws.',
    'Birds bond with one another by preening hard to reach feathers.',
    'It is a known fact that chickens have only one braincell, it is devoted to avoiding things that aren\'t chickens. What isn\'t well known is that a flock of chickens act as a hive mind, and large enough concentrations of chickens are believed to have enough brain power to rival every supercomputer combined.',//i made that up lol
    'During WWII, the US Army experimented with making guided missiles by training pigeons to peck warships on a screen. It was cancelled bacause it was not very efficient.'
];
const localFactoids = JSON.parse(localStorage.getItem('localBirdfacts')) || [];
const factoids = defaultFactoids.concat(localFactoids);

botd.innerHTML = buildBotd();

function getBackgroundDat() {
    let bgd = JSON.parse(localStorage.getItem('botd')) || 0;
    if (bgd === 0) {
        bgd = getBirdTemplate();
        localStorage.setItem('botd', JSON.stringify(bgd));
    } else if (!compareDate(bgd.date)) {
        bgd = getBirdTemplate();
        localStorage.setItem('botd', JSON.stringify(bgd));
    };
    return bgd;
};

function getBirdTemplate() {
    let bgd = {
        bird: specialBirds[randint(specialBirds.length)],
        date : getToday()
    }
    return bgd;
};

function randint(rang) {
    return Math.floor(Math.random() * rang)
};

function randrange(min, max) {
    mnciel = Math.ceil(min);
    mxfloor = Math.floor(max);
    return Math.floor(Math.random() * (mxfloor - mnciel) + mnciel);
};

function getToday() {
    let thisDay = {
        day: today.getDate(),
        year: today.getFullYear(),
        month: today.getMonth(),
        weekday: today.getDay()
    };
    return thisDay;
};

function compareDate(date) {
    let dotay = getToday();
    if (dotay.day != date.day || dotay.month != date.month || dotay.year != date.year || dotay.weekday != date.weekday) {
        return false;
    } else {
        return true;
    };
};

function buildBotd() {
    let thisBird = birdDay.bird;
    let bird = thisBird.bird || 'ERR'
    let image = thisBird.image || 'images/placeholder.png';;
    let desc = thisBird.about || 'on noses, An error occurde!';
    let capt = thisBird.caption || 'ETAOIN SHRDLU';
    let innr = `<h2>Bird of the Day!</h2>\
    <figure>\
    <img src=${image} alt="Bird of the Day" height="150" loading="lazy">\
    <figcaption>${capt}</figcaption>\
    </figure>\
    <h3>${bird}</h3>\
    <p>${desc}</p>\
    `;
    return innr;
};

let numofFacts = randrange(3,10);
let factToad = '';

for (let i = 0; i < numofFacts; i++) {
    const fact = factoids.splice(randint(factoids.length),1);
    factToad += `<li>${fact}</li>`;
};
birdfact.innerHTML = factToad;