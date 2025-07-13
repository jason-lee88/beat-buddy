window.addEventListener('load', function () {
    const searchform = document.getElementById("usersearchform");
    if (searchform) {
        searchform.addEventListener("submit", function (e) {
            e.preventDefault();
            const searchValue = document.getElementById("usersearch").value;
            if (searchValue.length > 0) {
                location.href = '/users?search=' + searchValue;
            }
            else {
                location.href = '/users';
            }
        });
    }

    const removeUserButtons = document.querySelectorAll("button.remove");
    for (removebutton of removeUserButtons) {
        removebutton.addEventListener("click", async function () {
            for (child of this.parentNode.childNodes) {
                if (child.className == "username") {
                    fetch('/users/' + child.innerHTML, {
                        method: 'DELETE'
                    });
                    location.reload();
                }
            }
        })
    }
});