console.log(`21 01 20 HTML CSS JS Project One`);

// selected input using querySelector
let taskAssigned = document.querySelector("#taskAssigned");
let taskdueDate = document.querySelector("#taskdueDate");

// selected task due date using querySelector
let taskUrgency = document.querySelector("#taskUrgency");
// selected checkbox using querySelector
console.log(taskAssigned); console.log(taskdueDate); console.log(taskUrgency);
// selected submit button using querySelector
let submitBtn = document.querySelector("#submitBtn");
// console.log(submitBtn);

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
    if (taskUrgency.value == "urgent") { 
        urgentTask.innerHTML += `<div> Task : ${taskAssigned.value} : Due Date : ${taskdueDate.value}`
    } else { 
    notUrgent.innerHTML += `<div> Task : ${taskAssigned.value} : Due Date : ${taskdueDate.value}`
    }
// clear values 
taskAssigned.value = "";
taskdueDate.value = "";
}
// added an event listener that will update when chechbox is checked
submitBtn.addEventListener("click", submitForm);
submitBtn.addEventListener("onclick", ;
