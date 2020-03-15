# project

Members:
Anthony Chen
Jonathan Liu
Priya Kini
Sahil Doshi

# Problem & Related Work (P1)
As college students, we understand that living with roommates sometimes comes with challenges. Keeping a tidy living space is a priority to many people and oftentimes conflict arises over the distribution of chores. It can be a challenge to organize many roommates’ schedules at once and to ensure that all chores are accounted for and allocated in a fair manner. Furthermore, during an era in which convenience is prioritized, facilitating a chore scheduler could be very beneficial to any party living together.

One attempt at a solution is ChoreBuster, an online service that automatically generates a weekly chore schedule and distributes it to all members of a household by email. It accounts for individuals’ personal preferences and time constraints, making it easier than communicating in-person or over text. The major drawback to this service is its user interface and lack of a calendar; instead of receiving a calendar through email, most people would rather view their chore assignments on a calendar instead of opening a separate email. 

Our team aimed to build upon this existing effort by having users input a list of chores that need to be done every week and the duration of each chore, ensuring more personalization options than ChoreBuster. Then, the planner would fairly split up the chores among the roommates much like ChoreBuster, with the exception of having the schedule displayed on the user interface as a calendar.  The benefits of this are convenience and personalization--ideally, chores will only be assigned to a person when they are free which ensures that they have time to complete the task. Additionally, automatically assigning tasks prevents conflict between members of the group, because there can be no suspicion of bias, and would save time from trying to work it out themselves
# User Research (P2 & P3)
We wished to research our target user population in order to help validate assumptions and learn more about the root causes of ineffective chore scheduling and execution. We did this by performing interviews with individuals who have had experience with living with roommates, including four college students who live off-campus, in a dormitory, or in a Greek house. We asked questions that helped us affirm our assumptions and better understand our target users. These questions included: “How does chore division work for you where you are currently living?” and “Would you be comfortable with the idea of an app deciding each individual schedule?”.

Based on what we learned from the interviews, we decided to modify our problem statement. For instance, we learned that our app may be better suited for roommates who don’t know each other well because open communication would likely be more difficult or awkward among unfamiliar roommates. This changed our assumptions on which users may see most utility in our app. Thus, we decided to focus our attention on college students, who will very likely need to share a living space with unfamiliar individuals. Being in an unfamiliar environment could make it difficult for students to communicate with one another to arrange a chore schedule. This and other new information gave us inspiration for developing our personas and scenarios, giving us an outlet to analyze our user needs and goals of our app. Our personas included college students, working professionals, as well as grad students. Based on the personas and scenarios that we created, we came to four essential tasks that our app should support: “adding a new person or task to the schedule,” “accommodate multiple users in the same schedule,” “enable users to ‘check’ a chore when it has been completed,” and “(re)allocating tasks to each user.”

# Paper Prototyping (P4)
In order to test out early-stage conceptualizations, we used paper prototyping to explore a variety of different concepts by quickly visualizing and testing various ideas. The prototype we built is displayed in the video linked below.

https://youtu.be/UpT0eFWCh9c

We had three testers for our paper prototype complete various tasks that we developed during our previous project stage. All of the testers gave us positive feedback on the structure of the main page, including the layout of the tasks, people, and calendar. We also discovered various potential areas of improvement for our prototype. These include: neglecting to add a submit button for the form to add a task or person, unclearness of the statistics per user, and confusion over a preset button for adding tasks. To address these issues, we planned to add a clear submit button for every form, brainstorm ways to display the time distribution of tasks, and scrapped the preset idea as it caused too much confusion to all our testers. With all this information, we were also able to narrow down the tasks and components we wished to implement during our high-fidelity prototyping stage. 

# High-Fidelity Prototyping
Now we focused work on the prototyping and testing of our app. The following three sections show our iterative process through the initial prototyping stages we had.

## P5:

For P5, we focused on implementing the layout of the website where the tasks and people of the chore schedule are placed on the left side, a pie chart displaying chore distribution statistics are on the right side, and the calendar occupying the bulk portion of the page in the middle. Additionally, we designed the task addition form and implemented a “task completed feature” where the user could select the checkbox at the upper right hand corner of the task, and the task would turn green. We did not receive major feedback for this component since no functionalities had actually been added yet. 

## P6:

For this component, we added the ability to add a task and a person to the schedule, making the interface more dynamic than it was last week. Here, we received significant feedback about how the interface still did not really have any meaningful functions that would make the website meaningful, so we were told to implement an interactive calendar as quickly as possible and to begin integrating functionalities that could, at the very least, simulate what the user experience would look like for this chore scheduling app.

## P7:

This week, we added the interactive calendar using the Toast calendar API where tasks could be visualized on the calendar and deleted if necessary. Additionally, we made the names under the People title interactive so when the user clicks on a name, a dialog box appears that shows how much time that individual has been assigned to complete chores. At this point, we still had not connected the calendar to the task list and the people list, so that was the first thing we did after P7.


## Tasks

With all these prototyping stages and feedback in mind, we ensured that users could complete the following tasks on our app: 

### Logging into account and viewing user profile
[pic of log-in screen]
Users are able to log into their account via a log-in screen shown above. Features such as the text box and submit button made it intuitive for users to get access to their own account and schedule.
[pic of user-profile]
In order for the user to access their profile, they can click on their name on the “People” side-tab. Using feedback from P7 prototype testing, we added an indicator on the top right to show who is currently logged into the app. 

### Adding a person to the schedule
[pic of add person form ] [pic of person side-tab]
Users can add additional people to the schedule by clicking on the plus button next to “People.” which creates a pop-up form. After filling in the person’s information, the individual is added to the list in the “People” side-tab.

[pic of people profile]
Users can view information of people on the schedule by clicking on the name of a person in the “People” side-tab. Using user feedback from P7 prototype testing, we color-coded each of the names in order to make it easier to distinguish each person and his or her chores. Each of these profiles includes name, email, and work done this week, allowing users to keep track of the time distribution of chores.

### Adding a task to the schedule
[pic of add task form] [pic of task side-tab] 
Users can add tasks to the schedule by clicking on the plus button next to “Tasks,” which creates a pop-up form. After filling in the task’s details, the task is added to the list in the “Tasks” side-tab and to the pool of tasks to be allocated. This way, the user sees clear usability of the form, something that TAs stressed in their feedback

### Interacting with tasks on calendar and task side-bar (completing and deleting)
[pic of completing a task and what changes]
Users can mark a task as complete by clicking the checkmark associated with the task on the task side-bar. Doing this turns the task green on the task side-bar and gray on the calendar, signifying that the task is completed. The associativity of the task side-bar and calendar was often brought up during P5 and P6 prototyping stages, which led to this feature. 

[pic of deleting task and what changes]
Users can also delete a task by clicking on a task on the calendar and clicking “Delete”. This removes the task from both the calendar and the task side-bar. 

### (Re)allocating tasks to people
[pic of reallocate button] [pic of schedule before and after pressing]
Once all tasks are added to the task pool, the user may allocate the tasks such that all the tasks are divided among the individuals in the People section by clicking “Reallocate”. If the user wishes to change the allocation, they can click the reallocate button to have a different schedule assignment.

## Components
Our app has the following three components which we chose using feedback from user research and paper prototyping: 

### Log-in screen and user profile 
In order for users to view their own individualized schedule, they must log-in to their account via the log-in screen. We provided support for two users (“0” and “1”) which have different account information and schedules. To view more details and for the user to know whose account they are viewing, users may click on their name in the people side-tab, which displays a pop-up when clicked. In addition, the top right of the app shows who is logged in currently.

### Task side-bar, people side-bar, and data collection form for adding tasks and people
Users can view tasks and people currently associated with the schedule in side-bars to the left of the calendar. These sections include an option to add a person and task via a pop-up form which collects data from users. These forms combined contain more than five fields, including text and checkbox fields.  We also had our forms support data validation (e.g. restrictions on task duration input to only numbers). The forms are intuitive to use according to user testers and users aided by example inputs in each text box.

### Custom calendar for viewing schedule and interacting with tasks
To view their schedule, users can view their custom calendar which is generated by allocating the tasks to each of the people. The calendar has a weekly view since chores tend to vary week-to-week. The calendar highlighted on the app as the main feature and displays important information on the users schedule. Users are able add events to our calendar by clicking on the add button in the my tasks tab, which adds the task to the task pool and then clicking the reallocate button, displaying the new task on the calendar.

# Reflection
During the development of this application, we first focused on outlining the layout of the main page and then worked to implement functional behaviors. The advantage to this approach was that we did not have to focus on visual design and functionality at the same time, so we could ensure each individual part was properly executed. Though we focused on each area individually, we struggled with developing a solidified plan as to which features were necessary and should be implemented in order for our application to serve its purpose. Because of this inefficient planning, there were times where we would develop a feature and then alter it multiple times because it didn’t align with a design that we would devise later. Therefore, if we were to do this process again, we would develop a more detailed plan that would make development of features more seamless. 

In terms of future development, our first priority would be in creating a feature where people could upload a Google Calendar template to the app page, and the app would process these calendars and assign tasks accordingly. Once this feature is implemented, we would then focus on providing a more detailed analytics page where all members of a house can view how chores are distributed for this week and how chores have been historically distributed to ensure that the chores are being fairly distributed. Finally, we would implement a manual override option where individuals can change the assigned chore schedule if unexpected circumstances arise for an individual that prevent him or her from performing his or her chore. 

# Links

Team’s repository
https://github.com/EECS-330/Chore-Scheduler

Working version of your prototype
https://eecs-330.github.io/Chore-Scheduler/

The prototype is best viewed using Google Chrome. First the user logs into our app by entering their UserID (0,1,2) and clicking the “Submit” button. Then the user can view their own calander and use the interface accordingly.


