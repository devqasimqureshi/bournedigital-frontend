## How To Run This Project
  - npm install
  - npm start

## Task Management Tool

Objective Ed Take Home Coding Test:

You can use: 9206728921179133992
For the Access-Token you can use: b337fa90-b472-4ad2-8b76-dfe4496b92ae

Problem:

Create a basic implementation of trello.com task boards.  Trello is a task board that allows you to put tasks on a board, sort them into groups and move them from group to group.  Trello is free, and you can sign up to see it at: https://trello.com/signup.

The goal is not to recreate all the features of Trello, as that would take far too much time for a coding assessment.  Instead, use the basic concept of Trello as a starting point to showcase what you feel are your most relevant skills. 


A REST API is available for this problem.  Please use the following URL: https://dev-game-services.objectiveed.com
To use the service, you will need two things.  The first is your access token for authentication.  Each request should have in its header the key-value pair of “Access-Token” -> XXXXXXXXX.  The second is your boardId.  Both of these will be provided to you in the email you were sent with this test.

Resources:
Group: {
id:
name:
description:
}
Task: {
	id:
	name:
	body:
	groupDto: {Group Resource}
}

Group API’s:

Name: Get Groups
Method: GET
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/groups
Params: None
Returns: List of Group Resources

Name: Create a new Group
Method: POST
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/groups
Params: None
Body: Group Resource
Requirements: No Id in group resource
Returns: Group Resource created

Name: Update a Group
Method: PUT
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/groups
Params: None
Body: Group Resource
Requirements: Id must be in group resource
Returns: Group Resource Updated

Name: Delete a Group
Method: DELETE
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/groups
Params: None
Body: Group Resource
Requirements: Id must be in group resource
Returns: Nothing

Task API’s:

Name: Get Tasks for Board
Method: GET
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/tasks
Params: None
Body: None
Requirements: None
Returns: List of Task Resources

Name: Create Task
Method: POST
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/tasks
Params: None
Body: Task Resource
Requirements: No Id in Task Resource, Task Resource must contain a groupDto
Returns: The Task Resource created

Name: Update Task
Method: PUT
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/tasks
Params: None
Body: A Task Resource
Requirements: Task Resource must have an Id
Returns: The Task Resource after update

Name: Delete Task
Method: DELETE
URL: https://dev-game-services.objectiveed.com/boards/{boardId}/tasks
Params: None
Body: A Task Resource
Requirements: Task Resource must have an Id
Returns: Nothing


Response: Please send your response to jobs@objectiveed.com
Note: If you are sending a .zip please send it via dropbox of google drive link.  .rar files are accepted as well.	
