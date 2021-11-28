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
});