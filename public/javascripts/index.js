window.addEventListener('load', function() {
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
        eventsearchbutton.addEventListener("click", async function() {
            const searchQuery = document.getElementById("eventsearch").value;

            if (searchQuery) {
                console.log("search query is " + searchQuery);
                await fetch('/event?search=' + searchQuery, {
                    method: 'GET',
                    header: {'Accept': 'application/json'}
                })
                .then(response => response.json())
                .then(data => console.log(data))
            }

        });
    }
});