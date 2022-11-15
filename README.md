## Project Description
The purpose of Beat Buddy is for users to express interest in upcoming music events, and meet other people who are interested in attending. It is aimed at those who want to attend a concert but are discouraged because they have no companion to go with. The app will use the Ticketmaster API as a way to retrieve upcoming concerts and festivals BeatBuddy displays the number of members not interested/interested/going to an event. It also provides other users contact information on their profile so other users can contact them. On this app they can talk to other users and become "beat buddies" prior to the event.

## Team
- Jason Lee: Project Leader, Flexed across all parts
- Hua Chen: Frontend
- Breana Lo: Backend (Sign up/Sign in/User model) + Launching on Heroku
- Judy Zhang: Backend (Ticketmaster API/Events model)

## Technologies/Libraries/Frameworks
- Frontend: Pug/HTML/CSS
- Backend: Express.js
- Database: MongoDB/Mongoose
- External Library: bcrypt (To hash passwords for database security)
- External API: TicketMaster API
- Hosting: Heroku

## How to run Beat Buddy locally
  1. Clone this repository.
  2. Create a `.env` file in the root directory containing the following:
  ```
  MONGODB_URI=mongodb://user:pass@cluster0-shard-00-00.8bybw.mongodb.net:27017,cluster0-shard-00-01.8bybw.mongodb.net:27017,cluster0-shard-00-02.8bybw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-e4pdr2-shard-0&authSource=admin&retryWrites=true&w=majority
  ```
  3. Run `npm install` to install libraries & dependencies.
  4. Run `npm run start`.
  5. The app will be located at http://localhost:3000/.

## How Beat Buddy works
Once you create an account or sign in, you will be taken to a home page with a search bar to search concerts and events. You can search an event by event name, and a list of concerts (courtesy of Ticketmaster API) will appear with more details. You can click the "I'm Interested!" button on any of the events to mark yourself as interested for that event. By clicking on the event title, you can see a list of all users who are interested in that event. If you want to reach out to any user on that list, you can head to the Users tab and search their username to get their contact information they entered when they signed up.

## Notes about using Beat Buddy
Beat Buddy has two different account roles: users and admins. Admins have the ability to remove users via the Users tab on the webpage. If you would like to test this admin feature, log in on the website with the following information:
```
username: admin
password: pass
```
If you just want to use it as a normal user, feel free to create an account on the website.
