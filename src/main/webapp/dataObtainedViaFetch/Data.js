//a)
//you get back: a json object
//Observation: a new json object with id 10 is returned

const buttonUserId = document.getElementById('buttonId1');
const inputFromUser = document.getElementById('userInput');
const divFirst = document.getElementById('divId1');
const buttonAll = document.getElementById('buttonId2');
const tableBody = document.querySelector("#tbody");
let arrayOfJsonObjects = [];

buttonUserId.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + inputFromUser.value).then(response => {
        return response.json();
    }).then(data => {
        divFirst.append(JSON.stringify(data));
    });
});

buttonAll.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => {
            return response.json();
        }
    ).then(data => {
        arrayOfJsonObjects = data; //remember you cannot use push as this will put all 10 elements into [0
        generateDataSet(); //this must be within the method as fetch is async
    });

});


function generateDataSet( ) {
    for(let i = 0; i < arrayOfJsonObjects.length; i++) {
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let tr = document.createElement('tr');
        td.append(arrayOfJsonObjects[i].name);
        td2.append(arrayOfJsonObjects[i].phone);
        tr.appendChild(td);
        tr.appendChild(td2);
        tableBody.appendChild(tr);
    }

    //console.log(arrayOfJsonObjects[0][0].name);
}


