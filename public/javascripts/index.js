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
            const searchValue = document.getElementById("eventsearch").value;
            if (searchValue.length > 0) {
                location.href = '/?search=' + searchValue;
            }
            else {
                location.href = '/'
            }
        });
    }
});