window.addEventListener('load', function() {
    const searchbutton = document.getElementById("usersearchbutton");
    if (searchbutton) {
        searchbutton.addEventListener("click", function() {
            const searchValue = document.getElementById("usersearch").value;
            if (searchValue.length > 0) {
                location.href = '/users?search=' + searchValue;
            }
            else {
                location.href = '/users';
            }
        });
    }
});