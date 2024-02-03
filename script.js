function redirectButton() {
    let error_redirect = document.getElementById('redirectButton');
    if (error_redirect !== null) {
        console.log('Working as expected, lesss gooo');
    } else {
        alert('Error, liten sannsynlighet for at det ikke fungerer. Jeg skal fikse det så snart som mulig :D');
    }
}


function redirectToTor() {
    const torLink = "https://tor.torry.io/index.php?q=aHR0cHM6Ly9zZWFyY2guYnJhdmUuY29tLw";

    if (torLink) {
        window.open(torLink, "_blank");
    } else {
        alert('Error: Linken er feil eller finnes ikke lenger, jeg skal prøve så fort som mulig og fikse det :D');
    }

}

function handleCommonErrors() {
    // Check for browser support
    if (!window.localStorage) {
        alert('Error: Nettesern din supporter ikke localstorage, for en optimal opplevelse mohahaha :D');
        return true; // Indicate that there was an error
    }

    // Check for network connectivity
    if (!navigator.onLine) {
        alert('Error: Internett tilkoblingen din fungerer ikke.');
        return true; // Indicate that there was an error
    }

    // Jo større "businessen" blir på skolen jo mer debugging må du ha lag resten av debugging tingene her


    return false; // No common errors detected
}



// Toggle black and white mode moahahahhaha

function toggleMode() {
    var element = document.body;

    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");
        localStorage.setItem("mode", "light-mode"); // Save the mode in local storage
    } else {
        element.classList.remove("light-mode");
        element.classList.add("dark-mode");
        localStorage.setItem("mode", "dark-mode"); // Save the mode in local storage
    }
}

// local storage tingen idk
function loadMode() {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
        document.body.classList.add(savedMode);
    }
}

// aktiver localstorage eller no vet ikke bare ikke slett det:D
window.addEventListener('load', loadMode);
// Hvis du leser dette så er du kul mohaahahaha


