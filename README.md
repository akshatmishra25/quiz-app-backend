## Online Quiz Application
This is a RESTful API for a basic online quiz application built using Node.js, Express.js, and MongoDB. It supports user authentication, quiz management, and allows users to take quizzes and view their results.

## Features
# User Registration & Login
# Create Quizzes with Multiple Choice Questions (MCQ)
# Take quizzes and submit answers
# View quiz results and scores

## Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or later)
MongoDB (local or cloud-based, e.g., MongoDB Atlas)

## Installation
Clone the repository:


``` git clone https://github.com/yourusername/quiz-app.git ```

Navigate to the project directory:

`` cd quiz-app ``
Install dependencies:

``` npm install ```
Set up your environment variables:

Create a .env file in the root of the project and add the variables given in the .env.sample file

## Running the Application
To start the application, use the following command:

``` npm run dev ```
This will start the server on the port specified in your .env file.

## API Endpoints
# Authentication
Register User

POST api/auth/register
Request Body:

``` {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
} ``

Login User

POST api/auth/login
Request Body:

``` {
  "email": "john@example.com",
  "password": "password123"
} ```
Response:

``` {
  "token": "your_jwt_token"
} ```

# Quiz Management
Create Quiz

POST api/quiz
Request Body:

{
  "title": "JavaScript Basics Quiz",
  "questions": [
    {
      "question": "What does 'var' keyword declare in JavaScript?",
      "options": ["A constant variable", "A block-scoped variable", "A function-scoped variable", "None of the above"],
      "correctAnswer": 2
    },
    {
      "question": "How do you write 'Hello World' in an alert box?",
      "options": ["alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "msgBox('Hello World');"],
      "correctAnswer": 1
    }
  ]
}
Get All Quizzes

GET api/quizzes

Get Quiz Details

GET api/quiz/:id

Quiz Submission
Submit Quiz Answers
POST api/quiz/submit
Request Body:

{
  "quizId": "quiz_id",
  "answers": [2, 1, 3]
}
