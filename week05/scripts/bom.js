const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
const button = document.querySelector('button');
// const intern = JSON.parse(localStorage.getItem('favelem')) || {"books":[]};
// input.focus;
// const books = intern.books;

function GetChapterList() {
    return JSON.parse(localStorage.getItem('favelem')); //myFavBOMList in the assignments
};

let chapterArray = GetChapterList() || [];


// chapterArray.forEach(i => {
//     DisplayList(i);
// });

function deleteChapter(chapter) {
    chapter = chapter.slice(0,chapter.length - 1);
    chapterArray = chapterArray.filter((i) => i !== chapter);
    setChapterList(chapterArray);
};

function displayList(toap) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = toap;
    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent)
        input.focus();
        delete toap;
    });
    li.appendChild(deleteButton);
    list.append(li);
};

chapterArray.forEach(i => {
    displayList(i);
});

button.addEventListener('click', function(){
    if (input.value != '') {
        // DisplayList(input.value);
        displayList(input.value);
        chapterArray.push(input.value)
        setChapterList();
        
        input.value = '';
        input.focus;
    };
});

function setChapterList() {
    localStorage.setItem('favelem',JSON.stringify(chapterArray))
};

// man, javascript is not clicking for me yet... then again, neither is csharp, and im positive ill get that, so ill probably also get this