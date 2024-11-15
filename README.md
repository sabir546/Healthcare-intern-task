Healthcare Services Web Application

A simple web application to manage healthcare services, allowing users to add, view, update, and delete service details. This application is built with Node.js, Express.js, MongoDB, and EJS, and styled using Tailwind CSS.

Table of Contents
Features
Technologies
Setup
Usage
API Endpoints
Testing
License
Features
Add Services: Add a new healthcare service with a name, description, and price.
View Services: View a list of all available services.
Update Services: Edit service details.
Delete Services: Remove a service from the list.
Technologies
Backend: Node.js, Express.js, MongoDB
Frontend: EJS, Tailwind CSS
Testing: Jest, Supertest (for API testing)
Setup
Prerequisites
Node.js (version 14 or higher)
MongoDB installed and running (or use MongoDB Atlas for a hosted MongoDB instance)
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <project-folder>

Install dependencies:
bash  Copy code
npm install
Configure MongoDB:

Ensure MongoDB is running on your local machine.
If using MongoDB Atlas or a different connection URI, update it in models/user.js:
javascript
Copy code
mongoose.connect("mongodb://127.0.0.1:27017/healthCare");
Start the server:
  install nodemon to your system
 npm i nodemon

 To run the server
 bash Copy code
 nodemon 

The server should now be running on http://localhost:3000.

