const todoList = [{
    name: 'Wash Dishes',
    dueDate: '2024-04-20'}];

displayTodo();

function displayTodo(){
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html =
        `<div class="name-input">
            ${name}
        </div> 
        <div class="name-input">
            ${dueDate}
        </div>
        <button class="delete" onclick="
            todoList.splice(${i}, 1); displayTodo();">
                Delete
            </button>`
        todoListHTML += html;
    }

    document.querySelector('.arrshow').innerHTML = todoListHTML;
}
function addTodo(){
    const inputElement = document.querySelector('.name-input');
    const dateInputElement = document.querySelector('.date-input');
    const name = inputElement.value;
    const date = dateInputElement.value
    todoList.push({name: name, dueDate : date});
    inputElement.value = '';
    displayTodo();
}


/*const arr1 = [];

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        arr1.push('FizzBuzz');
    } else if (i % 3 === 0) {
        arr1.push('Fizz');
    } else if (i % 5 === 0) {
        arr1.push('Buzz');
    } else {
        arr1.push(i);
    }
}*/


/*setInterval(function(){console.log('hi');},5000); for making a timer function*/
/*const List =[
    'wash dishes',
    'make dinner',
    'watch youtube'
];
for (let i = 0; i < List.length; i++){
    const value = List[i];
    console.log(value);
}
const arr = [1,1,3];
let sum = 0;
for(let i = 0; i <arr.length; i++){
    const num = arr[i];
    sum += num;
}
console.log(sum);
const dArr=[];
let doub ;
for(let i = 0; i <arr.length; i++){
    const num = arr[i];
    doub = num + num;
    dArr.push(doub);
}
console.log(dArr);*/