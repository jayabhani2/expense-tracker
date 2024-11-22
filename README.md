# expense-tracker

An Expense Tracker application to manage your income and expenses efficiently. The application allows users to add, view, and delete their financial entries, with a net balance calculation based on the total income and expenses.

## Deployed Link
https://expense-tracker-kohl-theta.vercel.app/

## Other Deployments
Backend (Render) : https://expense-tracker-t7xv.onrender.com
MongoDB Atlas for database

## Features
Add Income/Expense: Users can add a new entry with details such as amount, description, date, and type.
View Entries: Display a list of all income and expense entries.
Delete Entry: Delete an existing entry.
Net Balance: Automatically calculates and displays the total net balance.

## Technologies Used
Frontend
React.js: For building the user interface.
Bootstrap: For styling and creating a visually appealing design.

Backend
Node.js: For handling server-side logic.
Express.js: As the web framework to manage APIs.

Database
MongoDB: For storing income and expense entries persistently.

## API Endpoints
Base URL
http://localhost:5000

Endpoints
Fetch All Entries
URL: /api/entries
Method: GET
Description: Fetches all income and expense entries with the calculated net balance.

Response Example:
{
  "entries": [
    {
      "_id": "123abc",
      "amount": 1000,
      "description": "Salary",
      "date": "2024-11-21",
      "type": "Income"
    },
    {
      "_id": "456def",
      "amount": 200,
      "description": "Groceries",
      "date": "2024-11-20",
      "type": "Expense"
    }
  ],
  "netBalance": 800
}

Add a New Entry
URL: /api/entries
Method: POST
Description: Adds a new income or expense entry.

Request Body Example:
{
  "amount": 500,
  "description": "Freelance work",
  "date": "2024-11-21",
  "type": "Income"
}

Response Example:
{
  "message": "Entry added successfully"
}

Delete an Entry
URL: /api/entries/:id
Method: DELETE
Description: Deletes an entry based on its unique ID.

Response Example:
{
  "message": "Entry deleted successfully"
}

## How to Run Locally
Prerequisites
Node.js installed.
MongoDB installed and running.
A code editor like VS Code.
Git installed.

Steps
Clone the Repository:
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker

Set Up Backend:
Navigate to the backend folder:
cd backend

Install dependencies:
npm install
Create a .env file in the backend folder with the following content:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server:
npm start

Set Up Frontend:
Navigate to the frontend folder:
cd ../frontend

Install dependencies:
npm install

Start the frontend development server:
npm start

## Access the Application:
Open your browser and navigate to http://localhost:3000.


## MongoDB
Used as the database to store financial entries persistently.
Each entry includes:
Amount
Description
Date
Type (Income/Expense)

## Bootstrap
Used for styling all components.
Ensures the application has a unique, creative, and visually appealing design.

## Author
Developed by Jay Abhani.
