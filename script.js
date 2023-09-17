document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorText = document.getElementById("errorText");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // You can add your authentication logic here.
        // For this example, we're simply checking if the username and password are "admin".
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "admin") {
            // Successful login, you can redirect or perform other actions here.
            window.location.href="next_page.html";
        } else {
            // Display an error message if authentication fails.
            alert( "Invalid username or password");
        }
    });
});
