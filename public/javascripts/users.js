window.onload = function() {
    const home = document.getElementById("home");
    if (home) {
        home.addEventListener("click", (e) => {
            location.href = '/';
        });
    }

    const users = document.getElementById("users");
    if (users) {
        users.addEventListener("click", (e) => {
            location.href = '/users';
        });
    }

    const profile = document.getElementById("profile");
    if (profile) {
        profile.addEventListener("click", (e) => {
            location.href = '/profile';
        })
    }
}