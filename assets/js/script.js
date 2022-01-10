// var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// buttonEl.addEventListener("click",function(){
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
// });

 var taskFormHandler = function (event) {
     event.preventDefault();

     var taskNameInput = document.querySelector("input[name='task-name']").value;
     var taskTypeInput = document.querySelector("select[name='task-type']").value;

     if (!taskNameInput || !taskTypeInput) {
         alert("You need to fill out the task form!");
         return false;
     }
     formEl.reset();
     
     // package up data as an object
     var taskDataObj = {
         name: taskNameInput,
         type: taskTypeInput
     };
     // send it as an argument to createTaskEl
     createTaskEl(taskDataObj);
    }
//     // create list item  
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";

//     // create div to hold task info and add to list item
//     var taskInfoEl = document.createElement("div");
//     taskInfoEl.className = "task-info";

//     //Add HTML
//     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
//     listItemEl.appendChild(taskInfoEl);

//     //listItemEl.className = "task-item";
//     //listItemEl.textContent = taskNameInput;

//     tasksToDoEl.appendChild(listItemEl);
// };

var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", taskFormHandler);