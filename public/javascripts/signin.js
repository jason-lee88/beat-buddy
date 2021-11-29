window.addEventListener('load', function() {
    const submitbutton = document.getElementById("submitbutton");
    if (submitbutton) {
        submitbutton.addEventListener("click", async function() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            let data = {
                username: username,
                password: password
            }
            let res = await fetch('/signin', { // POST request
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