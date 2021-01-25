console.log(`21 01 20 HTML CSS JS Project One`);

// selected input using querySelector
let taskAssigned = document.querySelector("#taskAssigned");
let taskdueDate = document.querySelector("#taskdueDate");
// selected submit button using querySelector
let submitBtn = document.querySelector("#submitBtn");
// console.log(submitBtn);

// selected task in the urgent and non-urgent task list using querySelector
let taskUrgency = document.querySelectorAll("#taskUrgency");
let urg = document.querySelector("#urg");
let noturg = document.querySelector("#noturg");

// stuck on last two steps
function hide(){
for (i =0; i < taskUrgency.length; i++) { // iterate through task
    while () {
    confirm("Do you want to delete clicked task");
}

// used console log to make sure the correct elements are running in the browser
// console.log(taskAssigned); console.log(taskdueDate); console.log(urg); console.log(noturg);

// selected h4 using id of urgent task using querySelector
let urgentTask = document.querySelector("#urgentTask");
// console.log(urgentTask);
// selected h4 using id of not urgent using querySelector
let notUrgent = document.querySelector("#notUrgent");
// console.log(notUrgent);

submitForm = (event) => {
    event.preventDefault(); // stops page from reloading

    // console logged information to make sure it was reading correctly in the console
    console.log(taskAssigned.value);
    console.log(taskdueDate.value);
    console.log(taskUrgency.value);

    // append values
    if (taskUrgency.value == "Urgent") {
        urgentTask.innerHTML += `<div> Task : ${taskAssigned.value} : Due Date : ${taskdueDate.value}`
    } else {
        notUrgent.innerHTML += `<div> Task : ${taskAssigned.value} : Due Date : ${taskdueDate.value}`
    }
  
    // clear values from fields by referencing value equal to empty strings
    taskAssigned.value = "";
    taskdueDate.value = "";
    // clear property from fields by referencing value name
    taskUrgency.value = "Clear form";
}
// added an event listener that will output form submission
submitBtn.addEventListener("click", submitForm);
taskUrgency.addEventListener("click", hide);

