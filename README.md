## Technologies Used
•	Frontend: 
          Next.js: A React framework for building user interfaces.
•	Backend:
       Flask: A micro web framework for building REST APIs in Python.
        SQLAlchemy: A library for interacting with the PostgreSQL database                       
•	Database:
         PostgreSQL: A relational database used to store task data.

## Project Link
•	Live Link: https://farhan.mahbub.dev/
•	Github Frontend: https://github.com/FarhanShahriar11/todo-app
•	Github BackEnd: https://github.com/FarhanShahriar11/todo-backend


## Frontend Features (Next.js)
1. Task Form
•	Allows users to enter a task's name and select a status ("pending" or "completed").
•	The task is sent to the Flask API to be saved in the PostgreSQL database.
2. Task List
•	Displays all tasks fetched from the Flask API.
•	Each task shows its name and current status.
3. Task Status Update
•	Users can click a button to mark a task as completed.
•	The frontend sends a PUT request to the Flask API to update the task's status.

4. Delete Task
•	Users can delete a task via a delete button, which sends a DELETE request to the Flask API to remove the task from the database

## Setup Instructions
Frontend (Next.js 15)
1.	Install dependencies:
npx create-next-app@latest todo-app

2.	Start frontend
npm run dev

  By default, Nextjs runs on http://localhost:3000

## Backend Setup (Flask)
Follow these steps to set up the backend (Flask) for your project:
step 1: Install Dependencies
1.	Create a Virtual Environment : It's a good practice to use a virtual environment to isolate your project dependencies.
•	python -m venv venv
      2.Activate the virtual environment:
•	venv\Scripts\activate

## .To install these dependencies, run:
•	pip install flask flask-sqlalchemy psycopg2

## Dependencies to Install:
1.	Flask: The main web framework for building REST APIs.
2.	Flask-SQLAlchemy: To interact with PostgreSQL using SQLAlchemy.
3.	psycopg2-binary: The PostgreSQL adapter for Python.
4.	Flask-CORS: To handle Cross-Origin Resource Sharing (CORS) if you are using the backend API with a frontend running on a different domain.
5.	python-dotenv: To load environment variables from .env files.
6.	gunicorn: A WSGI HTTP server for production .
7.	waitress: An alternative WSGI server for production (used for Windows environments).
8.	SQLAlchemy: The database ORM to interact with the database.

## Step 3: Connect to PostgreSQL Database
1.	Create a PostgreSQL Database:
         Create a database:
•	psql -U postgres
•	create database tasks_db

## Step 4: Run the Flask App
1.	Start the Flask server: Once everything is set up, run the Flask application with:
•	python app.py
By default, Flask runs on http://localhost:5000.


## Deploy on domain

