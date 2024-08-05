# Chatbot UI

## Overview
Chatbot UI is a React-based web application designed to provide a user-friendly interface for interacting with AI chatbots. It includes features like real-time chat, session management, and activity visualization. Although the primary focus of the project is frontend development, it also includes a backend server for testing and demonstration. The backend handles AI integration and message storage.
Please take a look at our slide presentation for a detailed project architecture and feature breakdown [link here](https://pitch.com/v/cosmochatui-aumgk3).

## Features
- Real-time chat functionality
- Insightful activity visualization
- Integration with generative AI
- Firebase Data Storage

## Technologies Used
- React.js
- Material-UI for styling
- Material-UI DataGrid for data visualization
- Firbase Database

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

You can download and install Node.js and npm from [https://nodejs.org/](https://nodejs.org/)

## OpenAI API Key
This project requires an OpenAI API key to function. Follow these steps to obtain and configure your API key:

1. Sign up for an account at [https://openai.com/](https://openai.com/)
2. Navigate to the API section and create a new API key


## Installation
1. Clone the repository:
   ```
     git clone https://github.com/prachikane/cosmochatui.git
   ```
2. Navigate to the project directory:
   ```
   cd cosmochat
   ```
3. Install the dependencies:
   ```
    npm install
   ```
4. Navigate to the project directory frontend:
   ```
   cd cosmochatui/functions
   ```
5. Install the firebase dependencies:
   ```
     npm install
   ```

## Configuration
### Creating `.env` file
1. Navigate to the project directory backend:
   ```
     cd cosmochatui
   ```
2. Create a `.env` file in the root directory.
3. Add the following environment variables:
   ```
   REACT_APP_API_KEY = "API key you copied from OpenAI"
   ```
### Setting the Server URL
1. Navigate to the project directory
   ```
     cd cosmochatui
   ```
2. Open the file `package.json`
3. Add "homepage": "http://localhost:3000/homepage" to this file. 

### Run the firebase db
1. Navigate to the project directory firebase config:
   ```
     cd cosmochatui/src
   ```
2. Create a firebase_config.js file. Add your firebase credentials there. These are found in the project overview when you create your project.
3. Inside your firebase project, create a firestore with collection named chats. Create a document named user1 inside this chats collections and then create one more collection named messages in this user1 document.
4. You also need to create a web app connected to your firestore database.

   
## Running the Application
### Run the project
1. Navigate to the project directory backend:
   ```
     cd cosmochatui
   ```
2. Start the development client:
   ```
    npm start
   ```
2. Open your browser and visit `http://localhost:3000/homepage`

## Usage
- Click on "Start New Chat" to begin a chat session.
- Use the input field at the bottom to send messages.
- See the system responses
- Click "See Activity" to view a chat history stats.
- The left sidebar displays the start chat and the see activity buttons.
Please, watch the video on this [link](https://www.loom.com/share/b4597dc4ec394560ab716d0bc8876175?sid=c2c2ede1-2041-4275-8f83-78c02a08f0e7) to see more usage details.

