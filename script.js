function greenify(checkName)
{

    if (document.getElementById(checkName).checked)
    {
        document.getElementById(checkName).parentElement.style.background = '#D5F5E3';
        var res = checkName.split("completed");
        var num = res[1];
        num = parseInt(num);
        (calendarTasks[num])["bgColor"] = "Gray";
        calendar.clear();
        calendar.createSchedules(calendarTasks);
        calendar.render(true);
    } else {
        document.getElementById(checkName).parentElement.style.background = '#FADBD8';
        var res = checkName.split("completed");
        var num = res[1];
        num = parseInt(num);
        (calendarTasks[num])["bgColor"] = (allPeople[allTaskstoPeople[num]])["color"];
        calendar.clear();
        calendar.createSchedules(calendarTasks);
        calendar.render(true);
    }
}
var test = [1,2,3]

var allPeople = [{"id":0, "name": "John Smith", "color": '#99ddff'},{ "id":1, "color":"#FFB7B2", "name": "Bob Jones"}, {"id":2, "name": "Sam Johnson", "color":"#8FC1A9"}]
var allTasks = [["Trash", "Throwing out trash and replacing garbage bag", "Start: 10:30am", "Duration: 2 hrs", '2020-03-18T10:30:00', '2020-03-18T12:30:00'],
    ["Clean", "Vaccum room and mop floor", "Start: 8:30pm", "Duration: 2 hrs", '2020-03-17T20:30:00', '2020-03-17T22:30:00'], ["Errand", "Buy groceries", "Start: 11:00am", "Duration: 30 minutes", '2020-03-19T11:00:00', '2020-03-19T11:30:00'],
    ["Clean", "cleaning bathroom", "Start: 3:00pm", "Duration: 1 hr", '2020-03-19T14:30:00', '2020-03-19T15:30:00'],
    ["Errand", "Buy toilet paper", "Start: 2:00pm", "Duration: 30 minutes", '2020-03-015T14:00:00', '2020-03-015T14:30:00']];
var allTaskstoPeople = [0, 1, 1, 0, 2];

var Dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var Colors = [ '#99ddff','#FFB7B2','#8FC1A9','#FFDAC1', '#E2F0CB','#C7CEEA', '#AFD5AA' , '#FF9AA2'  ]
var calendarTasks = [{}];

//var Colors = ["Red", "Blue", "Orange", "Green", "Blue", "Pink", "White", "Purple"];

//var people = [{"id":0,"name":"User0", "people":["John Smith", "Bob Jones", "Sam Johnson"]},{"id":1,"name":"User1", "people": ["William", "Jeb", "Emily", "Alice"]}]

/*var tasks = [{"id":0,"tasks":[["Trash", "Throwing out trash and replacing garbage bag", "Start: 12:30pm", "Duration: 2 hrs", '2020-03-04T12:30:00', '2020-03-04T14:30:00'],
        ["Clean", "Vaccum room and mop floor", "Start: 8:30pm", "Duration: 2 hrs", '2020-03-05T20:30:00', '2020-03-05T22:30:00']]},
    {"id":1,"tasks":[["Errand", "Buy groceries", "Start: 11:00am", "Duration: 30 minutes", '2020-03-05T11:00:00', '2020-03-05T11:30:00'],
            ["Clean", "cleaning bathroom", "Start: 3:00pm", "Duration: 1 hr", '2020-03-06T14:30:00', '2020-03-06T15:30:00'],
            ["Errand", "Buy toilet paper", "Start: 2:00pm", "Duration: 30 minutes", '2020-03-02T14:00:00', '2020-03-02T14:30:00']]}];*/
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

//basically randomly allocates tasks to people right now
function allocateTasksToPeople(){
    var tasks = allTasks;
    var numTasks = tasks.length;

    console.log("allocate tasks to people called")

    var newArr = [];
    var numPeople = allPeople.length;
    for (i = 0; i < numTasks; i++){
        var ran = Math.floor(Math.random() * Math.floor(numPeople));
        newArr.push(ran);
    }
    allTaskstoPeople = newArr;
    console.log(tasks)
    console.log(allTaskstoPeople)
    displayTasks();
}

function allnumeric(inputtxt)
{
    var numbers = /^[0-9]+$/;
    if(inputtxt.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Please input numeric characters only');
        return false;
    }
}

function submit_task(event){
    var taskName = document.getElementById("tname").value;
    var description = document.getElementById("tdescription").value;
    //var taskSection = document.getElementById("tasks");
    var timeInput = document.getElementById("tinput").value;
    var timeType = document.getElementById("timeType").value;
    var timeInputBox = document.getElementById("tinput")
    if (!allnumeric(timeInput)){
        return;
    }
    var newDates = [];
    //loops through all possible dates
    for (var i = 0; i < Dates.length; i++){
        if (document.getElementById(Dates[i]).checked){
            newDates.push(Dates[i]);
            console.log("checked");
        }
    }
    console.log(newDates);

    //right now creates a given date
    //make sure to test you only check one day checkbox
    //TODO:
    //randomly generate a time and date, instead of given date and time
    //check that it doesnt interfere w any already included tasks
    //if it does, repeat until randomly generated info work
    //add to list with that randomly generated date with the user inputted duration

    for (var j = 0; j < newDates.length; j++){
        var newTask = [taskName, description, "Start: 8:30pm", "Duration: " + timeInput + timeType,'2020-03-16T20:30:00', '2020-03-16T21:30:00' ];
        allTasks.push(newTask);
        console.log(newTask);
    }

    /*for (var j = 0; j < newDates.length; j++){
        var hour = Math.floor(Math.random() * Math.floor(12)); // Assuming 12 hours are up for task completion
        var hour_12 = hour + 12;
        var hour_13 = hour + 13;
        var hour_string = hour.toString();
        var minute = Math.floor(Math.random() * Math.floor(timeArray.length)); // Assuming 12 hours are up for task completion
        //var newTask = [taskName, description, "Start: " + hour_string + ":" + timeArray[minute] + "pm", "Duration: " + timeInput + timeType,'2020-03-09T' + hour_12.toString() + ':' + timeArray[minute] + ':00', '2020-03-09T' + hour_13.toString() + ':' + timeArray[minute] + ':00']; 
        var newTask = {"Title" : taskName, "Description" : description, "Duration" : timeInput_val, "Day" : newDates[0]};
        allTasks.push(newTask);
        console.log(newTask);
    }*/

    modal_task.style.display = "none";
    var form_task = document.getElementById("task_form");
    form_task.reset();
    return false;
}



/*
function submit_task2(){
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
}*/


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

    newPerson = {};
    newPerson["id"] = allPeople.length;
    newPerson["name"] = name;
    newPerson["color"] = Colors[newPerson["id"]];
    allPeople.push(newPerson);

    person.style.backgroundColor = newPerson["color"];
    personSection.appendChild(person);
    modal_person.style.display = "none";

    console.log(allPeople);

    return false;

}
/*
function displayPeople2(json){
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
}*/

//new displayPeople function, color codes
function displayPeople(json){
    const element = document.getElementById("people");
    var user = window.location.hash.substr(1);
    var names = allPeople;
    for (var i = 0; i < names.length; i++) {
        var name = names[i].name;
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
        person.style.backgroundColor = names[i].color;
        element.appendChild(person);
    }
}

/*
function displayTasks2(json) {
    const element = document.getElementById("tasks");
    var user = window.location.hash.substr(1);
    var tasks = json[user].tasks
    var calendarTasks = [{}]
    for (var i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const thing = document.createElement("section");
        thing.setAttribute("class", "task-card");
        thing.setAttribute("id", "task" + i);
        const taskid = "completed" + i;
        thing.innerHTML = `
            <h3 class="task-name">${task[0]}</h3>
            <p class="task-description">${task[1]}</p>
            <p class="task-duration">${task[2]}, ${task[3]}</p>
            <input type="checkbox" id=${taskid} class="task-completion" value="vachinde" onclick="greenify(this.id);">
            <br>
        `;
        var starttime = task[4];
        var endtime = task[5];
        calendarTasks[i] = {id: i, calendarId: '1', title: task[0], body: task[1], category: 'time', dueDateClass: '', start: starttime, end: endtime, bgColor: 'DeepSkyBlue'};
        element.appendChild(thing)
    }
    calendar.createSchedules(calendarTasks);
}*/


//new DisplayTasks
function displayTasks(json) {
    const element = document.getElementById("tasks");
    element.innerHTML = '';
    var user = window.location.hash.substr(1);
    var tasks = allTasks;
    displayProfile(user);
    for (var i = 0; i < allTasks.length; i++) {
        const task = tasks[i];
        console.log(tasks[i]);
        var starttime = task[4];
        var endtime = task[5];
        calendarTasks[i] = {id: i, calendarId: '1', title: task[0], body: task[1], category: 'time', dueDateClass: '', start: starttime, end: endtime, bgColor: allPeople[allTaskstoPeople[i]].color};
        if (allTaskstoPeople[i]!= user)
            continue;
        const thing = document.createElement("section");
        thing.setAttribute("class", "task-card");
        thing.setAttribute("id", "task" + i);
        const taskid = "completed" + i;
        thing.innerHTML = `
            <h3 class="task-name">${task[0]}</h3>
            <p class="task-description">${task[1]}</p>
            <p class="task-duration">${task[2]}, ${task[3]}</p>
            <input type="checkbox" id=${taskid} class="task-completion" value="vachinde" onclick="greenify(this.id);">
            <br>
        `;
        element.appendChild(thing)
    }
    calendar.clear();
    calendar.createSchedules(calendarTasks);
    calendar.render(true);
    return false;
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
    if (input > allPeople.length) {
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

function check(){
    console.log("ON LOAD WAS CALLED");
}

function deletetask(id) {
    var id = "task" + id;
    document.getElementById(id).remove();
}

function displayProfile(id) {
    var name = allPeople[id]["name"];
    var a = document.getElementById("myprofile");
    var user = window.location.hash.substr(1);
    var taskTime = 0;
    for (var i = 0; i < allTasks.length; i++) {
        if (allTaskstoPeople[i]!= user)
            continue;
        var x = allTasks[i][3];
        //console.log(x);
        str = x.split(" ");
        var y = parseInt(str[1]);
        console.log(str[2]);
        if (str[2]=="hr" || str[2] == "hrs")
            taskTime+=y*60;
        else
            taskTime+=y;
    }
    var email = name.split(" ").join("") + "@gmail.com";
    a.innerHTML = `
    <h1>My Information</h1>
    <div style = "text-align: left;"> <b>Logged in:</b> ${name}</div>
    <div style = "text-align: left;"> <b>Email:</b> ${email}</div>
    <div style = "text-align: left;"> <b> Total time for my tasks:</b> ${taskTime} minutes</div>
`
}
