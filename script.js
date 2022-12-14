/*Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente 
con un ciclo while.  (anche brutalmente, basta che si vedano)*/

const listElement = document.getElementById('list');

const shoppingList = ['uova','latte','pane']; 
let i = 0;
let pointOnList = `<ul>`;
while(i<shoppingList.length){
    pointOnList += `<li>${shoppingList[i]}</li>`;
    console.log(shoppingList[i]);
    i++;
}
pointOnList += `</ul>`;
listElement.innerHTML = pointOnList;