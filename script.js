const todoInput = document.getElementById("todoInput")
const addButton =  document.getElementById("addTodo")
const updateTodo = document.getElementById("updateTodo")
const todoList = document.getElementById("todoList")

updateTodo.style.display="none"
let count =1;

function addTodo()
{
    const todo = todoInput.value.trim();//removing extra space
    if(todo!=="")
    {
        const listItem = document.createElement("li")
        listItem.innerHTML=`${count++}. ${todo}
         <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>`
        // count = count+1;
        todoList.appendChild(listItem)
        todoInput.value=""
        
    }
}
addButton.addEventListener("click",addTodo)

todoList.addEventListener("click",function(e){
    const listItem = e.target.parentElement;
    console.log(listItem)
    console.log(e.target.className)
    console.log(e.target)
    if(e.target.className==="delete-button")
    {
        todoList.removeChild(listItem);
        todoInput.value=""
    }
    else if(e.target.className==="edit-button")
    {
      
    }
})