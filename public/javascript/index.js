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

    const eventsearchform = document.getElementById("eventsearchform");
    if (eventsearchform) {
        eventsearchform.addEventListener("submit", async function (e) {
            e.preventDefault();
            const searchValue = document.getElementById("eventsearch").value;
            if (searchValue.length > 0) {
                location.href = '/?search=' + searchValue;
            }
            else {
                location.href = '/'
            }
        });
    }

    const titleButtons = document.querySelectorAll("button.concerttitle");
    for (titlebutton of titleButtons) {
        titlebutton.addEventListener("click", async function () {
            location.href = '/event/' + this.parentNode.id;
        });
    }

    const interestedButtons = document.querySelectorAll("button.interested");
    for (interestedbutton of interestedButtons) {
        interestedbutton.addEventListener("click", async function () {
            let data = {};
            const eventID = this.parentNode.id;
            for (child of this.parentNode.childNodes) {
                if (child.classList.contains("name")) {
                    data.name = child.innerHTML;
                }
                else if (child.classList.contains("date")) {
                    data.date = child.innerHTML.substring(6);
                }
                else if (child.classList.contains("time")) {
                    data.time = child.innerHTML.substring(6);
                }
                else if (child.classList.contains("addressName")) {
                    data.addressName = child.innerHTML.substring(12);
                }
                else if (child.classList.contains("address")) {
                    data.address = child.innerHTML.substring(15);
                }
            }
            let res = await fetch('/event/' + eventID, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            try {
                res = await res.json();
                window.alert(res.err)
            }
            catch {
                window.alert("You've marked your interest for the event " + data.name + "!");
            }
        })
    }
});