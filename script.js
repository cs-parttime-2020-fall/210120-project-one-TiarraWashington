console.log(`21 01 20 HTML CSS JS Project One`);

// selected input using querySelector
let assignedTo = document.querySelector("#assignedTo");
let taskAssigned = document.querySelector("#taskAssigned");
// selected checkbox using querySelector
let istaskUrgent = document.querySelector("#istaskUrgent");
//
let buttn = document.querySelectorAll(".btn btn-primary");
// 
let buttton = document.querySelectorAll(".btn btn-danger");

submitForm = (event) => {
    event.preventDefault(); // stops page from reloading
    console.log(assignedTo.value);
    console.log(taskAssigned.value);
    console.log(istaskUrgent.checked);
    if (istaskUrgent.checked){ // will go back and correct
        assignedTo.innerHTML += `<div>${assignedTo.value} : ${taskAssigned.value} `
} else {
    taskAssigned.innerHTML += `<div>${assignedTo.value} : ${taskAssigned.value} `
}
// clear values 
assignedTo.value = ""
taskAssigned.value = ""
// 
istaskUrgent.addEventListener("click", submitForm);

