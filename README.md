# Beat Buddy  
Live web app:  https://beat-buddy.herokuapp.com/

## Project Description  
The purpose of Beat Buddy is for users to express interest in upcoming music events, and meet other people who are interested in attending. It is aimed at those who want to attend a concert but are discouraged because they have no companion to go with. The app will use the Ticketmaster API as a way to retrieve upcoming concerts and festivals BeatBuddy displays the number of members not interested/interested/going to an event. It also provides other users contact information on their profile so other users can contact them. On this app they can talk to other users and become "beat buddies" prior to the event.
  
## Team  
Jason Lee: Frontend & flex    
Hua Chen: Frontend  
Breana Lo: Backend  
Judy Zhang: Backend  
  
## Technologies/Libraries/Frameworks  
Frontend:  
  -React.js  
  
Backend:  
  -Express.js  
  
Database:  
  -MongoDB/Mongoose  
  
External Library:  
  -bycrypt  
  
External API:  
  -TicketMaster API
  
Hosting:  
  -Heroku  
  
## How to run Beat Buddy as an admin  
  1. Clone this repository locally  
  2. Create an .env file with the contents of  
  "MONGODB_URI=mongodb://<username>:<password>@cluster0-shard-00-00.8bybw.mongodb.net:27017,cluster0-shard-00-01.8bybw.mongodb.net:27017,cluster0-shard-00-02.8bybw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-e4pdr2-shard-0&authSource=admin&retryWrites=true&w=majority"  
  3. Install NPM
  4. Run 'npm start run' in the command line
  5. View app from 'localhost:3000'