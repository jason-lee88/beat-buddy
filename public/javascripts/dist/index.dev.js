"use strict";

window.addEventListener('load', function () {
  var signup = document.getElementById("signup");

  if (signup) {
    signup.addEventListener("click", function (e) {
      location.href = '/signup';
    });
  }

  var signin = document.getElementById("signin");

  if (signin) {
    signin.addEventListener("click", function (e) {
      location.href = '/signin';
    });
  }

  var eventsearchbutton = document.getElementById("eventsearchbutton");

  if (eventsearchbutton) {
    eventsearchbutton.addEventListener("click", function _callee2() {
      var searchQuery, eventsData, events, arr;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              searchQuery = document.getElementById("eventsearch").value;

              if (!searchQuery) {
                _context2.next = 14;
                break;
              }

              _context2.next = 4;
              return regeneratorRuntime.awrap(fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=Mm2ukG9cVIg6pnRKDvunqWDSYXwjRK1U&keyword=' + searchQuery, {
                method: 'GET',
                header: {
                  'Accept': 'application/json'
                }
              }));

            case 4:
              eventsData = _context2.sent;
              _context2.next = 7;
              return regeneratorRuntime.awrap(eventsData.json());

            case 7:
              eventsData = _context2.sent;
              console.log("event data is ");
              events = eventsData._embedded.events;
              console.log(events);
              arr = [];
              _context2.next = 14;
              return regeneratorRuntime.awrap(Promise.all(events.map(function _callee(eventsData) {
                var eventID, eventName, eventDate, eventTime, addressName, addressRoad, addressCity, addressState, addressCountry;
                return regeneratorRuntime.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        eventID = eventsData.id;
                        eventName = eventsData.name;
                        eventDate = eventsData.dates.start.localDate;
                        eventTime = eventsData.dates.start.localTime;
                        addressName = eventsData._embedded.venues[0].name;
                        addressRoad = eventsData._embedded.venues[0].address.line1;
                        addressCity = eventsData._embedded.venues[0].city.name;
                        addressState = eventsData._embedded.venues[0].state.name;
                        addressCountry = eventsData._embedded.venues[0].country.name; // console.log("event id is " + eventID);
                        // console.log("The event date is " + eventDate);
                        // console.log("The event time is " + eventTime);
                        // console.log("address name " + addressName);
                        // console.log("address name " + addressRoad);
                        // console.log("address name " + addressCity);
                        // console.log("address name " + addressState);
                        // console.log("address name " + addressCountry);
                        // console.log("------------------------ \n")

                        arr.push({
                          // push a tuple into the array
                          "EventName": eventName,
                          "EventDate": eventDate,
                          "EventTime": eventTime,
                          "AddressName": addressName,
                          "AddressRoad": addressRoad,
                          "AddressCity": addressCity,
                          "AddressState": addressState,
                          "AddressCountry": addressCountry
                        });
                        console.log(arr);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              })));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  }
});