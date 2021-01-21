console.log(`21 01 20 HTML CSS JS Project One`);

// selected input using querySelector
let assignedTo = document.querySelector("#assignedTo");
let taskAssigned = document.querySelector("#taskAssigned");
// selected checkbox using querySelector
let istaskUrgent = document.querySelector("#istaskUrgent");
// console.log(assignedTo); console.log(taskAssigned);console.log(istaskUrgent);
let submitBtn = document.querySelector("#submitBtn");
// console.log(submitBtn);

let urgentTask = document.querySelector("#urgentTask");
// console.log(urgentTask);
let addBtn = document.querySelector("#addBtn");
// console.log(addBtn);

let notUrgent = document.querySelector("#notUrgent");
// console.log(notUrgent);
let removeBtn = document.querySelector("#removeBtn");
// console.log(removeBtn);

submitForm = (event) => {
    event.preventDefault(); // stops page from reloading
    console.log(assignedTo.value);
    console.log(taskAssigned.value);
    console.log(istaskUrgent.checked);
    if (istaskUrgent.checked){ // will go back and correct
        urgentTask.innerHTML += `<div>${assignedTo.value} : ${taskAssigned.value} `
} else {
    notUrgent.innerHTML += `<div>${assignedTo.value} : ${taskAssigned.value} `
}
// clear values 
assignedTo.value = ""
taskAssigned.value = ""
}
istaskUrgent.addEventListener("click", submitForm);

