var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];
var all = boys.concat(girls);
const boyArea = document.querySelector("#boys");
const girlArea = document.querySelector("#girls");
const allArea = document.querySelector("#all");
const addBoyButton = document.querySelector("#newboy");

function insertList( arrayElements, documentType ) {
    let ul = document.createElement('ul');
    for(let i = 0; i < arrayElements.length; i++) {
        let li = document.createElement('li');
        li.append(arrayElements[i]);
        ul.appendChild(li);
    }
    documentType.appendChild(ul);
}

function addElementToList( array, element) {
    array.push(element);
}

function insertBoysAndGirls() {
    addElementToList(boys, "konrad");
    addElementToList(girls, "birgit");
    insertList(boys, boyArea);
    insertList(girls, girlArea);
    insertList(all, allArea);
}

addBoyButton.addEventListener('click', () => {
    
});


insertBoysAndGirls();

