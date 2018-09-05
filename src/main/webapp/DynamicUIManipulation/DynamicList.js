var boys = ["Peter", "lars", "Ole", "ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
var comparisonCounter = 0;
const boyArea = document.querySelector("#boys");
const girlArea = document.querySelector("#girls");
const allArea = document.querySelector("#all");
const addBoyButton = document.querySelector("#addboy");
const addGirlButton = document.querySelector("#addgirl");
const removeBoyButton = document.querySelector("#removeboy");
const removeGirlButton = document.querySelector("#removegirl");
const reverseAllButton = document.querySelector("#reverse");
const sortAllButton = document.querySelector("#sort");


function insertList(arrayElements, documentType) {
    documentType.innerHTML = "";
    let ul = document.createElement('ul');
    for (let i = 0; i < arrayElements.length; i++) {
        let li = document.createElement('li');
        li.append(arrayElements[i]);
        ul.appendChild(li);
    }
    documentType.appendChild(ul);
}

function addElementToList(array, element) {
    array.push(element);
}

function removeFromList(array, choice) {
    return choice === "top" ? array.shift() : array.pop();
}


function insertBoysAndGirls() {
   // all = boys.concat(girls); //smh this doesn't work, ask why
    insertList(boys, boyArea);
    insertList(girls, girlArea);
    insertList(all, allArea);
}


function updateAll() {
    all = boys.concat(girls);
}

addBoyButton.addEventListener('click', () => {
    let userInput = document.getElementById('newboy').value;
    addElementToList(boys, userInput);
    updateAll();
    insertBoysAndGirls();
});

addGirlButton.addEventListener('click', () => {
    let userInput = document.getElementById('newgirl').value;
    addElementToList(girls, userInput);
    updateAll();
    insertBoysAndGirls();
});

removeBoyButton.addEventListener('click', () => {
    if (document.getElementById('last').checked) {
        removeFromList(boys, "bot");
    } else {
        //do this since last will be defualt otherwise make else if
        removeFromList(boys, "top");
    }
    updateAll();
    insertBoysAndGirls();
});

removeGirlButton.addEventListener('click', () => {
    if (document.getElementById('last').checked) {
        removeFromList(girls, "bot");
    } else {
        removeFromList(girls, "top");
    }
    updateAll();
    insertBoysAndGirls();
});

reverseAllButton.addEventListener('click', () => {
    all.reverse();
    updateAll();
    insertBoysAndGirls();
});

sortAllButton.addEventListener('click', () => {
    comparisonCounter++;
    //confused about second to laster ask, did they want this or First letter capital ? <-- use normal sort if that's the case
    all.sort((a, b) => {
        if (comparisonCounter % 2 === 0)
            return (a.toLowerCase().localeCompare(b.toLowerCase()));
        else
            return (b.toLowerCase().localeCompare(a.toLowerCase()));
    });
    insertBoysAndGirls();
});

insertBoysAndGirls();

