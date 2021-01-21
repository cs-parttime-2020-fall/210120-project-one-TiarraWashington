console.log(`21 01 20 HTML CSS JS Project One`);

// selected input using querySelector
let assignedTo = document.querySelector("#assignedTo");
let taskAssigned = document.querySelector("#taskAssigned");
// selected checkbox using querySelector
let istaskUrgent = document.querySelector("#istaskUrgent");
// console.log(assignedTo); console.log(taskAssigned);console.log(istaskUrgent);
// selected submit button using querySelector
let submitBtn = document.querySelector("#submitBtn");
// console.log(submitBtn);

// selected h4 using id of urgent task using querySelector
let urgentTask = document.querySelector("#urgentTask");
// console.log(urgentTask);
// selected add button using querySelector
let addBtn = document.querySelector("#addBtn");
// console.log(addBtn);
// selected h4 using id of not urgent using querySelector
let notUrgent = document.querySelector("#notUrgent");
// console.log(notUrgent);
// remove button using querySelector
let removeBtn = document.querySelector("#removeBtn");
// console.log(removeBtn);

submitForm = (event) => {
    event.preventDefault(); // stops page from reloading
    // console logged information to make sure it was reading correctly in the console
    console.log(assignedTo.value);
    console.log(taskAssigned.value);
    console.log(istaskUrgent.checked); // used check property to
    if (istaskUrgent.checked) { // if checkbox is checked update value of urgent task display element by appending form submission
        urgentTask.innerHTML += `<div>${assignedTo.value} : ${taskAssigned.value} `
    } else { // if checkbox is not checked update value of not urgent task display element by appending form submission
        notUrgent.innerHTML += `<div>${assignedTo.value} : ${taskAssigned.value} `
    }
    // clear values 
    assignedTo.value = ""
    taskAssigned.value = ""
} 
// added an event listener that will update when chechbox is checked
istaskUrgent.addEventListener("click", submitForm);

