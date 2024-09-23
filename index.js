const hireButton = document.getElementById("hire-btn");
hireButton.addEventListener('click', function() {
    alert("Checking Details...");
    alert("Hired!");
});

const downloadButton = document.getElementById("download-cv-btn");
downloadButton.addEventListener('click', function() {
    alert("Downloading...");
    alert("Downloaded!");
});

// For the buttons in the About section
const hireButtonAbout = document.getElementById("hire-btn-about");
hireButtonAbout.addEventListener('click', function() {
    alert("Checking Details...");
    alert("Hired!");
});

const downloadButtonAbout = document.getElementById("download-cv-btn-about");
downloadButtonAbout.addEventListener('click', function() {
    alert("Downloading...");
    alert("Downloaded!");
});

const contactButton = document.querySelector(".contact-btn");

contactButton.addEventListener('click', function() {
    let userName = prompt("Please enter your name:");

    if (userName === null || userName.trim() === "") {
        alert("Name is required.");
        return;
    }

    let userMessage = prompt("Please enter your message:");

    if (userMessage === null || userMessage.trim() === "") {
        alert("Message is required.");
        return;
    }

    alert(`Hi ${userName}, your message has been sent!`);
});



