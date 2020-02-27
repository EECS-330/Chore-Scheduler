function greenify(checkName)
{
   
   if (document.getElementById(checkName).checked) 
  {
document.getElementById(checkName).parentElement.style.background = '#9fdf9f';
  } else {
document.getElementById(checkName).parentElement.style.background = '#ffcccc';
  }  
}
var test = [1,2,3]
var people = [{"id":0,"name":"User0", "people":["John Smith", "Bob Jones", "Sam Johnson"]},{"id":1,"name":"User1", "people": ["William", "Jeb", "Emily", "Alice"]}]
var tasks = [{"id":0,"tasks":[["Trash", "Throwing out trash and replacing garbage bag", "10 minutes"], ["Clean", "Vaccum room and mop floor", "45 minutes"]]},
    {"id":1,"tasks":[["Errand", "Buy groceries", "60 minutes"],["Clean", "cleaning bathroom", "30 minutes"], ["Errand", "Buy toilet paper", "15 minutes"]]}]

// Get the task modal
var modal_task = document.getElementById("myModal_task");

// Get the person modal
var modal_person = document.getElementById("myModal_person");

// Get the task button that opens the task modal
var btn_task = document.getElementById("myBtn_task");

// Get the person button that opens the person modal
var btn_person = document.getElementById("myBtn_person");


// Get the <span> element that closes the person modal
var span_person = document.getElementsByClassName("close")[1];

// Get the <span> element that closes the task modal
var span_task = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

btn_task.onclick = function() {
    modal_task.style.display = "block";
}

// When the user clicks the button, open the modal
btn_person.onclick = function() {
    modal_person.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_task.onclick = function() {
    modal_task.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span_person.onclick = function() {
    modal_person.style.display = "none";
}

function displayPeople(json){
    const element = document.getElementById("people");
    var user = window.location.hash.substr(1);
    var names = json[user].people;
    for (var i = 0; i < names.length; i++) {
        const person = document.createElement("section");
        person.setAttribute("class", "person-card")
        person.innerHTML = `
           <h3 class="person-name">${names[i]}</h3>
           <img class="person-icon" src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png">
        `
        element.appendChild(person)
    }
}

function displayTasks(json) {
    const element = document.getElementById("tasks");
    var user = window.location.hash.substr(1);
    var tasks = json[user].tasks
    for (var i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const thing = document.createElement("section");
        thing.setAttribute("class", "task-card");
        const taskid = "completed" + i;
        thing.innerHTML = `
            <h3 class="task-name">${task[0]}</h3>
            <p class="task-description">${task[1]}</p>
            <p class="task-duration">${task[2]}</p>
            <input type="checkbox" id=${taskid} class="task-completion" value="vachinde" onclick="greenify(this.id);">
            <br>
        `
        element.appendChild(thing)
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_task) {
        modal_task.style.display = "none";
    }
    else if (event.target == modal_person) {
        modal_person.style.display = "none";
    }
}

function load_home() {
    var input = document.getElementById("userInput").value;
    if (isNaN(input)) {
        throwError("Invalid input, input must be integer")
    }
    if (input > people.length) {
        throwError("Not a valid userID, there are currently " + people.length + " users")
    } else {
        window.location.assign("./home.html#" + input);
        // window.addEventListener("hashchange", function (event){
        //     alert('change');
        // },false);
    }
}

function throwError(message) {
    document.getElementById("Error").innerHTML = message;
}