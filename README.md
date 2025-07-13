## Project Description

The purpose of Beat Buddy is for users to express interest in upcoming music events, and meet other people who are interested in attending. It is aimed at those who want to attend a concert but are discouraged because they have no companion to go with. The app uses the Ticketmaster API as a way to retrieve upcoming concerts and festivals, and BeatBuddy displays all users interested in a specified event. It also provides other users contact information on their profile so other users can contact them. On this app they can talk to other users and become "beat buddies" prior to the event!

## Technologies/Libraries/Frameworks
- Frontend: Pug/HTML/CSS
- Backend: Express.js
- Database: MongoDB/Mongoose
- External Library: bcrypt (To hash passwords for database security)
- External API: TicketMaster API
- Hosting: Netlify

## How to use Beat Buddy
Once you create an account or sign in, you will be taken to a home page with a search bar to search concerts and events. You can search an event by event name, and a list of concerts (courtesy of Ticketmaster API) will appear with more details. You can click the "I'm Interested!" button on any of the events to mark yourself as interested for that event. By clicking on the event title, you can see a list of all users who are interested in that event. If you want to reach out to any user on that list, you can head to the Users tab and search their username to get their contact information they entered when they signed up.
