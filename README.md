# HumanCollab

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

### Instructions 
Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
Because this Challenge will require the use of the Inquirer package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.
Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.
This application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video and add it to the README of your project.
Refer to the Video Submission Guide Links to an external site. on the Full-Stack Blog for additional guidance on creating a video.


#### Grading Requirements
This Challenge is graded based on the following criteria:
Deliverables: 15%

A sample HTML file generated using the application must be submitted.
Your GitHub repository containing your application code.
Walkthrough Video: 32%

A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
The walkthrough video must show all four tests passing from the command line.
The walkthrough video must demonstrate how a user would invoke the application from the command line.
The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
The walkthrough video must demonstrate a generated HTML file that matches the user input.
Technical Acceptance Criteria: 40%

Satisfies all of the preceding acceptance criteria plus the following:
Uses the Inquirer package Links to an external site..
Uses the Jest package Links to an external site. for a suite of unit tests.
The application must have these classes: Employee, Manager, Engineer, and Intern.
Repository Quality: 13%

Repository has a unique name.
Repository follows best practices for file structure and naming conventions.
Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
Repository contains multiple descriptive commit messages.
Repository contains a high-quality README with description and a link to a walkthrough video.
How to Submit the Challenge

You are required to submit the following for review:
A walkthrough video demonstrating the functionality of the application and passing tests.
A sample HTML file generated using your application.
The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
NOTE
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.
Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Manager. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.


