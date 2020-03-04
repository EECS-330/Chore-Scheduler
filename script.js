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
var emails = [{}];

// Get the task modal
var modal_task = document.getElementById("myModal_task");

// Get the person modal
var modal_person = document.getElementById("myModal_person");

// Get the task button that opens the task modal
var btn_task = document.getElementById("myBtn_task");

// Get the person button that opens the person modal
var btn_person = document.getElementById("myBtn_person");

var personinfo = document.getElementById("personInformation");
//Get the submit button for task 
//var submit_task = document.getElementById("Submit_task");

// Get the <span> element that closes the task modal
var span_task = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the person modal
var span_person = document.getElementsByClassName("close")[1];

var span_personInfo = document.getElementsByClassName("close")[2];

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

span_personInfo.onclick = function() {
    personinfo.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
/*submit_task.onclick = function() {
    var description = document.getElementById("tdescription");
    var taskSection = document.getElementById("tasks");
    modal_task.style.display = "none";
    taskSection.innerHTML += '<section class="task-card">' +
        '<h3 class="task-name">Title of Task</h3>' + 
           `<p class="task-description">${description}</p>` +
         '<p class="task-duration">Duration: 10 minutes</p>' +
           '<input type="checkbox" id="completed1" name="task" class="task-completion" value="vachinde" onclick="greenify(this.id);">' +
           '<br>' +
    '</section>';
}*/

function submit_task(){
    var taskName = document.getElementById("tname").value;
    var description = document.getElementById("tdescription").value;
    var taskSection = document.getElementById("tasks");
    var timeInput = document.getElementById("tinput").value;
    var timeType = document.getElementById("timeType").value;

    //modal_task.style.display = "none";
    taskSection.innerHTML += `<section class="task-card">` +
        `<h3 class="task-name">${taskName}</h3>` +
           `<p class="task-description">${description}</p>` +
         `<p class="task-duration">Duration: ${timeInput} ${timeType}</p>` +
           `<input type="checkbox" id="completed1" name="task" class="task-completion" value="vachinde" onclick="greenify(this.id);">` +
           `<br>` +
    `</section>`;
    modal_task.style.display = "none";
    return false;
}

function submit_person(){
    var name_ele = document.getElementById("pname");
    var email = document.getElementById("email").value;
    console.log(email)
    var name = name_ele.value;
    emails[0][name] = [email, 0]
    var personSection = document.getElementById("people");
    //modal_task.style.display = "none";
    const person = document.createElement("section");
    person.setAttribute("class", "person-card")
    person.addEventListener("click", displayPerson);
    person.innerHTML = `
           <h3 class="person-name">${name}</h3>
           <img class="person-icon" src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png">
        `
    personSection.appendChild(person)
    modal_person.style.display = "none";
    return false;
}

function displayPeople(json){
    const element = document.getElementById("people");
    var user = window.location.hash.substr(1);
    var names = json[user].people;
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        const person = document.createElement("section");
        person.setAttribute("class", "person-card");
        var email = name.split(" ").join("") + "@gmail.com";
        var time = Math.floor(Math.random()*(100));
        emails[0][name] = [email, time];
        person.innerHTML = `
           <h3 class="person-name">${name}</h3>
           <img class="person-icon" src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png">
        `
        person.addEventListener("click", displayPerson);
        element.appendChild(person);
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
    if (event.target == modal_task || event.target == modal_person || event.target == personinfo) {
        event.target.style.display = "none";
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

function displayPerson() {
    var name = this.childNodes[1].innerHTML;
    console.log(name)
    var email = emails[0][name][0];
    var time = emails[0][name][1];
    console.log(emails)
    if (!email) {
        email = "Could not locate an email for this user"
    }
    var info = document.getElementById("information");
    info.innerHTML = `
    <a> Name: ${name} </a>
    <p></p>
    <a> Email: ${email} </a>
    <p></p>
    <a> Work Done This Week: ${time} Minutes</a>
    `
    personinfo.style.display = "block"
}

function throwError(message) {
    document.getElementById("Error").innerHTML = message;
}
