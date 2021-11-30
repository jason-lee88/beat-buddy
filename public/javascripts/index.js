window.addEventListener('load', function () {
    const signup = document.getElementById("signup");
    if (signup) {
        signup.addEventListener("click", (e) => {
            location.href = '/signup';
        });
    }

    const signin = document.getElementById("signin");
    if (signin) {
        signin.addEventListener("click", (e) => {
            location.href = '/signin';
        });
    }

    const eventsearchbutton = document.getElementById("eventsearchbutton");
    if (eventsearchbutton) {
        eventsearchbutton.addEventListener("click", async function () {
            const searchQuery = document.getElementById("eventsearch").value;

            if (searchQuery) {
                let eventsData = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=Mm2ukG9cVIg6pnRKDvunqWDSYXwjRK1U&keyword=' + searchQuery, {
                    method: 'GET',
                    header: { 'Accept': 'application/json' }
                })
                eventsData = await eventsData.json();
                const events = eventsData._embedded.events;
                console.log("RAW data is ");
                console.log(events);
                console.log("--------------------------------------");
                console.log("Extracted info: ");
                let arr = [];

                await Promise.all(events.map(async function (eventsData) {
                    const eventID = eventsData.id;
                    const eventName = eventsData.name;
                    const eventDate = eventsData.dates.start.localDate;
                    const eventTime = eventsData.dates.start.localTime;
                    const addressName = eventsData._embedded.venues[0].name;
                    const addressRoad = eventsData._embedded.venues[0].address.line1;
                    const addressCity = eventsData._embedded.venues[0].city.name;
                    const addressState = eventsData._embedded.venues[0].state.name;
                    const addressCountry = eventsData._embedded.venues[0].country.name;

                    // console.log("event id is " + eventID);
                    // console.log("The event date is " + eventDate);
                    // console.log("The event time is " + eventTime);
                    // console.log("address name " + addressName);
                    // console.log("address name " + addressRoad);
                    // console.log("address name " + addressCity);
                    // console.log("address name " + addressState);
                    // console.log("address name " + addressCountry);
                    // console.log("------------------------ \n")

                    arr.push({ // push a tuple into the array
                        "EventName": eventName,
                        "EventDate": eventDate,
                        "EventTime": eventTime,
                        "AddressName": addressName,
                        "AddressRoad": addressRoad,
                        "AddressCity": addressCity,
                        "AddressState": addressState,
                        "AddressCountry": addressCountry
                    });


                }));

                console.log(arr);


            }

        });
    }
});