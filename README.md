# Full Stack Todo List

This is a full stack Todo list application that features a React-based frontend and a Node.js/Express-based backend. The application uses MongoDB as the database to store Todo tasks.

## Technologies and Tools

Here is a list of the key technologies and tools used in this project:

### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- REST API
- Helmet
- Morgan
- Mocha
- Chai
- CORS
- dotenv
- body-parser
- winston

### Features

- Users can create, read, update, and delete Todo tasks.
- The application is secured using Helmet to prevent security issues.
- API actions are logged with Morgan to facilitate debugging and monitoring.
- Unit testing is done with Mocha and Chai to ensure proper functionality.

### Installation and Running

Follow these steps to install and run the application:

1. Clone the GitHub repository to your local machine.
2. Navigate to the backend directory and run `npm install` to install all necessary dependencies.
3. Create a `.env` file in the backend directory and add your configuration settings, including your MongoDB connection string.
4. Run `npm start` in the backend directory to start the server.
5. Navigate to the frontend directory and run `npm install` to install all necessary dependencies.
6. Run `npm start` in the frontend directory to start the development server.
7. Open your browser and navigate to `http://localhost:3000` to use the application.

### Testing

To run unit tests in the backend, navigate to the backend directory and run `npm test`.

### License

This project is licensed under the ISC license.
