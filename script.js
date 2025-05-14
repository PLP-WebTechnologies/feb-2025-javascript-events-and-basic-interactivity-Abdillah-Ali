// Button click event
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});

// Hover effect
document.getElementById("hoverText").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("hoverText").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#f0f0f0";
});

// Keypress detection
document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    console.log("You pressed: " + event.key);
});

// Change text button
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("textToChange").innerText = "Text Changed!";
});

// Tabs functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Form validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "") {
        alert("Name is required");
        event.preventDefault();
        return;
    }

    if (email === "") {
        alert("Email is required");
        event.preventDefault();
        return;
    }

    if (password === "" || password.length < 8) {
        alert("Password is required and must be at least 8 characters");
        event.preventDefault();
        return;
    }

    // Email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
