window.addEventListener('load', async function() {
    const instagram = document.getElementById("instagram");
    if (instagram) {
        instagram.addEventListener("input", function() {
            if (instagram.value.charAt(0) !== "@") {
                instagram.value = "@" + instagram.value;
            }
        })
    }

    const snapchat = document.getElementById("snapchat");
    if (snapchat) {
        snapchat.addEventListener("input", function() {
            if (snapchat.value.charAt(0) !== "@") {
                snapchat.value = "@" + snapchat.value;
            }
        })
    }

    const submitbutton = document.getElementById("submitbutton");
    if (submitbutton) {
        submitbutton.addEventListener("click", async function() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            let data = {
                username: username,
                password: password,
                email: document.getElementById("email").value,
                instagram: document.getElementById("instagram").value.substring(1),
                snapchat: document.getElementById("snapchat").value.substring(1)
            }
            let res = await fetch('/signup', { // POST request
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            try { // error was returned
                res = await res.json();
                window.alert(res.err)
            }
            catch { // no error was returned (redirect occurred)
                location.href = '/';
            }
        });
    }
});