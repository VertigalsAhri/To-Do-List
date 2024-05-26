const inputBox = document.getElementById("input-box")
const listContainer= document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){ // if input box is empty do something
        alert("you must write somethin!"); // warning message 
    }else{
        let li = document.createElement("li") // creates a new HTML list item
        li.innerHTML = inputBox.value; // it assigns the value entered by the user in that box, whatever user types in will be displayed
        listContainer.appendChild(li); // appedns-adds newly created list item (li) as a child element 
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){  // whenever we click do something
    if(e.target.tagName ==="LI"){ // if we clicked LI it will do checked 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){ // if clicked element is SPAN it will remove that element
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); // function that saves data to variable called "data", inside of listcontainer
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // it gives us all content from data
}

showTask();