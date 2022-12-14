let myFruits = []
function addTodo() {
    if (myInput.value == "") {
        alertMessage.innerHTML = `Please enter a Todo to be added`;
        alertMessage.style.backgroundColor = "rgb(247, 204, 204)"
        alertMessage.style.color = "rgb(255, 0 ,0)"
        alertMessage.style.visibility = "visible"
    } else {
        myFruits.push(myInput.value);
        alertMessage.innerHTML = `New Todo added successfully`
        alertMessage.style.backgroundColor = "rgba(200, 247, 197, .5)"
        alertMessage.style.color = "green"
        alertMessage.style.visibility = "visible"
    }
    newTask()
}

function delTodo(userIndex) {
    var userResponse = confirm(`Are you sure you want to delete this Todo? This action cannot be undone`);
    if (userResponse == true) {
        myFruits.splice(userIndex, 1);
        alertMessage.innerHTML = `Todo Deleted Successfully!`
        alertMessage.style.backgroundColor = "rgb(247, 204, 204)"
        alertMessage.style.color = "rgb(255, 0 ,0)"
        alertMessage.style.visibility = "visible"
       
    } else {
        myOutput.innerHTML =  myFruits;
        alertMessage.innerHTML = `You just cancelled, your Todo is not deleted`
        alertMessage.style.backgroundColor = "rgba(200, 247, 197, .5)"
        alertMessage.style.color = "green"
        alertMessage.style.visibility = "visible"
    }
    newTask()
};


function editTodo(userIndex) {
    if (myInput.value == "") {
        alertMessage.innerHTML = `Please enter a Todo to be updated`;
        alertMessage.style.backgroundColor = "rgb(247, 204, 204)"
        alertMessage.style.color = "rgb(255, 0 ,0)"
        alertMessage.style.visibility = "visible"
    } else {
        myFruits.splice(userIndex, 1, myInput.value)
        alertMessage.innerHTML = `Your Todo has been updated successfully`
        alertMessage.style.backgroundColor = "rgba(200, 247, 197, .5)"
        alertMessage.style.color = "green"
        alertMessage.style.visibility = "visible"
    }
    newTask();
}

function delAll() {
    myFruits = [];
    myOutput.innerHTML =  myFruits;
}

function newTask() {
    myOutput.innerHTML = ""
    myInput.value = "";
    for (let index = 0; index < myFruits.length; index++) {
         myOutput.innerHTML += `
         <div class = "col">
            <h1>${myFruits[index]} </h1>
            <div class= "actionBtn">
                <button class="warning" onclick="editTodo(${index})">Edit Todo</button>
                <button class="danger" onclick="delTodo(${index})">Delete Todo</button>
            </div>
         </div>`;
        
    }
}
